function capitalizeFirst(arr, memo = []) {
  if (arr.length === 0) return memo;
  const capitalizedWord = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  return capitalizeFirst(arr.slice(1), memo.concat([capitalizedWord]));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
