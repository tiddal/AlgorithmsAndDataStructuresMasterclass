function isSubsequence(string1, string2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < string2.length) {
    if (string1[pointer1] === string2[pointer2]) pointer1++;
    if (pointer1 === string1.length) return true;
    pointer2++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
