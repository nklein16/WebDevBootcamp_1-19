var todos = ["take out trash"];
window.setTimeout(function() {
	

	var val = true
	while (val) {

		var answer = prompt("What would you like to do?");
	
		if (answer === "list") {
			listToDos();
		}

		else if (answer === "new") {

			// ask for new todo
			var newToDo = prompt("Enter new todo");
			
			// add item to array
			todos.push(newToDo);

			// console output
			listToDos();			
			
			// add item to list on webpage
			addToDo(newToDo);
			console.log(newToDo + " added to the list");

		}

		else if (answer === "delete") {
			
			// ask for index of item to be deleted
			var index = prompt("Enter index of todo to delete");
			
			while (index > todos.length) {
				alert("That item is no longer in the list.  Try again.");
				index = prompt("Enter index of todo to delete");
			}

			// remove item from todos list and store item
			var removedItem = todos.splice(index, 1);
			
			// print results to console
			listToDos();
			
			// remove item from list on webpage
			deleteToDo(index);
			console.log(removedItem + " was removed from the Todo list");

		}

		else if (answer === "quit") {
			console.log("Ok, you quit the app!");
			val = false;
		}

	}

}, 500);


function listToDos() {

	console.clear();
	console.log("**********\n");
	var i = 0
	todos.forEach(function(todo){
		console.log(i + ": " + todo);
		i++;
	});

	console.log("**********");
}

function addToDo(item) {
	
	var parent = document.getElementsByTagName('ul')[1];	// access parent element
	var newItem = document.createElement('li');				// create new list element
	var newText = document.createTextNode(item);			// create new child node from item
	newItem.appendChild(newText);							// append newtext item to child li element
	parent.appendChild(newItem);							// append new element to parent element
}

function deleteToDo(index) {

	var parent = document.getElementsByTagName('ul')[1];		// get parent item
	var element = parent.getElementsByTagName('li')[index];		// get element to be removed
	parent.removeChild(element);								// delete element from list
}

/*
To Do Items (for testing):

0. take out trash
1. clean room
2. do dishes
3. do laundry
4. walk dog
5. water garden
*/ 