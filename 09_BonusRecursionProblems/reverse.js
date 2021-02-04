function reverse(str, memo = "") {
  if (str.length === 0) return memo;
  return reverse(str.slice(0, -1), memo + str.slice(-1));
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
