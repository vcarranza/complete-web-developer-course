var first = prompt("Enter First number");
var second = prompt("Enter Second number");
var sum = Number(first) + Number(second);
alert ("The total is:" + sum);

// subtraction
var first = prompt("Enter First number");
var second = prompt("Enter Second number");
var sum = Number(first) - Number(second);
alert ("The total is:" + sum);
// multiply
var first = prompt("Enter First number");
var second = prompt("Enter Second number");
var sum = Number(first) * Number(second);
alert ("The total is:" + sum);
// divide
var first = prompt("Enter First number");
var second = prompt("Enter Second number");
var sum = Number(first) / Number(second);
alert ("The total is:" + sum);

/* if statement */
var name = "jose"
if (name === "jose") {
    alert("Hi jose");
}
/* else statements */
if (name === "jose") {
    alert("hit jose");
}   else{
    alert("hmm i dont know you");
}
/* javascript logical operations */
if (name === "billy" || name === "Ann") {
	alert("Hi Billy or Ann!")
}
if (!(name === "bob")) {
	alert("hi bob");
}
/* Exercise  */
var age = prompt("How old are you?")
if ( Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off.");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!")
} else if(Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
// arguments
alert ("hi there");




