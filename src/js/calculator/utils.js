export function floatNumber(number) {
  let [integerPart] = number.toString().split('.');
  if (integerPart.length > 10) {
    return number.toExponential(10).replace(/\.?0+e/, 'e');
  } else {
    return +number.toFixed(10).replace(/\.?0+$/, '');
  }
}
