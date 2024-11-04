import './styles.css';
import './styles.css';
import {
  appendNumber,
  appendOperator,
  calculateResult,
  calculatePercentage,
  toggleSign,
  clearDisplay,
} from './js/calculator/calculator.js';
import { appendFromKeyboard } from './js/keyboard/keyboard.js';
import { toggleTheme } from './js/calculator/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-theme');
});

const numbers = document.getElementsByClassName('appendNumber');
[...numbers].forEach((number) => {
  number.addEventListener('click', (e) => appendNumber(e.target.textContent));
});

const operators = document.getElementsByClassName('appendOperator');
[...operators].forEach((operator) => {
  operator.addEventListener('click', (e) => appendOperator(e.target.textContent));
});

document.addEventListener('keydown', appendFromKeyboard);

document.getElementById('clearDisplay').addEventListener('click', clearDisplay);
document.getElementById('toggleSign').addEventListener('click', toggleSign);
document.getElementById('calculatePercentage').addEventListener('click', calculatePercentage);
document.getElementById('calculateResult').addEventListener('click', calculateResult);

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
