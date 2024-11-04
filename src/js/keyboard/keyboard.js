import { appendNumber, appendOperator, calculateResult } from './../calculator/calculator.js';

export function appendFromKeyboard(e) {
  if (['+', '-', '/', '*'].includes(e.key)) appendOperator(e.key);
  if ((+e.key >= 0 && +e.key <= 9) || e.key === '.') appendNumber(e.key);
  if (e.key === '=' || e.key === 'Enter') calculateResult();
}
