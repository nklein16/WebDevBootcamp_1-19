// Correctly include jQuery
if(jQuery){
    alert("jQuery loaded");
}
else {
    alert("no jQuery");
}

/* For jQueryExercise.html */

// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select all the dics with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

// Selet the div with id "third" and give it an orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");


/* For methods.html */

	// Change image size
	$("img").css("width", "200px");

// using attr().  attr() is used to set attributes

	// Change first image only
	$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

	// Change last image only
	$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

	// Change all images
	$("img").attr("src", "upload.wikimedia.org/wikipedia/commons/8/8e/Newfoundland_Pine_Marten.jpg");

/* using val() for text (or other) inputs [like .value() in css].
   val() is used to get attributes */

	// return the value displayed in the element on the web page
	$("input").val();

	// set the value displayed in the element on the web page
	$("input").val("Nathaniel Klein");

	// clear the value displayed in the element on the web page
	$("input").val("");

// using select for a drop-down menu

	// returns what is selected
	$("select").val();

	// selects the value passed in to val()
	$("select").val("Turtle");

// using addClass, removeClass, and toggleClass; applying css styling to the page interactively

	// adding a class
	$("h1").addClass("correct")[0];

	// removing a class
	$("h1").removeClass("correct")[0];

	// toggling a class back and forth (must run this line twice to get back to initial state)
	$("h1").toggleClass("correct")[0];

/* NOTE: addClass, removeClass, and toggleClass work in a layered fashion like this:
	
   If you add class "correct", then add class "wrong", class "wrong" DOES NOT REMOVE class
   "correct"; it simply masks it, so if you then remove class "wrong", you will be back at
   class "correct", not at the page's initial state prior to adding class "correct".
	onto another 