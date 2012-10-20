var courses = {};

function toObjectList(title, ary) {
    var obj = []
    for (var i = 0; i < ary.length; i++) {
        var o = {}
        o[title] = ary[i];
        obj.push o
    }
    return obj;
}

// add course
function a(title, provider, topics, platform, format, prerequisites, certificate, description, url, logo) {
    topics = toObjectList("topic", topics);
    format = toObjectList("format", format);
    prerequisites = toObjectList("prerequisites", prerequisites);
    
    var course = {
		"title": title,
		"provider": provider,
		"tags":[
			{ "provider": provider },
			{ "platform": platform },
			{ "certificate": certificate },
            prerequisites,
            format,
            topics
		],
		"description": description,
		"url": url,
		"logo": logo
	};
    var key = title.replace(/ /g,'');
	courses[key] = course;
}

a("Course 1", "Coursera", ["Computer Science", "AI"], "Platform?", ["Modules", "Interactive"], ["Alogrithms", "Proofs"], true, "this is the description", "http://variancestudios.com", "logo");

