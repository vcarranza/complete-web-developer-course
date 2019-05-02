var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat better"
];
var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat better!"
];
var todosLength = todos.length;
for (var i=0; i < todos.length; i++) {
    console.log(i);
} 

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos); 
todosImportant.forEach(logTodos);

/* var counterOne = 10;
while (counterOne > 10) {
    console.log(counterOne);
    counterOne++;
} */
/* var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0); */

