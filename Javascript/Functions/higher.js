function sing() {
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}

var num = setInterval(sing, 1000);
clearInterval(num);

/* If we don't want to define a separate function beforehand, we can create an anonymous function */
setInterval(function(){
    console.log("I am an anonymous function");
    console.log("This is awesome!");
}, 2000);