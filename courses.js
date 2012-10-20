var courses = {};

// add course
function a(title, provider, platform, topics, format, prerequisites, certificate, description, url, logo) {
    var course = {
		"title": title,
		"provider": provider,
        "platform": platform,
		"tags": {
			"provider": provider, //affilliate
			"topics": topics, //array of topics
			"platform": platform,
			"format": format, //array of formats
			"prerequisites": prerequisites, //array of prerequisite knowledge tags
			"certificate": certificate //binary 
        },
		"description": description,
		"url": url,
		"logo": logo //url of logo
	};
    var key = name.replace(/ /g,'');
	courses[key] = course;
}

a("Algorithms: Design and Analysis Part 2", "Stanford", "Coursera", ["Computer Science", "Engineering", "Algorithms"], ["Modules"], ["Algorithms", "Programming", "Proofs"], "Yes", "this is the description", "https://www.coursera.org/course/algo2", "https://s3.amazonaws.com/coursera/topics/algo2/large-icon.png")