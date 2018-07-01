// var name = prompt("What is your name?");

//alert("Welcome to my page, " + name + "!");

// create secretNumber
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
guess = Number(stringGuess);

//check guess is correct
if(guess === secretNumber) {
    alert("You got it right!")
}
else if(guess > secretNumber){
    alert("Too high. Guess again.");
}
else {
    alert("Too low. Guess again.");
}