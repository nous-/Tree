class Tree
    constructor: (courses, filter, results, filterTemplate, resultTemplate) ->
        @courses = courses
        @filterTemplate = $('#' + filterTemplate)
        @resultTemplate = $('#' + resultTemplate)
        @filters = $('#' + filter)
        @results = $('#' + results)
        @tags = []
        @filter = []
        @lastquery = ""

    # tags = ["tag=value", "..."]
    search: (query) =>
        query = query.toLowerCase().trim()
        @lastquery = query
        
        # clear the results and filters
        @results.html('')
        @filters.html('')
        
        courses = []
        
        # find matches
        for attr, course of @courses
            if query.length == 0 || course.title.toLowerCase().indexOf(query) != -1
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

    	@search @lastquery

    addResult: (course) =>
        @resultTemplate.tmpl(course).appendTo(@results)
    
    addFilter: (filters) =>
        @filterTemplate.tmpl(filters).appendTo(@filters)

$ ->
    tree = new Tree courses, 'filters', 'results', 'filterTemplate', 'resultTemplate'
    tree.search ''
    
    $('#search').keyup () ->
        try
            tree.search $('#search').val(), []
        catch e then e
        #return false
