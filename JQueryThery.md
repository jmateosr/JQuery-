# JQUERY

jQuery Documentation: http://api.jquery.com/

## The Basics: the DOM, $ and Selectors

jQuery is a JavaScript library. It exists to focus on UX, not browser compatibility.

(*REMEMBER: JS functions are also objects!)

### What is the dollar sign?
It's just a variable used to point the last variable to call to jQuery, it's just a function.

What can we do with it? jQuery returns an array-like object which we call a jQuery collection. We call it array because it looks and behaves like an array but also includes some additional methods.

We can call strings, functions, DOM elements, ajax...

	$(string);
	$(function);
	$(DOMelement);
	$.ajax();

### Visualizing the DOM structure
The DOM is a data structure, it can best be described as a tree, much like a family tree.

With jQuery we can select an element of the DOM, whether using its tag, class or id:

	$('div');
	$('.class');
	$('#id');

With the help of jQuery selectors we can select specific elements of the DOM, but we can select too the childrens of a selected div or the parent of a selected div. jQuery give us DOM traversal methods for moving around the DOM tree.

	$('#id');
	$('#id').parent(); //to select the parents of the id
	$('#id').parents(); //to select ALL the parents (also the parents of the parent...)
	$('#id').parents('#parentID'); //to select exactly the parent that we want	
	$('#id').children(); //to select the children of the id
	$('#id').find('*'); //to select ALL the childrens of the id. The parameter here isn't optional, to select all we should pass the universal parameter '*'
	$('#id').siblings(); //to select the siblings of that id (the ids with that parent)

### DOM Manipulation
We can manipulate the DOM using jQuery: add classes, modify CSS...

#### Adding/removing classes
We can use the .toggleClass() method to add/remove any class of the DOM. http://api.jquery.com/toggleClass/

i.e.

	var featuredArticle;

	featuredArticle = $(".featured").toggleClass("featured");// Lets remove the class .featured

	$featuredArticle(); // $(featuredArticle);

i.e. (with http://api.jquery.com/next/)
	article2 = $(".featured").first();
	article3 = $(".featured").next();

	$article3.toggleClass("featured");
	$article2.toggleClass("featured");

#### Changing attributes
We can add any attribute to the DOM, for example: adding an href to a <a> tag, a target... We can use then de .attr() method. http://api.jquery.com/attr/

i.e.
	var navList;

	navList = $(".nav-item a").first();// your code goes here!

	$(navList).attr("href", "#1");

#### Changing CSS
We can use the .css method to modify the style of an element adding some inline styles to it. http://api.jquery.com/css/

i.e.
	var articleItems;

	articleItems = $(".article-item");// your code goes here!

	$(articleItems).css("font-size","20px");

#### Pulling HTML and Text
http://api.jquery.com/html/
http://api.jquery.com/text/

We can extract the html or the text of a DOM element, using the methods .html() or .text(). With the hmtl method we extract the whole html of that element and with the text one we remove the html tags of that element showing only the text.

i.e.
	$('#input').on('change', function() {
	    var val;
	    val = $('#input').val(); // We take the value of a input using the .val() method
	    $('h1').text(val);
	});

#### Removing elements
We can remove elements using the .remove() method. http://api.jquery.com/remove/

#### Adding elements
With jQuery we can create new elements and add them to the document with one simple method.

.append() http://api.jquery.com/append/
.prepend() http://api.jquery.com/prepend/
.insertBefore() http://api.jquery.com/insertBefore/ To set exactly where we want to add the element.
.insertAfter() http://api.jquery.com/insertAfter/

	var family1, family2, bruce, madison, hunter;

	family1 = $('#family1');
	family2 = $('#family2');
	bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
	madison = $('<div id="madison"><h3>Madison</h3></div>');
	hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

	family2.insertAfter(family1);
	family2.append(bruce);
	bruce.append(madison);
	bruce.append(hunter);

#### Iterating with Each Quiz
This is how jQuery simplifies the loops.
http://api.jquery.com/each/

For example, to count the characters of each paragraph on the HTML, this will be the loop:
	$("p").each(function() {
	  var characters = $(this).text().length;
	  $(this).append(characters);
	});
