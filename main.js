const currentNumber = document.querySelector('#currentNumber');
const previousNumber = document.querySelector('#previousNumber');
const mathSign = document.querySelector('#mathSign');

const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');

const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');

let result = '';

function Display() {
    if (this.textContent === '.' && currentNumber.innerHTML === '.') return;

    currentNumber.innerHTML += this.textContent;
}

function Operate() {
    if (this.textContent === '-' && currentNumber.innerHTML === '') currentNumber.innerHTML = '-';
    if (currentNumber.innerHTML === '') return;
    if (mathSign.innerHTML !== '') showResult();

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult() {
    if (currentNumber.innerHTML === '' || previousNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let op = mathSign.innerHTML;

    switch(op) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearDisplay() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

numberButtons.forEach((button) => {
    button.addEventListener('click', Display);
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', Operate);
});
clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', showResult);