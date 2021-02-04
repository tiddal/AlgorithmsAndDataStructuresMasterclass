function flatten(arr) {
  if (arr.length === 0) return [];
  let flattened = [];
  if (Array.isArray(arr[0])) flattened = flatten(arr[0]);
  else flattened.push(arr[0]);
  return flattened.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
