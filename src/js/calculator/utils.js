export function floatNumber(number) {
  if (number === 0) return 0;

  let [integerPart] = number.toString().split('.');

  // Condition for numbers with a large exponent or very small numbers
  if (integerPart.length > 10 || Math.abs(number) < 1e-10) {
    return number.toExponential(10).replace(/\.?0+e/, 'e');
  }

  //Processing of numbers with exponent > 10
  let exponentialForm = number.toExponential();
  let exponent = parseInt(exponentialForm.split('e')[1], 10);

  if (exponent > 10) {
    return number.toExponential(10).replace(/\.?0+e/, 'e');
  }

  // Normal rounding to 10 digits if the number fits in size
  return +number.toFixed(10).replace(/\.?0+$/, '');
}
