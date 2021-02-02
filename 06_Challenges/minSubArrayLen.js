function minSubArrayLen(arr, n) {
  let total = 0;
  let initial = 0;
  let final = 0;
  let minLen = Infinity;

  while (initial < arr.length) {
    if (total < n && final < arr.length) {
      total += arr[final];
      final++;
    } else if (total >= n) {
      minLen = Math.min(minLen, final - initial);
      total -= arr[initial];
      initial++;
    } else {
      return minLen === Infinity ? 0 : minLen;
    }
  }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
