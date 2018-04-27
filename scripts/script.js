/*////////////////////////////////Selectors///////////////////////////////////*/
const bigDisplay = document.querySelector("#big-display");
const smallDisplay = document.querySelector("#small-display");
const btnPeriod = document.querySelector("#button-period");
const numberNodes = document.querySelectorAll(".number-button");

/*////////////////////////////////Globals/////////////////////////////////////*/
let displayValue = "";
let smallDisplayValue = "";
let bigDisplayValue = "";
let doneOperating = false;

/*////////////////////////////////Event Listeners/////////////////////////////*/
numberNodes.forEach(function(button) {
  button.addEventListener("click", buttonListener);
})

document.addEventListener("keydown", keyListener);

/*////////////////////////////////Functions///////////////////////////////////*/
function keyListener(event) {
  console.log(event.which);
  switch (event.which) {
    case 67:
      clearDisplay();
      break;
    case 8:
      eraseDisplay();
      break;
    case 111:
      updateOperator("/");
      break;
    case 106:
      updateOperator("*");
      break;
    case 109:
      updateOperator("-");
      break;
    case 107:
      updateOperator("+");
      break;
    case 96:
    case 48:
    case 97:
    case 49:
    case 98:
    case 50:
    case 99:
    case 51:
    case 100:
    case 52:
    case 101:
    case 53:
    case 102:
    case 54:
    case 103:
    case 55:
    case 104:
    case 56:
    case 105:
    case 57:
      if (doneOperating) {
          clearDisplay();
          doneOperating = false;
          bigDisplayValue += event.key;
          smallDisplayValue += event.key;
          displayValue += event.key;
          updateDisplay();
      } else {
          doneOperating = false;
          bigDisplayValue += event.key;
          smallDisplayValue += event.key;
          displayValue += event.key;
          updateDisplay();
      }
      break;
    case 13:
      operate();
      break;
    case 110:
    case 190:
      isDecimal();
      break;
  }
}

function buttonListener(event) {
  switch (event.target.getAttribute("id")) {
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
        updateOperator("-");
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
      if (doneOperating) {
        clearDisplay();
        doneOperating = false;
        bigDisplayValue += event.target.textContent;
        smallDisplayValue += event.target.textContent;
        displayValue += event.target.textContent;
        updateDisplay();
    } else {
        doneOperating = false;
        bigDisplayValue += event.target.textContent;
        smallDisplayValue += event.target.textContent;
        displayValue += event.target.textContent;
        updateDisplay();
      }
      break;
    case "button-equals":
        operate();
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

function clearDisplay() {
    displayValue = "";
    bigDisplayValue = "";
    smallDisplayValue = "";
    operator = "";
    updateDisplay();
}

function updateOperator(operator) {
    doneOperating = false;
    displayValue += operator;
    bigDisplayValue = "";
    if (event.type == "click") {
      smallDisplayValue += event.target.textContent;
    } else {
      smallDisplayValue += event.key;
    }
    updateDisplay();
}

function isDecimal() {
    if (!bigDisplayValue.match(/[.]/g)) {
        bigDisplayValue += event.target.textContent;
        smallDisplayValue += event.target.textContent;
        displayValue += event.target.textContent;
        updateDisplay();
    }
}

function eraseDisplay() {
    if (displayValue != "") {
        bigDisplayValue = bigDisplayValue.slice(0, -1);
        smallDisplayValue = smallDisplayValue.slice(0, -1);
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}

function operate() {
    smallDisplayValue += "=" + eval(displayValue);
    bigDisplayValue = eval(displayValue);
    if (!isFinite(bigDisplayValue)) {
        bigDisplayValue = "Black Hole Created";
        bigDisplay.style.fontSize = "35px";
        updateDisplay();
        doneOperating = true;
    } else {
        bigDisplayValue = +bigDisplayValue.toFixed(6);
        updateDisplay();
        doneOperating = true;
    }
}
