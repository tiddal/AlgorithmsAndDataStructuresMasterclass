function stringifyNumbers(obj) {
  if (typeof obj === 'number') return obj.toString();
  if (typeof obj !== 'object') return obj;
  return Object.entries(obj).reduce((newObject, [key, value]) => {
    return Object.assign(newObject, { [key]: stringifyNumbers(value) });
  }, new obj.constructor());
}

let test = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(test));

