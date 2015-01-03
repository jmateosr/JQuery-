# JQUERY

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