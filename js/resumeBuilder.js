
var bio = {
	"name" : "George L Figgs",
	"role": "Web Developer",
	"contacts":
	{
		"mobile" : "303 123-4567",
		"email": "me@some-email.com",
		"github": "geo-luther",
		"twitter": "@joe-twitter",
		"location" : "Boulder, CO"
	},
	"welcomeMessage" : "Bavaria ipsum dolor sit amet damischa in da, a bissal oamoi! ",
	"skills": ["html/css", "javascript", "python", "jquery", "wordpress", "php"],
	"biopic" : "images/fry.jpg"
};

var education = {
	"schools" : [
	{
		"name" : "University of Arizona",
		"location" : "Tucson, AZ",
		"degree" : "BA, BS",
		"majors" : ["Linguistics", "Biology", "Spanish"],
		"dates" : "1994",
		"url" : "http://www.Arizona.edu"
	},

	{
		"name" : "University of Colorado",
		"location" : "Boulder, CO",
		"degree" : "MA, ABD",
		"majors" : ["Linguistics", "Cognitive Science"],
		"dates" : "2007",
		"url" : "www.colorado.edu"
	}],

	"onlineCourses" : [
	{
		"title" : "Programming in Java",
		"date" : "2013",
		"school" : "Udacity",
		"url" : "http://www.udacity.com"
	},

	{
		"title" : "Natural Language Processing",
		"school" : "Coursera",
		"date" : "2012",
		"url" : "https://www.coursera.org/course/nlp"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "KGNU",
		"title" : "Digital Content Manager",
		"location" : "Boulder, CO",
		"dates" : "2013-Present",
		"description" : "Editor, Producer, Web Developer"
	},

	{
		"employer" : "JD Power and Associates",
		"title" : "Science Annotator",
		"location" : "Boulder, CO",
		"dates" : "2012",
		"description" : "Semantic and Syntactic Annotation of Language Corpora"
	},

	{
		"employer" : "The Big Cheese",
		"title" : "Cheese Monger",
		"location" : "Boulder, CO",
		"dates" : "2014",
		"description" : "today let us eat, drink, and be merry, for tomorrow we may run out of dairy"
	}
	]
};

var projects = {

	"projects" : [

	{
		"title" : "news.kgnu.org",
		"dates" : "2014",
		"description" : "Radio News Magazine Website that publishes text, images and audio from daily news programming",
		"images" : ["https://placeimg.com/100/100/arch", "https://placeimg.com/100/100/nature"]
	},

	{
		"title" : "Bavaria ipsum",
		"dates" : "2014",
		"description" : "Glacht Wiesn Deandlgwand so schee auf’d Schellnsau dahoam Maibam a fescha Bua gwiss.\
		I hob di narrisch gean Xaver mim Radl foahn, gscheit",
		"images" : ["https://placeimg.com/100/100/tech", "https://placeimg.com/100/100/animals"]
	}
	]
};


// encapsulated functions

projects.display = function() {

	for (i in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);

		if (projects.projects[i].images.length > 0) {
			for (image in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[image]);
				$('.project-entry:last').append(formattedProjectImage);
			}
		}
	}
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

	var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);


	$('#header:last').append(formattedMessage);
	$('#header:last').append(formattedBioPic);


	if (bio.skills.length > 0 ) {
		$("#header:last").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


work.display = function() {


	$("#workExperience").append(HTMLworkStart);

	for (job in work.jobs) {


		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		$(".work-entry").append(formattedEmployer + formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry").append(formattedDates);
		$(".work-entry").append(formattedLocation);
		$(".work-entry").append(formattedDescription);
	}
}

education.display = function() {

	if (education.schools.length > 0) {

		for (school in education.schools) {

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			var formattedNameDegree = formattedName + formattedDegree;

			var formattedMajors = education.schools[school].majors.join(', ');
			formattedMajors = HTMLschoolMajor.replace("%data%", formattedMajors);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolStart = HTMLschoolStart;

			$('#education').append(formattedSchoolStart);
			$('.education-entry:last').append(formattedNameDegree);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedMajors);
			$('.education-entry:last').append(formattedLocation);

		}

		if (education.onlineCourses.length > 0 ) {

			$('#education').append(HTMLonlineClasses);

			for (course in education.onlineCourses) {

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

				var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

				$('#education').append(formattedSchoolStart);
				$('.education-entry:last').append(formattedOnlineTitleSchool);
				$('.education-entry:last').append(formattedOnlineDate);
				$('.education-entry:last').append(formattedOnlineURL);
			}
		}
	}
}



projects.display(); // 3
work.display(); // 2
education.display(); // 4
bio.display(); // 1



// other helper functions

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

function locationizer(work_obj){
	var locations = [];
	for (var job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}

	return locations;
}


var name = "george figgs";

function inName(name) {
	var names = name.trim().split(" ");
	var last = names[1].toUpperCase();
	var first = names[0];

	first = first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase();
	return first + " " + last;
}

$('#main').append(internationalizeButton);

inName("george figgs");

$('#mapDiv').append(googleMap);

// D3 Library
// Style Your Own CSS
// encapsulate display functions