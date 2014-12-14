

/*
bio contains a name, role, welcomeMessage, contacts object and skills array. 
The contacts object should contain (but doesn't have to) a mobile number, 
email address, github username, twitter handle and location.
*/
var bio = {

	"name" : "George Figgs", 
	"role": "Web Developer", 
	"contacts": {
		"mobile" : "303 123-4567", 
		"email": "me@udacity.com", 
		"github": "geo-luther",
		"location" : "Boulder, CO" } , 
	"bioPic" : "http://placekitten.com/g/200/200", 
	"welcomeMessage" : "Bavaria ipsum dolor sit amet damischa in da, a bissal oamoi! ", 
	"skills": ["html/css", "javascript", "python", "jquery", "wordpress", "php"]
	};

/*
education contains an array of schools. Each school object in schools contains a name, 
location, degree, majors array, dates attended and a url for the school's website. 
education also contains an onlineCourses array. 
Each onlineCourse object in onlineCourses should contain a title, 
school, dates attended and a url for the course.
*/

var education = {
	"schools" : [
	{ 
		"name" : "University of Arizona", 
		"location" : "Tucson, AZ",
		"degree" : "BA, BS",
		"majors" : ["Linguistics", "Biology"],
		"dates" : "1989-1994",
		"url" : "http://www.Arizona.edu"
	},

	{ 
		"name" : "University of Colorado", 
		"location" : "Boulder, CO",
		"degree" : "MA, ABD",
		"majors" : ["Linguistics", "Cognitive Science"],
		"dates" : "1997-2007",
		"url" : "www.colorado.edu"
	} ],

	"onlineCourses" : [
	{ 
		"title" : "Programming in Java",
		"dates" : "Udacity",
		"url" : "Yes"
	},

	{
		"title" : "Programming in Java",
		"school" : "Udacity",
		"dates" : "2013",
		"url" : "www.udacity.com"
	} ]
};


// Work contains an array of jobs. 
// Each job object in jobs should contain an employer, title, location, dates worked and description

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


// projects contains an array of projects. 
// Each project object in projects should contain a title, 
// dates worked, description, and 
// an images array with URL strings for project images.
var projects = {

	"projects" : [

	{
		"title" : "news.kgnu.org",
		"dates" : "2014",
		"description" : "Radio News Magazine Website that publishes text, images and audio from daily news programming",
		"images" : ["http:placehold.it/100x100", "https://placeimg.com/100/98/nature"]
	},

	{
		"title" : "Bavaria ipsum",
		"dates" : "2014",
		"description" : "Glacht Wiesn Deandlgwand so schee auf’d Schellnsau dahoam Maibam a fescha Bua gwiss.\
		I hob di narrisch gean Xaver mim Radl foahn, gscheit",
		"images" : ["http:placehold.it/100x100", "http:placehold.it/100x100"]
	} ]
};


projects.display = function() {
	// console.log("inside projects.display");
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

projects.display();


function displayBio() {

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
 	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#header').prepend(formattedName);
	$('#header').prepend(formattedRole);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedMessage);

}



function displaySkills () {

	if (bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


function displayWork() {

	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		// location, dates, description
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}

}

displayBio();
displaySkills();
displayWork();


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

//$('#mapDiv').append(googleMap);

// D3 Library
// Style Your Own CSS
// encapsulate display functions