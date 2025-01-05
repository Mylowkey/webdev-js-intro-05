"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue = "";
let popValue = "";

// console.log(todos);
console.log(todos.toString()); 

// console.table(todos); // output the third value using tables
console.log(todos[2]) 
console.log(todos[2]); //output the third value 

popValue = todos.pop();
console.log(todos);   //Removed the last value 


// todos.reverse(); //Reversed todos
// console.log(todos); //Output reversed todos

// shiftValue = todos.shift(); //Removed the first value 
// console.log(todos) // output it

// let todo = shiftValue + "" + popValue
// console.log(todo)

// let todo = todos.concat(shiftValue,popValue); // Added shiftValue and popValue to the end of todos.
// console.log(todo); //output



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
    answerOneEl.textContent = todos.toString();
}

function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2];
}

function removeLastValue() {
   
}

function removeFirstValue() {
    
}

function addShiftAndPopValues() {
    
}

function updateAnswerFour() {
    answerFourEl.textContent = todos.toString();
}

function reverseTodoList() {

}

function updateAnswerFive() {
        todos.reverse();
        answerFiveEl.textContent = todos.toString();
}

function updateAnswerSix() {
  todos.push(shiftValue, popValue);
  answerSixEl.textContent = todos.toString();
}

function render() {
    updateAnswerOne()
    updateAnswerTwo()
    updateAnswerFour()
    updateAnswerFive()
    updateAnswerSix()
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
