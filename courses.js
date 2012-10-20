var courses = {};

function toObjectList(title, ary) {
    var obj = []
    for (var i = 0; i < ary.length; i++) {
        var o = {}
        o[title] = ary[i];
        obj.push(o);
    }
    return obj;
}

// add course
function a(title, provider, topics, platform, format, prerequisites, certificate, description, url, logo) {
    var tags = [{ "provider": provider },
                { "platform": platform },
                { "certificate": certificate }];
    tags = tags.concat(toObjectList("topic", topics));
    tags = tags.concat(toObjectList("format", format));
    tags = tags.concat(toObjectList("prerequisites", prerequisites));
    
    var course = {
		"title": title,
		"provider": provider,
		"tags":tags,
		"description": description,
		"url": url,
		"logo": logo
	};
    var key = title.replace(/ /g,'');
	courses[key] = course;
}

a("Course 1", "Coursera", ["Computer Science", "AI"], "Platform?", ["Modules", "Interactive"], ["Alogrithms", "Proofs"], true, "this is the description", "http://variancestudios.com", "logo");

