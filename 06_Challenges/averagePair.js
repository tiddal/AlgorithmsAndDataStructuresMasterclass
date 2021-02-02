function averagePair(arr, avg) {
  let initial = 0;
  let final = arr.length - 1;
  while (initial < final) {
    if (arr[initial] + arr[final] === avg * 2) return true;
    if (arr[initial] + arr[final] < avg * 2) initial++;
    else final--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
