function binarySearch(sample, test) {
  let pointer1 = 0;
  let pointer2 = sample.length - 1;
  let midPoint = Math.floor(sample.length / 2);
  while (pointer1 <= pointer2) {
    if (sample[midPoint] > test) pointer2 = midPoint - 1;
    else if (sample[midPoint] < test) pointer1 = midPoint + 1;
    else return midPoint;
    midPoint = Math.floor((pointer1 + pointer2) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
