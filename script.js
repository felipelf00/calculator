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
    if (b == 0) {
        return 'error';
    } else return a / b;
}

function type(value) {
    if (triggerNewInput) {
        clearDisplay();
        triggerNewInput = false;
    }
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

function restart() {
    clearDisplay();
    firstNumber = null;
}

function removeLast() {
    displayValue = displayValue.toString();
    displayValue = displayValue.slice(0, displayValue.length - 1);
    display.textContent = displayValue;
}

function setFirstValue(value) {
    firstNumber = value;
};

function operate(firstNumber, secondNumber, operation) {
    switch (operation) {
        case 'add': return add(firstNumber, secondNumber);
        break;
        case 'subtract': return subtract(firstNumber, secondNumber);
        break;
        case 'multiply': return multiply(firstNumber, secondNumber);
        break;
        case 'divide': return divide(firstNumber, secondNumber);
        break;
    }
}



let displayValue  = '';
let firstNumber = null;
// let secondNumber = null;
let currentOperation = '';
let triggerNewInput = false;

let display = document.querySelector(".display");
display.textContent = displayValue;

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equals");

clear.onclick = () => restart();
backspace.onclick = () => removeLast();

addBtn.onclick = () => {
    triggerNewInput = true;
    if (firstNumber === null) {
        setFirstValue(displayValue*1);
        currentOperation = 'add';
    } else {
        firstNumber = operate(firstNumber, displayValue*1, currentOperation);
        currentOperation = 'add';
    }    
}

subtractBtn.onclick = () => {
    triggerNewInput = true;
    if (firstNumber === null) {
        setFirstValue(displayValue*1);
        currentOperation = 'subtract';
    } else {
        firstNumber = operate(firstNumber, displayValue*1, currentOperation);
        currentOperation = 'subtract';
    }    
}

multiplyBtn.onclick = () => {
    triggerNewInput = true;
    if (firstNumber === null) {
        setFirstValue(displayValue*1);
        currentOperation = 'multiply';
    } else {
        firstNumber = operate(firstNumber, displayValue*1, currentOperation);
        currentOperation = 'multiply';
    }    
}

divideBtn.onclick = () => {
    triggerNewInput = true;
    if (firstNumber === null) {
        setFirstValue(displayValue*1);
        currentOperation = 'divide';
    } else {
        firstNumber = operate(firstNumber, displayValue*1, currentOperation);
        currentOperation = 'divide';
    }    
}

equalBtn.onclick = () => {
    if (currentOperation) {
        displayValue = operate(firstNumber, displayValue*1, currentOperation);
        currentOperation = '';
        firstNumber = null;
        display.textContent = displayValue;
        triggerNewInput = true;
    }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach( (key) => {
    key.onclick = () => type(key.textContent);
});

/* Tenho um valor no display. 
Ao clicar numa operação, atribuir o valor à primeira variável e limpar o display.
Entrar com o segundo valor.
Se clicar =, atribuir o valor atual à segunda variável, fazer a operação e mostrar resultado.
    atribuir o resultado à primeira variável. Limpar operação atual.
Se clicar outra operação, atribuir valor à segunda variável, fazer a operação,
    mostrar resultado e atribuí-lo à primeira variável.
*/

