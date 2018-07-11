// Correctly include jQuery
if(jQuery){
    alert("jQuery loaded");
}
else {
    alert("no jQuery");
}

// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select all the dics with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");

// Selet the div with id "third" and give it an orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");