var start = Date.now();

/* Here we start creating all the variables with my all my resume info */

var bio = {
	"aboutMe": {
		"name" : "Javier Mateos",
		"age" : "27",
		"picture" : "images/my_picture.jpg",
		"role" : "Online Marketing Specialist"
	},
	"contacts" : {
		"email" : "j.mateos@adlpartner.es",
		"linkedin" : "http://es.linkedin.com/in/jmateosr",
		"twitter" : "@jmateosr",
		"location" : "Madrid, Spain",
		"mobile" : "(+34) 699 263 830",
		"github" : "@jmateosr",
		"blog" : ""
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : [
		"Web Design",
		"Online MKT",
		"Front-End Developer",
		"Photography",
		"Video postproduction"
	],
	display: function displayBio(){
		if(bio.aboutMe.name.length !== 0) {
			var formattedName = HTMLheaderName.replace("%data%",bio.aboutMe.name);
			$("#header").append(formattedName);
		}
		if(bio.aboutMe.role.length !== 0) {
			var formattedRole = HTMLheaderRole.replace("%data%",bio.aboutMe.role);
			$("#header").append(formattedRole);
		}
		if(bio.aboutMe.picture.length !==0){
			var formattedPicture = HTMLbioPic.replace("%data%",bio.aboutMe.picture);
			$("#header").append(formattedPicture);
		}
		if(bio.welcomeMessage.length !==0){
			var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
			$("#header").append(formattedWelcome);
		}
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(skills in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[skills]);
				$("#skills:last").append(formattedSkill)
			}
		}
		if(bio.contacts.email.length !== 0) {
			var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
			$("#topContacts").append(formattedEmail);
			$("#footerContacts").append(formattedEmail);
		}
		if(bio.contacts.location.length !== 0) {
			var formattedContactLocation = HTMLlocation.replace("%data%",bio.contacts.location);
			$("#topContacts").append(formattedContactLocation);			
			$("#footerContacts").append(formattedContactLocation);
		}
		if(bio.contacts.twitter.length !==0){
			var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);			
			$("#footerContacts").append(formattedTwitter);
		}
		if(bio.contacts.mobile.length !==0){
			var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);			
			$("#footerContacts").append(formattedMobile);
		}
		if(bio.contacts.github.length !==0){
			var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
			$("#topContacts").append(formattedGithub);			
			$("#footerContacts").append(formattedGithub);
		}
		if(bio.contacts.blog.length !==0){
			var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
			$("#topContacts").append(formattedBlog);			
			$("#footerContacts").append(formattedBlog);
		}		
		console.log("Bio diplayed correctly")
		console.log("Contacts diplayed correctly")		
	}
}

var work = {
	"jobs": [
		{
			"employer" : "ADL Partner Hispania",
			"title" : "Project Manager / Online Marketing Specialist",
			"URL" : "http://www.adlpartner.es",
			"location" : "Madrid",
			"country" : "Spain",
			"start" : "2013",		
			"dates" : "May 2013 - actually",
			"description" : "Coordination of online marketing campaigns for large companies such as Johnson & Johnson, Vodafone, Coca Cola ..."
		},
		{
			"employer" : "Cactus Servicios Audiovisuales",
			"title" : "Executive Producer",
			"URL" : "mailto:javiertdr@gmail.com",
			"location" : "Madrid",
			"country" : "Spain",
			"start" : "2012",		
			"dates" : "April 2012 - April 2013",
			"description" : "Executive producer of audiovisual projects such as documentaries, crossmedia, short films ..."
		},
		{
			"employer" : "Tiempo de Rodar",
			"title" : "Production Coordinator",
			"URL" : "http://www.tiempoderodar.com",
			"location" : "Madrid",
			"country" : "Spain",
			"start" : "2011",
			"dates" : "September 2010 - April 2013",
			"description" : "Production Coordinator specializing in film post production."
		}
	],
	display: function displayWork(){
		for(works in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedJobEmployer = HTMLworkEmployer.replace("%data%",work.jobs[works].employer);
			var formattedJobEmployerURL = formattedJobEmployer.replace("#",work.jobs[works].URL);
			var formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[works].title);
			var employerTitle = formattedJobEmployerURL + formattedJobTitle;

			var formattedJobStart = HTMLworkStart.replace("%data%",work.jobs[works].start);

			var formattedJobDates = HTMLworkDates.replace("%data%",work.jobs[works].dates);

			var formattedJobLocation = HTMLworkLocation.replace("%data%",work.jobs[works].location + " - " + work.jobs[works].country);

			var formattedJobDescription = HTMLworkDescription.replace("%data%",work.jobs[works].description);

			$(".work-entry:last").append(employerTitle + formattedJobStart + formattedJobDates + formattedJobLocation + formattedJobDescription);
		}
		console.log("Work diplayed correctly")
	}
}

var projects = {
	"projects": [
		{
			"title" : "Project 1: Kittens are cute!",
			"dates" : "2010-2011",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mauris ac erat porta molestie. Aenean molestie, enim ac pulvinar hendrerit, nisl erat varius dui, ac sagittis orci libero a tortor. Ut sit amet dapibus ante. Aliquam facilisis mattis laoreet.",
			"image" : ["http://placekitten.com/320/400"],
			"url" : "http://www.google.es"
		},
		{
			"title" : "Project 2: Oh my cat!",
			"dates" : "2011-2012",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat sapien, convallis vitae congue sed, eleifend ut leo. Etiam ullamcorper felis quis ante laoreet interdum. Duis eu diam porttitor, aliquet erat commodo, facilisis odio. Vivamus viverra odio erat, at laoreet lectus rutrum vitae. Vivamus fermentum ullamcorper libero at feugiat. Ut vel ligula gravida, ullamcorper libero eget, consequat augue.",
			"image" : ["http://placekitten.com/270/400"],
			"url" : "http://www.google.es"			
		},
		{
			"title" : "Project 3: Meow!",
			"dates" : "2012-2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mauris ac erat porta molestie. Aenean molestie, enim ac pulvinar hendrerit, nisl erat varius dui, ac sagittis orci libero a tortor. Ut sit amet dapibus ante. Aliquam facilisis mattis laoreet.",
			"image" : ["http://placekitten.com/450/400"],
			"url" : "http://www.google.es"			
		}
	],
	display: function displayProjects() {
		for(projs in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projs].title);
			var formattedProjectTitleURL = formattedProjectTitle.replace("#", projects.projects[projs].url);			
			$(".project-entry:last").append(formattedProjectTitleURL);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projs].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects.projects[projs].description);
			$(".project-entry:last").append(formattedProjectDescr);

			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projs].image);
			$(".project-entry:last").append(formattedProjectImage);
		}
		console.log("Projects diplayed correctly")	
	}
}

var education = {
	"schools": [
		{
			"name": "Universidad Complutense de Madrid",
			"degree": "Comunicación Audiovisual",
			"major": "Cinema and Audiovisual Communication",
			"dates": "September 2001 - June 2017",
			"location": "Madrid, Spain",
			"url": "http://www.ucm.es"
		},
		{
			"name": "Université de Liège",
			"degree": "Arts du spectacle",
			"major": "Cinema Arts",
			"dates": "August 2006 - September 2007",
			"location": "Liège, Belgium",
			"url": "http://www.ulg.ac.be/cms/c_5000/fr/accueil"
		}
	],
	display: function displayEducation() {
		$("#education").append(HTMLschoolStart);
		for (school in education.schools) {
			var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);						
			var schoolNameURL = schoolName.replace("#", education.schools[school].url);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(schoolNameURL + schoolDegree + schoolDates + schoolLocation + schoolMajor);
		}
		console.log("Studies diplayed correctly")
	}
}

var onlineEducation = {
	"courses": [
		{
			"title": "Front-End Developer Nanodegree",
			"school": "Udacity",
			"dates": "2014 - Current",
			"url": "https://www.udacity.com/course/nd001"
		}
	], 
	display: function displayOnlineStudies() {
		$("#education").append(HTMLonlineClasses);
		for (course in onlineEducation.courses) {
			var title = HTMLonlineTitle.replace("%data%", onlineEducation.courses[course].title);
			var titleURL = title.replace("#", onlineEducation.courses[course].url);
			var school = HTMLonlineSchool.replace("%data%", onlineEducation.courses[course].school);	
			var dates = HTMLonlineDates.replace("%data%", onlineEducation.courses[course].dates);
			$(".education-entry:last").append(titleURL + school + dates);
		}
	} 
}

bio.display();
work.display();
projects.display();
education.display();
onlineEducation.display();


/* To add the attribute target="_blank" to all the <a> elements so they will open on a new tab */

$("a").attr("target", "_blank");


/* To log events (position of a click). It will take the logClicks function created on helper.js */

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


/* To display the Map with all my locations (it will take the function created on the helper.js file) */

$("#mapDiv").append(googleMap);


/* To log the load speed of the site (Web Performance), using the "start" variable created at the beginning of the JS file */

console.log("Page load took " + (Date.now() - start) + " milliseconds");