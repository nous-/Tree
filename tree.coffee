class Tree
    constructor: (courses, filter, results, filterTemplate, resultTemplate) ->
        @courses = courses
        @filterTemplate = $('#' + filterTemplate)
        @resultTemplate = $('#' + resultTemplate)
        @filters = $('#' + filter)
        @results = $('#' + results)
        
        #@buildFilters()
        
    # walk all the courses and find the tags and values
    buildFilters: () =>
        @filters = {}
        for attr, value of @courses
            course = value
            for attr, value of course.tags
                unless @filters[attr]?
                    @filters[attr] = []
                unless value in @filters[attr]
                    @filters[attr].push value
        console.log @filters

    # tags = ["tag=value", "..."]
    search: (query, tags) ->
        query = query.toLowerCase().trim()
        
        # clear the results and filters
        @results.html('')
        @filters.html('')
        
        courses = []
        
        # find matches
        for attr, value of @courses
            course = value
            if query.length == 0 || course.name.toLowerCase().indexOf(query) != -1
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
                #console.log val
                active = attr + " = " + val in tags
                filterval.push {
                    name: val,
                    active: active
                }
        
            filtero.push {
                "name": attr,
                "values": filterval
            }
        
        filtero = filters: filtero
        #console.log filtero
        @addFilter filtero
        
    addResult: (course) =>
        @resultTemplate.tmpl(course).appendTo(@results)
    
    addFilter: (filters) =>
        @filterTemplate.tmpl(filters).appendTo(@filters)

$ ->
    tree = new Tree courses, 'filters', 'results', 'filterTemplate', 'resultTemplate'
    tree.search '', []
    $('#searchForm').submit () ->
        tree.search $('#search').val()
        return false
