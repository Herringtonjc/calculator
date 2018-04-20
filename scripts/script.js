//Need variables for current operand, operator, and next operand
const bigDisplay = document.querySelector("#main-display");
const smallDisplay = document.querySelector("#small-display");
const numberNodes = document.querySelectorAll(".number-button");

let operand = "";
let smallDisplayValue = "";
let bigDisplayValue = "";
let operatorValue = "";

 numberNodes.forEach(function(button) {
    button.addEventListener("click", () => buttonListener(event))
}) 

 function buttonListener(event) {
    switch(event.target.getAttribute("id")) {
        case "button-clear":
            clearDisplay();
            break;
        case "button-backspace":
            break;
        case "button-divide":
            updateOperator("/");
            break;
        case "button-7":
            break;
        case "button-4":
            break;
        case "button-5":
            break;
        case "button-multiply":
            updateOperator("*");
            break;
        case "button-4":
            break;
        case "button-5":
            break;
        case "button-6":
            break;
        case "button-subtract":
            updateOperator("-")
            break;
        case "button-1":
            break;
        case "button-2":
            break;
        case "button-3":
            break;
        case "button-add":
            updateOperator("+");
            break;
        case "button-0":
            break;
        case "button-equals":
            break;
    }
}

function updateDisplay() {

}

function updateOperator(operator) {
    if(operatorValue != "") {
        operate(operatorValue, operand);
        operatorValue = operator;
    } else {
        operatorValue = operator;
    }
}

function clearDisplay() {
    if(smallDisplayValue != "" || bigDisplayValue != "") {
        smallDisplayValue = "";
        bigDisplayValue = "";
        smallDisplay.textContent = smallDisplayValue;
        bigDisplay.textContent = bigDisplayValue;
    }
}

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
        case "+": 
            add(a, b);
            break;
        case "-": 
            subtract(a, b);
            break;
        case "*": 
            multiply(a, b);
            break;
        case "/": 
            divide(a, b);
            break;
    }
}
