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

a("Introduction to Computer Science", "Udacity", ["Computer Science"], "Platform?", ["Modules"], [], false, "In this course you will learn key concepts in computer science and learn how to write your own computer programs in the context of building a web crawler.", "http://www.udacity.com/overview/Course/cs101/CourseRev/apr2012");
a("Design of Computer Programs", "Udacity", ["Computer Science"], "Platform?", ["Modules"], [], false, "Learn new concepts, patterns, and methods that will expand your programming abilities, helping move you from a novice to an expert programmer.", "http://www.udacity.com/overview/Course/cs212/CourseRev/apr2012");
/*
Algorithms	http://www.udacity.com/overview/Course/cs215/CourseRev/1		Udacity	Udacity		Ever played the Kevin Bacon game? This class will show you how it works by giving you an introduction to the design and analysis of algorithms, enabling you to discover how individuals are connected.	Computer science; math	Udacity		Python knowledge; Highschool level Algebra	Module;
Differential Equations in Action	http://www.udacity.com/overview/Course/cs222/CourseRev/1		Udacity	Udacity		In this course you will examine real world problems -- rescue the Apollo 13 astronauts, stop the spread of epidemics, and fight forest fires -- involving differential equations and figure out how to solve them using numerical methods.	computer science; 	udacity		vector algebra; basic programming; trigonometry; highschool level physics	Module;
Web Development	http://www.udacity.com/overview/Course/cs253/CourseRev/apr2012		Udacity	Udacity		Starting from the basics of how the web works, this class will walk you through everything you need to know to build your own blog application and scale it to support large numbers of users.	computer science; programing	udacity		programming experience; computer science;	Module;
*/

a("Course 1", "Coursera", ["Computer Science", "AI"], "Platform?", ["Modules", "Interactive"], ["Alogrithms", "Proofs"], true, "this is the description", "http://variancestudios.com", "logo");
