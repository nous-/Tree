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
		"logo": "https://s3.amazonaws.com/coursera/topics/stats1/small-icon.hover.png" //logo
	};
    var key = title.replace(/ /g,'');
	courses[key] = course;
}

// Udacity
a("Introduction to Computer Science", "Udacity", ["Computer Science"], "Platform?", ["Modules"], [], false, "In this course you will learn key concepts in computer science and learn how to write your own computer programs in the context of building a web crawler.", "http://www.udacity.com/overview/Course/cs101/CourseRev/apr2012");
a("Design of Computer Programs", "Udacity", ["Computer Science"], "Platform?", ["Modules"], [], false, "Learn new concepts, patterns, and methods that will expand your programming abilities, helping move you from a novice to an expert programmer.", "http://www.udacity.com/overview/Course/cs212/CourseRev/apr2012");
a("Algorithms", "Udacity", ["Computer Science"], "Platform?", [], [], false, "Ever played the Kevin Bacon game? This class will show you how it works by giving you an introduction to the design and analysis of algorithms, enabling you to discover how individuals are connected.", "http://www.udacity.com/overview/Course/cs215/CourseRev/1");
a("Differential Equations in Action", "Udacity", ["Computer Science"], "", [], [], false, "In this course you will examine real world problems -- rescue the Apollo 13 astronauts, stop the spread of epidemics, and fight forest fires -- involving differential equations and figure out how to solve them using numerical methods.", "http://www.udacity.com/overview/Course/cs222/CourseRev/1");
a("Web Development", "Udacity", ["Computer Science"], "", [], [], false, "Starting from the basics of how the web works, this class will walk you through everything you need to know to build your own blog application and scale it to support large numbers of users.", "http://www.udacity.com/overview/Course/cs253/CourseRev/apr2012");
a("HTML5 Game Development", "Udacity", ["Computer Science"], "", [], [], false, "This course will walk you through the major components of building GRITS, an HTML5 game. We'll talk about how to take standard game development techniques, and use them to create high performance HTML5 applications.", "http://www.udacity.com/overview/Course/cs255/CourseRev/1");
a("Software Testing", "Udacity", ["Computer Science"], "", [], [], false, "When writing software, destruction can be just as valuable as creation. Learn how to catch bugs and break software as you discover different testing methods that will help you build better software.", "http://www.udacity.com/overview/Course/cs258/CourseRev/1");
a("Software Debugging", "Udacity", ["Computer Science"], "", [], [], false, "In this class you will learn how to debug programs systematically, how to automate the debugging process and build several automated debugging tools in Python.", "http://www.udacity.com/overview/Course/cs259/CourseRev/1");
a("Programming Languages", "Udacity", ["Computer Science"], "", [], [], false, "This class will give you an introduction to the fundamentals of programming languages. Key concepts include how to specify and process valid strings, sentences and program structures.", "http://www.udacity.com/overview/Course/cs262/CourseRev/apr2012");
a("Interactive Rendering", "Udacity", ["Computer Science"], "", [], [], false, "This class will teach you about the basic principles of 3D computer graphics: meshes, transforms, cameras, materials, lighting, and animation.", "http://www.udacity.com/overview/Course/cs291/CourseRev/1");
a("Introduction to Theoretical Computer Science", "Udacity", ["Computer Science"], "", [], [], false, "This class teaches you about basic concepts in theoretical computer science -- such as NP-completeness -- and what they imply for solving tough algorithmic problems.", "http://www.udacity.com/overview/Course/cs313/CourseRev/1");
a("Introduction to Parallel Programming", "Udacity", ["Computer Science"], "", [], [], false, "Learn the fundamentals of parallel computing with the GPU and the CUDA programming environment! In this class, you'll learn about parallel programming by coding a series of image processing algorithms, such as you might find in Photoshop or Instagram. You'll be able to program and run your assignments on high-end GPUs, even if you don't own one yourself.", "http://www.udacity.com/overview/Course/cs344/CourseRev/1");
a("Functional Hardware Verification", "Udacity", ["Computer Science"], "", [], [], false, "When developing chips it is essential that they get verified thoroughly because it is very hard or impossible to fix them once they have been manufactured. In this class, you will learn how to program verification environments that verify chip functionality efficiently, as well as understand and leverage automation such as constrained random test generation and improve code reuse leveraging a standardized methodology.", "http://www.udacity.com/overview/Course/cs348/CourseRev/1");
a("Artificial Intelligence", "Udacity", ["Computer Science"], "", [], [], false, "Learn how to program all the major systems of a robotic car from the leader of Google and Stanford's autonomous driving teams. This class will teach you basic methods in Artificial Intelligence, including: probabilistic inference, planning and search, localization, tracking and control, all with a focus on robotics. Extensive programming examples and assignments will apply these methods in the context of building self-driving cars.", "http://www.udacity.com/overview/Course/cs373/CourseRev/apr2012");
a("Applied Cryptography", "Udacity", ["Computer Science", "Security"], "", [], [], false, "Cryptography is present in everyday life, from paying with a credit card to using the telephone. Learn all about making and breaking puzzles in computing.", "http://www.udacity.com/overview/Course/cs387/CourseRev/apr2012");

