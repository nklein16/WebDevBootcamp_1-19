// alert("Connected!")

/* METHOD 1 */

var btn = document.querySelector("#btn");
isPurple = false;
btn.addEventListener("click", function(){

	if(isPurple){
		document.body.style.background = "white";
		isPurple = false;
	}
	else {
		document.body.style.background = "purple";
		isPurple = true;
	}

	isPurple = !isPurple;
});

/* METHOD 2 */
// var btn = document.querySelector("button");
// btn.addEventListener("click", function(){
// 	document.body.classList.toggle("purple");
// });