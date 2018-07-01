/*WHILE LOOPS */

// console.log("Print all numbers between -10 and 19");

// var counter = -10;
// while(counter < 20){
//     console.log(counter);
//     counter++;
// }

// console.log("Print all even numbers between 10 and 40");

// var counter = 10; 
// while(counter <= 40){
//     console.log(counter);
//     counter += 2;
// }

// // while(counter <= 40){
// //     if(counter%2 === 0)
// //     console.log(counter);
// //     counter+=1;
// // }


// console.log("Print all odd numbers between 300 and 333");

// var counter = 300; 

// while(counter <= 333){
//     if(counter % 2 !== 0)
//     console.log(counter);
//     counter += 1;
// }


// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

// var counter = 5; 

// while(counter <= 50){
//     if(counter % 5 === 0 && counter % 3 === 0)
//     console.log(counter);
//     counter += 1;
// }

/********************************************* */

// function playGame() {

//     var answer = prompt("Are we there yet?");

//     while(answer.indexOf("yes") === -1){
//         answer = prompt("Are we there yet?");
//     }

//     alert("Yay, we finally made it!");

//     // while(answer !== "yes" && answer !== "yeah"){
//     //     answer = prompt("Are we there yet?");
//     // }

//     // if(answer === "yes" || answer === "yeah"){
//     //     console.log("Inside third if statement. Answer: " + answer);
//     //     alert("Yay, we finally made it!");
//     // }

// }

// playGame();

/********************************************* */

/* FOR LOOPS */

console.log("Print all numbers between -10 and 19");

for(let i = -10; i < 20; i++){
    console.log(i);
}


console.log("Print all even numbers between 10 and 40");

for(let i = 10; i <= 40; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333");

for(let i = 300; i <= 333; i++){
    if(i%2 != 0){
        console.log(i);
    }
}


console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

for(let i = 5; i <= 50; i++){
    if(i%5 == 0 && i%3 == 0){
        console.log(i);
    }
}
