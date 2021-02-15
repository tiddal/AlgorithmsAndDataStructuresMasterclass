import { performance } from 'perf_hooks';

function timeElapsed(functionToTest, valueToTest) {
  let start = performance.now();
  functionToTest(valueToTest);
  let finish = performance.now();
  return finish - start;
}

export { timeElapsed };
