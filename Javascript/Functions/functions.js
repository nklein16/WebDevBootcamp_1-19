
/* isEven Function */
function isEven(num) {
	
	// if(num%2 == 0)
	// 	return true;
	// return false;

	return num%2 === 0;
}

// isEven(37);


/* Factorial Function */

function factorial(n) {

	/* Basic approach */
	var result = 1;
	for(var i = 2; i <= n; i++){
		result *= i;
	}
	return result;

	/* recursive approach */
	if(n === 0)
		return 1;
	else
		return n * factorial(n-1);
}

// factorial(3);

/* KebabToSnake() */

function kebabToSnake(str) {

	// using a regular expression
	var newStr = str.replace(/-/g , "_");
	return newStr;

	// while(s.includes("-")) {

	// 	var location = str.indexOf("-");
	// 	var kebab = str.substr(location, location+1);
	// 	var first = str.slice(0,location);
	// 	var snake = "_";
	// 	var last = str.slice(location+1, str.length);
	// 	return first.concat(snake).concat(last);

	// 	// var letter = last.charAt(0).toUpperCase();
	// 	// last = s.slice(location+2, s.length);
	// 	// var word = first.concat(letter).concat(last);
	// 	// return word;
	// }

	// else {
	// 	return str;
	// }
}

// kebabToSnake("hello-world-again");