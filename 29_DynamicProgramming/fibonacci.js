function fibonacciMemoized(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  memo[n] = result;
  return result;
}

function fibonacciTabulated(n) {
  if (n <= 2) return 1;
  const fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }
  return fibNumbers[n];
}

console.log(fibonacciMemoized(45));
console.log(fibonacciTabulated(45));
