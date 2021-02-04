function nestedEvenSum(obj) {
  if (typeof obj !== 'object') return obj;
  return Object.values(obj).map(nestedEvenSum).filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

