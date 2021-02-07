import { merge } from './merge.mjs';

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, midPoint)), mergeSort(arr.slice(midPoint)));
}

console.log(mergeSort([12, 54, 7, 13, 2, 77]));
