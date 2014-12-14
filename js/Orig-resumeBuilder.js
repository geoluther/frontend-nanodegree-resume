
// $("#main").append('George<br>');

// awesomeThoughts = "I am George and I am awesome!";

// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);


var bio = {
	"myname" : "George Figgs", "role": "Web Developer", 
	"contacts": {
		"mobile" : "303 123-4567", 
		"email": "me@udacity.com", 
		"github": "geo-luther",
		"location" : "Boulder, CO" } , 
	"bioPic" : "http://placekitten.com/g/200/200", 
	"welcomeMessage" : "Hello There, this is my welcome message", 
	"skills": ["wordpress", "html", "css", "javascript", "python", "jquery", "php"]
};

var education = {
	"schools" : [
	{ 
		"name" : "University of Arizona", 
		"city" : "Tucson, AZ",
		"degree" : "BA",
		"major" : ["Linguistics", "Biology",
		"graduation-year" : "1997" ]
	},

	{ 
		"name": "University of Colorado",
		"city" : "Boulder, CO",
		"degree" : "PhD",
		"major" : ["Linguistics", "Cognitive Science",
		"graduation-year" : "1997" ]

	}
	] 
};

var formattedName = HTMLheaderName.replace("%data%", bio.myname);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);


$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
};

work.position = "Digital Content Manager";
work.city = "Boulder";
work.yeard = "2000-2003";

education["school"] = "University of Arizona";
education["major"] = "Linguistics";

var formattedMajor = HTMLschoolDegree.replace("%data%", education["major"]);
var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);

$("#main").append(work.city);
$("#main").append(work.position);
$("#main").append(education["school"]);
$("#main").append(education["major"]);


var s = "audacity";

var udacityizer = function(s) {
	
	s = s[1].toUpperCase() + s.slice(2); 
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var firstLast = finalName.split(" ");
    var first = firstLast[0].toLowerCase();
    var last = firstLast[1].toUpperCase();

    first = first.slice(0,1).toUpperCase() + first.slice(1);

    finalName = first + " " + last;
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

