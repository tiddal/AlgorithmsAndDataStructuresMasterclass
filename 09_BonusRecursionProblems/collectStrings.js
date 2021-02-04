function collectStrings(obj) {
  if (typeof obj === 'string') return [obj];
  return Object.values(obj).reduce((arr, val) => [...arr, ...collectStrings(val)], []);
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj));
