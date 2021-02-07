function getDigit(num, place) {
  let stringified = num.toString();
  return stringified[stringified.length - 1 - place] || 0;
}

export { getDigit };
