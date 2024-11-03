import './styles.css';

let currentInput = '0';
let operator = '';
let operand1 = 0;
let operand2 = null;

let lastOperator = '';
let lastOperand = null;

function appendNumber(number) {
  if (number === '.' && !currentInput.includes('.')) {
    // Если вводится точка, и точки ещё нет в currentInput
    currentInput = currentInput === '' ? '0.' : currentInput + '.';
  } else if (currentInput === '0' && number !== '.') {
    // Если текущий ввод равен "0" и добавляется число (не точка)
    currentInput = number;
  } else {
    // Для обычного случая, добавляем число к currentInput
    currentInput += number;
  }
  updateDisplay(currentInput);
  document.getElementById('clearDisplay').textContent = 'C';
}

function appendOperator(op) {
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
function appendFromKeyboard(e) {
  if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') appendOperator(e.key);
  if ((+e.key >= 0 && +e.key <= 9) || e.key === '.') appendNumber(e.key);
  if (e.key === '=' || e.key === 'Enter') calculateResult();
}

function calculateResult() {
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
        result = operand2 !== 0 ? operand1 / operand2 : 'Error';
        break;
      default:
        return 'Error: Invalid operator';
    }

    // Если результат не число (например, деление на ноль), возвращаем результат сразу

    if (typeof result !== 'number' || isNaN(result)) return 'Error';

    // Преобразуем результат в строку, округляя до 10 знаков после запятой
    result = floatNumber(result);

    updateDisplay(result);
    resetCalculator(result);
  }
}

function floatNumber(number) {
  // Проверяем количество знаков в целой части
  let [integerPart] = number.toString().split('.');

  // Если целая часть больше 10 знаков, форматируем в экспоненциальную запись
  if (integerPart.length > 10) {
    return number.toExponential(10).replace(/\.?0+e/, 'e'); // убираем лишние нули перед 'e'
  } else {
    // Иначе просто округляем до 10 знаков после запятой и убираем лишние нули
    return +number.toFixed(10).replace(/\.?0+$/, '');
  }
  //   return +number.toFixed(10).replace(/\.?0+$/, '');
}

function calculatePercentage() {
  if (operand1 === 'Error') {
    updateDisplay('Error');
    resetCalculator('Error');
    return;
  }
  let result;

  // Преобразуем процент в десятичное число

  if (!operand1) {
    result = parseFloat(currentInput) / 100;
  } else if (operand1 && !currentInput) {
    result = operand1 / 100;
  } else {
    let percentValue = currentInput / 100;

    // Выполняем операцию в зависимости от оператора
    switch (operator) {
      case '+':
        result = operand1 + operand1 * percentValue;
        break;
      case '-':
        result = operand1 - operand1 * percentValue;
        break;
      case '*':
        result = operand1 * percentValue; // Просто 30% от a
        break;
      case '/':
        result = percentValue !== 0 ? operand1 / percentValue : 'Error: Division by zero';
        return;
      default:
        return 'Error: Invalid operator';
    }
  }

  result = floatNumber(result);
  updateDisplay(result);
  resetCalculator(result);
}

function toggleSign() {
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

function updateDisplay(value) {
  if (value.toString().length > 10) {
    document.getElementById('display').classList.add('smallResult');
  } else {
    document.getElementById('display').classList.remove('smallResult');
  }
  document.getElementById('display').value = value;
}

function clearDisplay() {
  currentInput = '0';
  operand1 = 0;
  operand2 = null;
  operator = '';
  updateDisplay(0);
  document.getElementById('clearDisplay').textContent = 'AC';
}

function resetCalculator(value) {
  operand1 = value;
  lastOperand = operand2;
  lastOperator = operator;
  operand2 = null;
  operator = '';
  currentInput = '';
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

// Инициализация темы по умолчанию
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-theme'); // Задаём темную тему по умолчанию
});

const numbers = document.getElementsByClassName('appendNumber');
[...numbers].forEach((number) => {
  number.addEventListener('click', (e) => appendNumber(e.target.textContent));
});

const operators = document.getElementsByClassName('appendOperator');
[...operators].forEach((operator) => {
  operator.addEventListener('click', (e) => appendOperator(e.target.textContent));
});

document.getElementById('clearDisplay').addEventListener('click', clearDisplay);
document.getElementById('toggleSign').addEventListener('click', toggleSign);
document.getElementById('calculatePercentage').addEventListener('click', calculatePercentage);
document.getElementById('calculateResult').addEventListener('click', calculateResult);

document.addEventListener('keydown', appendFromKeyboard);

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
