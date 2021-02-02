function maxSubarraySum(arr, digitsToSum) {
  if (arr.length < digitsToSum) return null;
  let maxSum = arr.slice(0, digitsToSum).reduce((a, b) => a + b);
  let tempSum = maxSum;
  for (let i = digitsToSum; i < arr.length; i++) {
    tempSum = tempSum - arr[i - digitsToSum] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
