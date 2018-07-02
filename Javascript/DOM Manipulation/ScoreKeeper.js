var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;			// game state
var winningScore = numInput.value;

// CLUNKY CODE...Better Code Below!

// p1Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p1Score++;
// 		p1Display.textContent = p1Score;
// 		if(p1Score === winningScore){
// 			p1Display.classList.add("winner");
// 			gameOver = true;
// 			console.log("GAME OVER...Player 1 Won!");
// 		}		
// 	}
// });

// p2Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p2Score++;
// 		p2Display.textContent = p2Score;
// 		if(p2Score === winningScore){
// 			p2Display.classList.add("winner");
// 			gameOver = true;
// 			console.log("GAME OVER...Player 2 Won!");
// 		}				
// 	}
// });

p1Button.addEventListener("click", function(){
	p1Score = changeScore(p1Score, p1Display);
});

p2Button.addEventListener("click", function(){
	p2Score = changeScore(p2Score, p2Display);
});


function changeScore(playerScore, playerDisplay){

	if(!gameOver){
		playerScore++;
		playerDisplay.textContent = playerScore;
		if(playerScore === winningScore){
			playerDisplay.classList.add("winner");
			gameOver = true;
			console.log("GAME OVER!");
		}		
	}
	return playerScore;

}
resetButton.addEventListener("click", function(){
	reset();
	document.querySelector("input").value = "";
});

numInput.addEventListener("change", function(){

	if(Number(this.value) <= 0){
		this.value = "";
		return alert("Please choose a number greater than or equal to zero.")
	}

	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});


function reset(){
	
	p1Score = 0;
	p2Score = 0;


	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;
}


// class Game {
// 	p1Score: 0;
// 	p2Score: 0;
// 	gameOver: false;
// 	winningScore: var ws = prompt("Set the winning score");
// }

// game = new Game(0,0,false,7);
// game.winningScore = 7;