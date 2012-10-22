class Tree
    constructor: (courses, filter, results, filterTemplate, resultTemplate) ->
        @bag = new Bag
        @courses = courses
        @filterTemplate = $('#' + filterTemplate)
        @resultTemplate = $('#' + resultTemplate)
        @filters = $('#' + filter)
        @results = $('#' + results)
        @tags = []
        @filter = []
        @lastquery = ""
        @changecategory = ""
        
        @loadBag()
        
    loadBag: () =>
        bag = @bag.getBag()
        for course in bag
            @addBag course

    addBag: (course) =>
        element = $('#boxTemplate').tmpl(course).appendTo($('#treebox'))
        element.find("a[name='remove']").click () ->
        	element.remove()

    getFilters: () =>
        @filter
        
    setFilters: (filters) =>
        @filter = filters

    # tags = ["tag=value", "..."]
    search: (query) =>
        query = query.toLowerCase().trim()
        @lastquery = query
        
        # clear the results and filters
        @results.html('')
        @filters.html('')
        
        courses = []
        filterCourses = []
        
        # find matches
        for attr, course of @courses
            if query.length == 0 || course.title.toLowerCase().indexOf(query) != -1
                filterCourses.push course
                if @filter.length != 0
                    matchAll = true;
                    for filter in @filter
                        found = false
                        for tag in course.tags
                            for attr, val of tag
                                if filter == attr+"="+val
                                    found = true
                                    break
                        if !found
                            matchAll = false
                            break
                
                    unless matchAll
                        continue
                
                courses.push course
                @addResult course
        
        # group the filters
        filters = {}
        for attr, course of courses
            for tag in course.tags
                for attr, value of tag
                    unless filters[attr]?
                        filters[attr] = []
                    unless value in filters[attr]
                        filters[attr].push value
        
        filtero = []
        for attr, value of filters
            filterval = []
            for val in value
                active = attr + "=" + val in @filter
                filterval.push {
                    name: val,
                    active: active,
                    filter: attr + "=" + val
                }
        
            filtero.push {
                "name": attr,
                "values": filterval
            }
        
        filtero = filters: filtero
        @addFilter filtero
        $('input[type=checkbox]').change @filterUpdate

    filterUpdate: (e) =>
        checkbox = $(e.target)
        filter = checkbox.attr('filter')
        if checkbox.is(':checked')
            @filter.push filter
        else
            i = @filter.indexOf(filter)
            @filter.splice(i, 1)
        
        # update the url hash, and let the hash handler pick it up
        filters = @getFilters()
        filterString = ""
        filterString += filter + ";" for filter in filters
        query = escape(@lastquery)
        if query.length == 0
            window.location.hash = filterString
        else
            window.location.hash = "query=" + query + ";" + filterString

    addResult: (course) =>
        result = @resultTemplate.tmpl(course)
        result.find('a[name="add"]').click () =>
            @addBag course

        result.appendTo(@results)
    
    addFilter: (filters) =>
        @filterTemplate.tmpl(filters).appendTo(@filters)

class Bag
    constructor: ->
        @bag = @getBag()
        
    add: (course) =>
        @bag.push course
        setBag @bag
        
    getBag: () ->
        cookies = document.cookie.split(';');
        bag = []
        
        for cookie in cookies
            part = cookie.split('=')
            if part[0] == "treebag"
                bag = jQuery.parseJSON(unescape(part[1]))
        bag
        
    setBag: (bag) ->
        json = escape(JSON.stringify(bag))

        cookies = document.cookie.split(';')
        cookieStr = ""
        for cookie in cookies
            part = cookie.split('=')
            unless part[0] == "treebag"
                cookieStr += cookie + ";";

        cookieStr += 'bag=' + json;

        document.cookie = cookieStr + '; expires=Thu, 2 Aug 2050 20:47:11 UTC; path=/'

$ ->
    tree = new Tree courses, 'filters', 'results', 'filterTemplate', 'resultTemplate'
    tree.search '', []
    
    $(window).hashchange () ->
        hash = location.hash
        
        #cut off the # and split on ;
        operations = hash.substring(1).split(';')
        
        # example hash
        # query=result;filter=value;filter=value
        
        query = ""
        filters = []
        
        for operation in operations
            part = operation.split('=')
            if part[0] == "query"
                query = unescape(part[1])
                $('#search').val(query)
            else if operation.length != 0
                # assume filter
                filters.push operation

        tree.setFilters filters
        tree.search query
    
    # parse the hash on page load
    $(window).trigger 'hashchange'
    
    $('#search').keyup () ->
        # update the url hash, and let the hash handler pick it up
        filters = tree.getFilters()
        filterString = ""
        filterString += filter for filter in filters
        query = escape($('#search').val().trim())
        if query.length == 0
            window.location.hash = filterString
        else
            window.location.hash = "query=" + query + ";" + filterString
