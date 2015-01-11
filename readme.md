#P2: Interactive Resume

##Project Overview

In this project you will write the JavaScript that powers your own interactive resume.

This project is meant to be completed while taking the Javascript Basics course. Throughout the course you'll build your resume by writing a JS script that will combine your personal information with pre-written HTML and CSS templates to generate your resume.

###Why this Project?

Once you've mastered the skills of a front end web developer you'll want to make a great first impression. You need a resume that stands out.

The resume you build will not only help you build important skills, but will also make it easy to show employers why you’re perfect for the job. As you progress through this nanodegree you can update this resume with your new skills and projects.

###What will I Learn?

You will learn basic JavaScript syntax, which includes manipulating data types (like JSON), building loops and creating functions. At the same time, you’ll learn some simple jQuery DOM manipulation methods to build your resume the moment a user opens your website.

###How does this Help my Career?

* It's a resume. Resumes help you get jobs.
* JavaScript is the language of web development.
* JavaScript lets you turn static web pages into dynamic applications.
* Since it runs on normal web browsers, JavaScript is one of the most accessible and flexible programming languages.

###Concept Deliberations

Before we jump into the project details, let us reflect on our conceptual understandings. There are several criteria we will be using to ensure that your project covers techniques that are highly valuable in front end development. In the next few slides you will be reflecting on some of these important aspects. Please take some time to think and answer the questions in detail.

Note that your project will be evaluated based on these criteria. Make sure you understand them thoroughly as you incorporate them into you project.

##How do I complete this project?

If you need a refresher on JavaScript syntax, go to the Javascript Basics course; if you would like to understand how this project is manipulating and traversing the DOM, check out Intro to jQuery.
Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
Read all the project details outlined below and make sure you understand each part. If you are unsure of anything please check with your cohort or private message your cohorts coaches.
Fork the project repo from Github and begin building you resume.
Review your work against the Project Rubric (on the next page).
When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

###By the end:
Your repository will include the following files:

* index.html: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.

* js/helper.js: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.

* js/resumeBuilder.js: This file is empty. You should write your code here.

* js/jQuery.js: The jQuery library.
* css/style.css: Contains all of the CSS needed to style the page.
* README.md: The GitHub readme file.

* and some images in the images directory.

###Your starting point...

####js/helper.js

Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of %data% or %contact%.

Each string has a title that describes how it should be used. For instance, HTMLworkStart should be the first <div> in the Work section of the resume. HTMLschoolLocation contains a %data% placeholder which should be replaced with the location of one of your schools.

####Your process:

The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

* Build four JSONs, each one representing a different resume section, The objects that you create need to follow the names within the schema exactly:

** bio contains:

	name : string
	role : string
	contacts : array of objects with
	      mobile: string
	      email: string 
	      github: string
	      twitter: string 
	      location: string
	welcomeMessage: string 
	skills: array of strings
	biopic: url
	display: function

** education contains:

	schools: array of objects with
	     name: string
	     location: string
	     degree: string
	     majors: array of strings
	     dates: integer (graduation date)
	     url: string
	onlineCourses: array with
	     title: string
	     school: string
	     date: integer (date finished)
	     url: string
	display: function

** work contains

	jobs: array of objects with
	     employer: string 
	     title: string 
	     location: string 
	     dates: string (works with a hyphen between them)
	     description: string 
	display: function

** projects contains:

	projects: array of objects with
	      title: string 
	      dates: string (works with a hyphen between them)
	      description: string
	      images: array with string urls
	display: function

* Iterate through each JSON and append its information to index.html in the correct section.

** First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.

** Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()

** You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume JSONs.

** Here’s an example of some code that would add the location of one your companies to the page:

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

** Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.

* The resume includes an interactive map. To add it, append the googleMap string to <div id=”mapDiv”>.

* All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.

* Your resume should also console.log() information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the logClicks(x,y) function above it.

* It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.

##Submission

When you're ready to submit your project go back to the Portal, click on Project 2, and follow the instructions to submit.

* Start by creating a text file with a list of websites, books, forums, blog posts, Github repositories etc. that you referred to or used in this submission (Add N/A if you did not use such resources).

* If you want to submit your code through a "Link to Project", upload your project files onto Github and send us the link. We hope you submit using your Github because that is how professionals submit their work.

* If you instead want to submit your code through "Upload a Zip", compress your project directory, and submit that zip file.

* You should be submitting: (a) Resources and (b) Project files.
It can take us up to 2 weeks to evaluate the project so keep checking back for updates.

If you are having any problems submitting your project or wish to check on the status of your submission, please email us at support@udacity.com.