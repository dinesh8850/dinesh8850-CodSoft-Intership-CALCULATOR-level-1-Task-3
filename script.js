let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentInput = '';
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (operator && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    currentInput = (firstOperand / secondOperand).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
        }
        operator = '';
        firstOperand = parseFloat(currentInput);
        updateDisplay();
    }
}