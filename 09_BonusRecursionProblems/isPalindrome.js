function isPalindrome(str, memo = "", original = "") {
  if (original === "") original = str;
  if (str.length === 0) return memo === original;
  return isPalindrome(str.slice(0, -1), memo + str.slice(-1), original);
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
