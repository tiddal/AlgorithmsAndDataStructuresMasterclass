import { timeElapsed } from "./benchmark.mjs";

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(`Time Elapsed: ${timeElapsed(addUpTo, 1000000000) / 1000} seconds`);
