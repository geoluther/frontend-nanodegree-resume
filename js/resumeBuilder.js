

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
	"welcomeMessage" : "Hello There, this is my welcome message", 
	"skills": ["html", "css", "javascript", "python", "jquery", "wordpress", "php"]
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
		"images" : ["http://www.kgnu.org//index.htm-old/index.fall2014.htm"]
	},

	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : ["", ""]
	} ]
};


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

displaySkills();
displayWork();