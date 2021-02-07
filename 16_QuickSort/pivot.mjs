function pivot(arr, start = 0, end = arr.length - 1) {
  let p = arr[start];
  let i = start;
  for (let j = start + 1; j <= end; j++) {
    if (arr[j] < p) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[start], arr[i]] = [arr[i], arr[start]];
  return i;
}

export { pivot };
