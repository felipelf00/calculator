function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    b === 0 ? "error" : a / b;
}

function type(value) {
    if (value === ".") {
        if (displayValue.includes('.')) {
            return;
        }
    }
    displayValue += value;
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.textContent = displayValue;
}

function removeLast() {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    display.textContent = displayValue;
}


let displayValue  = '';
let firstNumber = 0;
let secondNumber = 0;

let display = document.querySelector(".display");
display.textContent = displayValue;

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

clear.onclick = () => clearDisplay();
backspace.onclick = () => removeLast();

const numbers = document.querySelectorAll(".number");

numbers.forEach( (key) => {
    key.onclick = () => type(key.textContent);
});