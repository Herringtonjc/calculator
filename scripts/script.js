const bigDisplay = document.querySelector("#big-display");
const smallDisplay = document.querySelector("#small-display");
const numberNodes = document.querySelectorAll(".number-button");

let displayValue = "";
let smallDisplayValue = ""; //Holds the value for the running calculation
let bigDisplayValue = ""; //Holds the current operation being performed
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
            //Does nothing currently
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
            //Updates the displays with the buttons being pressed
            bigDisplayValue += event.target.textContent;
            smallDisplayValue += event.target.textContent;
            updateDisplay();
            break;
        case "button-equals":
            operate(operatorValue, parseInt(displayValue), parseInt(bigDisplayValue));
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
        operate(operatorValue, parseInt(displayValue), parseInt(bigDisplayValue));
        operatorValue = operator; //Sets operator to the new operator
        displayValue = smallDisplayValue; //Stores the entire calculation
        smallDisplayValue += operatorValue; //Append the operator
        bigDisplayValue = ""; //Clear the display
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
    //Clears everything
    displayValue = "";
    bigDisplayValue = "";
    smallDisplayValue = "";
    operator = "";
    updateDisplay();
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
    if(b == 0) {
        return false;
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    if(!b) {
        bigDisplay.style.fontSize = "35px";
        bigDisplayValue = "Black Hole Created!";
        updateDisplay();
        } else {
        switch(operator) {
            case "+": 
                //Changes the display values to show the calculated answer
                bigDisplayValue = add(a, b);
                bigDisplayValue = +bigDisplayValue.toFixed(6);
                smallDisplayValue = bigDisplayValue;
                operatorValue = ""; //Reset operator
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
                bigDisplayValue = divide(a, b);
                if(!bigDisplayValue) {
                    bigDisplay.style.fontSize = "35px";
                    bigDisplayValue = "Black Hole Created!";
                    updateDisplay();
                    break;
                } else {
                    bigDisplayValue = +bigDisplayValue.toFixed(6);
                    smallDisplayValue = bigDisplayValue;
                    operatorValue = "";
                    updateDisplay();
                    break;
                }
        }
    }
}
