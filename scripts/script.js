const bigDisplay = document.querySelector("#big-display");
const smallDisplay = document.querySelector("#small-display");
const btnPeriod = document.querySelector("#button-period");
const numberNodes = document.querySelectorAll(".number-button");

let displayValue = "";
let smallDisplayValue = "";
let bigDisplayValue = "";
let operatorValue = "";

 numberNodes.forEach(function(button) {
    button.addEventListener("click", buttonListener);
}) 

 function buttonListener(event) {
    switch(event.target.getAttribute("id")) {
        case "button-clear":
            clearDisplay();
            break;
        case "button-backspace":
            eraseDisplay();
            break;
        case "button-divide":
            updateOperator("/");
            break;
        case "button-multiply":
            updateOperator("*");
            break;
        case "button-subtract":
            updateOperator("-")
            break;
        case "button-add":
            updateOperator("+");
            break;
        case "button-0":
        case "button-1":
        case "button-2":
        case "button-3":
        case "button-4":
        case "button-5":
        case "button-6":
        case "button-7":
        case "button-8":
        case "button-9":
            bigDisplayValue += event.target.textContent;
            smallDisplayValue += event.target.textContent;
            updateDisplay();
            break;
        case "button-equals":
            operate(operatorValue, parseFloat(displayValue), parseFloat(bigDisplayValue));
            break;
        case "button-period":
            isDecimal();
            break;
    }
}

function updateDisplay() {
    bigDisplay.textContent = bigDisplayValue;
    smallDisplay.textContent = smallDisplayValue;
}

function updateOperator(operator) {
    if(operatorValue != "") {
        //Will perform calculation if there is an operator loaded
        operate(operatorValue, parseFloat(displayValue), parseFloat(bigDisplayValue));
        operatorValue = operator;
        displayValue = smallDisplayValue;
        smallDisplayValue += operatorValue;
        bigDisplayValue = "";
        updateDisplay();
    } else {
        operatorValue = operator;
        displayValue = smallDisplayValue;
        smallDisplayValue += operatorValue;
        bigDisplayValue = "";
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    bigDisplayValue = "";
    smallDisplayValue = "";
    operator = "";
    updateDisplay();
}

function isDecimal() {
    if (!bigDisplayValue.match(/[.]/g)) {
        bigDisplayValue += event.target.textContent;
        smallDisplayValue += event.target.textContent;
        updateDisplay();
    }
}

function eraseDisplay() {
    if (bigDisplayValue != "" || smallDisplayValue != "") {
        bigDisplayValue = bigDisplayValue.slice(0, -1);
        smallDisplayValue = smallDisplayValue.slice(0, -1);
        updateDisplay();
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
            bigDisplayValue = add(a, b);
            bigDisplayValue = +bigDisplayValue.toFixed(6);
            smallDisplayValue = bigDisplayValue;
            operatorValue = "";
            updateDisplay();
            break;
        case "-": 
            bigDisplayValue = subtract(a, b);
            bigDisplayValue = +bigDisplayValue.toFixed(6);
            smallDisplayValue = bigDisplayValue;
            operatorValue = "";
            updateDisplay();
            break;
        case "*": 
            bigDisplayValue = multiply(a, b);
            bigDisplayValue = +bigDisplayValue.toFixed(6);
            smallDisplayValue = bigDisplayValue;
            operatorValue = "";
            updateDisplay();
            break;
        case "/": 
            if (b == 0) {
                bigDisplay.style.fontSize = "35px";
                bigDisplayValue = "Black Hole Created!";
                updateDisplay();
                break;
            } else {
                bigDisplayValue = divide(a, b);
                bigDisplayValue = +bigDisplayValue.toFixed(6);
                smallDisplayValue = bigDisplayValue;
                operatorValue = "";
                updateDisplay();
                break;
            }
        }
    }
