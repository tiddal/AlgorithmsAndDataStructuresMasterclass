function sameFrequency(int1, int2) {
  const numbersFrequency = {
    1: {},
    2: {}
  };
  [...int1.toString()].map((number) => numbersFrequency['1'][number] = (numbersFrequency['1'][number] || 0) + 1);
  [...int2.toString()].map((number) => numbersFrequency['2'][number] = (numbersFrequency['2'][number] || 0) + 1);

  const keysOfInt1 = Object.keys(numbersFrequency['1']);
  const frequencyOfInt2InInt1 = keysOfInt1.filter((key) => numbersFrequency['1'][key] === numbersFrequency['2'][key]);

  return keysOfInt1.length === frequencyOfInt2InInt1.length;

}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
