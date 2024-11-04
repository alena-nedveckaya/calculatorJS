import { floatNumber } from './utils.js';

let currentInput = '0';
let operator = '';
let operand1 = 0;
let operand2 = null;
let lastOperator = '';
let lastOperand = null;

export function appendNumber(number) {
  if (number === '.' && !currentInput.includes('.')) {
    currentInput = currentInput === '' ? '0.' : currentInput + '.';
  } else if (number === '.' && currentInput.includes('.')) {
    return;
  } else if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay(currentInput);
  document.getElementById('clearDisplay').textContent = 'C';
}

export function appendOperator(op) {
  if (currentInput !== '') {
    if (operand1 === 0 || !operator) {
      operand1 = parseFloat(currentInput);
      operator = op;
      currentInput = '';
    } else {
      calculateResult();
      operator = op;
      currentInput = '';
    }
  } else {
    operator = op;
  }
}

export function calculateResult() {
  if (operand1 === 'Error') {
    updateDisplay('Error');
    resetCalculator('Error');
    return;
  }

  if (!currentInput && !operator) {
    currentInput = lastOperand;
    operator = lastOperator;
  }

  if (operator && currentInput) {
    operand2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0) {
          updateDisplay('Error');
          resetCalculator('Error');
          return;
        }
        result = operand1 / operand2;
        break;
      default:
        return 'Error';
    }

    if (typeof result !== 'number' || isNaN(result)) return 'Error';

    result = floatNumber(result);
    updateDisplay(result);
    resetCalculator(result);
  }
}

export function calculatePercentage() {
  if (operand1 === 'Error') {
    updateDisplay('Error');
    resetCalculator('Error');
    return;
  }
  let result;

  if (!operand1) {
    result = parseFloat(currentInput) / 100;
  } else if (operand1 && !currentInput) {
    result = operand1 / 100;
  } else {
    let percentValue = currentInput / 100;

    switch (operator) {
      case '+':
        result = operand1 + operand1 * percentValue;
        break;
      case '-':
        result = operand1 - operand1 * percentValue;
        break;
      case '*':
        result = operand1 * percentValue;
        break;
      case '/':
        if (percentValue === 0) {
          updateDisplay('Error');
          resetCalculator('Error');
          return;
        } else {
          result = operand1 / percentValue;
          break;
        }
      default:
        return 'Error: Invalid operator';
    }
  }

  result = floatNumber(result);
  updateDisplay(result);
  resetCalculator(result);
}

export function toggleSign() {
  if (operand1 === 'Error') {
    updateDisplay('Error');
    resetCalculator('Error');
    return;
  }
  if (currentInput) {
    currentInput = floatNumber(parseFloat(currentInput) * -1);
    updateDisplay(currentInput);
  } else if (!currentInput && operand1) {
    operand1 = floatNumber(parseFloat(operand1) * -1);
    updateDisplay(operand1);
  }
}

function resetCalculator(value) {
  operand1 = value;
  lastOperand = operand2;
  lastOperator = operator;
  operand2 = null;
  operator = '';
  currentInput = '';
}

export function updateDisplay(value) {
  if (value.toString().length > 10) {
    document.getElementById('display').classList.add('smallResult');
  } else {
    document.getElementById('display').classList.remove('smallResult');
  }
  document.getElementById('display').value = value;
}

export function clearDisplay() {
  currentInput = '0';
  operand1 = 0;
  operand2 = null;
  operator = '';
  updateDisplay(0);
  document.getElementById('clearDisplay').textContent = 'AC';
}
