function capitalizeWords(arr, memo = []) {
  if (arr.length === 0) return memo;
  return capitalizeWords(arr.slice(1), memo.concat([arr[0].toUpperCase()]));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
