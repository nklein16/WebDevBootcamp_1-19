
/* In this example, because phrase is declared with "var" INSIDE doSomething(),
   when running phrase in the cosole after running the function, phrase will be "hi there!".
   In other words, declaring var inside the inner scope protects the outer scope
   phrase variable from being overwritten.
*/

var phrase = "hi there!";

function doSomething() {
	var phrase = "Goodbye";
	console.log(phrase);
}

/* However, in the following example, running phrase in the console after running the function
   will return "Goodbye", because the original phrase variable was overwritten.
*/

var phrase2 = "hi there!";

function doSomething() {
	phrase2 = "Goodbye";
	console.log(phrase2);
}

/*************************************************************/

/* Scope Quiz, Example 1 */

var num = 8;
function doMath(){
	num += 1;
	if(num% 5 == 0){
		return true;
	}
	return false;
}

num += 1;
doMath();

/* Answer:  doMath() returns true
   Why?  
   	1) num += 1 makes num = 9
   	2) doMath() then runs, increments num from the outer scope, which is already 9, by 1, making it 10.
   	   doMath() then evaluates 10 % 5 == 0, finds it to be true, and returns true.

/*************************************************************/

/* Another Example */

function hi(){
	var name = "Rusty";
	console.log(name);
}

function bye(){
	console.log(name);
}

/* hi() results in Rusty, whereas bye() is undefined, because "name" is undefined in bye()