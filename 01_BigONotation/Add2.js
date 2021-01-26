import { timeElapsed } from "./benchmark.mjs";

function addUpTo(n) {
  return n * (n + 1) / 2;
}

console.log(`Time Elapsed: ${timeElapsed(addUpTo, 1000000000) / 1000} seconds`);
