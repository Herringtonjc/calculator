//Need variables for current operand, operator, and next operand
const display = document.getElementById('main-display');
const buttonNodes = document.querySelectorAll('.number-button');

/* buttonNodes.forEach(function(button) {
    button.addEventListener('click', //Add function to update display)
}) */

/* function updateDisplay() {

} */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+': add(a, b);
        break;
        case '-': subtract(a, b);
        break;
        case '*': multiply(a, b);
        break;
        case '/': divide(a, b);
        break;
    }
}