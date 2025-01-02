"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue = ["Do some coding"];
let popValue = ["Rake the leaves"];

// console.log(todos);
console.log(todos.toString());

console.table(todos); // output the third value using tables
console.log(todos[2]) 
console.log(todos[2]); //output the third value 

popValue = todos.pop();
console.log(todos);   //Removed the last value 

todos.reverse(); //Reversed todos
console.log(todos); //Output reversed todos

shiftValue = todos.shift(); //Removed the first value 
console.log(todos) // output it

let todo = todos.concat(shiftValue,popValue); // Added shiftValue and popValue to the end of todos.
console.log(todo); //output



// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todo.toString();
}

function updateAnswerTwo() {
answerTwoEl.textContent = todo[2];
}

function removeLastValue() {

}

function removeFirstValue() {

}

function addShiftAndPopValues() {

}

function updateAnswerFour() {

}

function reverseTodoList() {

}

function updateAnswerFive() {

}

function updateAnswerSix() {

}

function render() {
    updateAnswerOne()
    updateAnswerTwo()
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
