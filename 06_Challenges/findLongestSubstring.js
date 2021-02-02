function findLongestSubstring(str) {
  const seen = {};
  let start = 0;
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (seen[chr]) start = Math.max(start, seen[chr]);
    longest = Math.max(longest, i - start + 1);
    seen[chr] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('rithmschool'));
