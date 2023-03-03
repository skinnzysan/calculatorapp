const currentNumber = document.querySelector('#currentNumber');
const previousNumber = document.querySelector('#previousNumber');
const mathSign = document.querySelector('#mathSign');
const numberButtons = document.querySelectorAll('#number');
const operatorButtons = document.querySelectorAll('#operator');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

let result = '';

function displayNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.';

    currentNumber.innerHTML += this.textContent;
}

function operate() {
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }

    else if (currentNumber.innerHTML === '') {
        return;
    }

    if(mathSign.innerHTML !== '') {
         showResult();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult() {
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'X':
        result = a * b;
        break;
        case '/':
        result = b / a;
        break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearScreen() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', operate);
});
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers);
});
equalButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);

