/* ARRAY PRACTICE */

// printReverse function
function printReverse(arr) {

	for(var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([7,1,23,5]);
console.log("***************************");

// isUniform function
function isUniform(arr) {
	let first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}

	return true;
}

console.log("isUniform #1");
var result = isUniform([1,1,1,1,1]);
console.log("It is " + result + " that the array is uniform.");
console.log("***************************");

console.log("isUniform #2");
result = isUniform([1,1,1,2,1]);
console.log("It is " + result + " that the array is uniform.");
console.log("***************************");

// sumArray function
function sumArray(arr) {

	let sum = 0;
	for(var i = 0; i < arr.length; i++) {
		assert(typeof arr[i] == 'number', "item " + i + " in the array is not a number.");
		sum += arr[i];
	}

	// arr.forEach(function(element){
	// 	assert(typeof element == 'number', "an item in the array is not a number.");
	// 	sum += element;
	// });
	// return sum;
}

console.log("sumArray #1");
var sum = sumArray([23,1,2,7]);
console.log("The sum of the array is " + sum);
console.log("***************************");

// max function
function max(arr) {
	var i = 0
	max = arr[i];
	for(i = 1; i < arr.length; i++) {
		assert(typeof arr[i] == 'number', "item " + i + " in the array is not a number.");
		if(arr[i] > max){
			max = arr[i];
		}
	}

	return max;
}

console.log("max()");
var max = max([202,57,-400,17]);
console.log("The max of the array is " + max);
console.log("***************************");

console.log("sumArray #2");
sum = sumArray([55,22,"a"]);
console.log("The sum of the array is " + sum);
console.log("***************************");

// assert function
function assert(condition, message) {
	if(!condition){
		throw new Error(message || 'Assertion failed');
	}
}