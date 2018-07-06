var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	// event listeners for mode buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
			// pick new colors, pick a new pickedColor, and update page to reflect changes
			reset();
		});
	}
}


function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {

		// add click listeners to squares
		squares[i].addEventListener("click", function(){

			// grab color of picked square
			var clickedColor = this.style.backgroundColor;

			// compare color to pickedColor
			if(clickedColor === pickedColor){
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			}

			else if(clickedColor !== pickedColor) {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
 	colors = generateRandomColors(numSquares);
 	// pick a new random color from array
 	pickedColor = pickColor();
 	// change color display to match picked color
 	colorDisplay.textContent = pickedColor;
 	
 	// reset band image
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";

 	// change colors of the squares
 	for(var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

	// reset heading background display
	h1.style.backgroundColor = "#4682b4";
}


resetButton.addEventListener("click", function(){
	reset();
});


/* HELPER FUNCTIONS!! */

// changes the colors of the squares on the webpage
function changeColors(color){

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

// generates a random number to be used in referencing the colors array 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// returns an array of string representing generated colors 
function generateRandomColors(num){

	arr = new Array();
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

// generates string representing random colors for each of the color bands
// red, green, and blue
function randomColor(){

	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	// "rgb(red, green, blue)"
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}