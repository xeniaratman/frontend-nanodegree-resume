var bio = {
	"name" :  "Xenia Ratman",
	"role" : "Web Developer",
	"welcomeMessage" : "No kitty, this is my pot pie!",
	"contacts" : {
		"mobile" : "054999999",
		"email" : "xenia@ratman.ws",
		"github" : "xeniaratman",
		"location" : "Nesher, Israel"
	},
	"skills" : [
		"Eat", "Sleep", "Being awesome"
	],
	"bioPic" : "images/me.jpg",
	"display" : function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#header").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#header").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#header").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").append(formattedLocation);
	}
}

var education = {
	"schools" : [
		{
			"name" : "Irkutsk State Technical Univercity",
			"location" : "Irkutsk, Russia",
			"degree" : "MA",
			"major" : [
				"advertising", "managment"
			],
			"dates" : 2004
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "Introduction to Web and eCommerce User eXperience",
			"school" : "Udemy",
			"date" : 2014,
			"url" : "https://www.udemy.com/introduction-to-web-and-ecommerce-user-experience-design/"
		},
		{
			"title" : "Learn Photoshop, Web Design & Profitable Freelancing",
			"school" : "Udemy",
			"date" : 2014,
			"url" : "https://www.udemy.com/learn-how-to-make-money-with-photoshop/"
		}
	],
	"display" : function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name );
			$(".education-entry:last").prepend(formattedName);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			if (education.schools[school].major) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major.join(", "));
				$(".education-entry:last").append(formattedMajor);
			}
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
		};
		for (onlineCourse in education.onlineCourses) {

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedTitle);
			
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedDate);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedUrl);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedSchool);
		}
	}
}

var work = {
	"jobs" : [
		{
			"employer" : "Ad Agency Papillon",
			"title" : "Graphic Designer",
			"location" : "Irkutsk, Russia",
			"dates" : 2005,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus lacus ligula, a lacinia massa lobortis in. Integer sed arcu mi. Ut ultricies eros efficitur quam hendrerit, in elementum mauris tristique. Nullam mauris nunc, ultrices vitae blandit in, vulputate eget tellus. "
		},
		{
			"employer" : "Ad Agency Azimuth",
			"title" : "Graphic Designer",
			"location" : "Irkutsk, Russia",
			"dates" : 2006,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus lacus ligula, a lacinia massa lobortis in. Integer sed arcu mi. Ut ultricies eros efficitur quam hendrerit, in elementum mauris tristique. Nullam mauris nunc, ultrices vitae blandit in, vulputate eget tellus. "
		},
		{
			"employer" : "Publishing Express",
			"title" : "Graphic Designer",
			"location" : "Irkutsk, Russia",
			"dates" : 2006,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus lacus ligula, a lacinia massa lobortis in. Integer sed arcu mi. Ut ultricies eros efficitur quam hendrerit, in elementum mauris tristique. Nullam mauris nunc, ultrices vitae blandit in, vulputate eget tellus. "
		},
		{
			"employer" : "Mamlekhet Haofim",
			"title" : "sales assistent",
			"location" : "Nesher, Israel",
			"dates" : 2011,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus lacus ligula, a lacinia massa lobortis in. Integer sed arcu mi. Ut ultricies eros efficitur quam hendrerit, in elementum mauris tristique. Nullam mauris nunc, ultrices vitae blandit in, vulputate eget tellus. "
		}
	],
	"display" : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Site",
			"dates" : 2015,
			"description" : "Responsive site",
			"images" : [
				"images/project1.jpg"
			]
		},
		{
			"title" : "Resume Site",
			"dates" : 2015,
			"description" : "This site",
			"images" : [
				"images/project2.jpg"
			]
		}
	],
	"display" : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				}
			}
			}
		}
}


$(function(){
	bio.display(); 
	projects.display();
	education.display();
	work.display();
	$("#mapDiv").append(googleMap);
	headerDecor.insertAfter($("#header"));
});