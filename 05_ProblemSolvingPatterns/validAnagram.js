function validAnagram(word1, word2) {
  const characters = {
    word1: {},
    word2: {}
  };

  [...word1].map((char) => characters.word1[char] = (characters.word1[char] || 0) + 1);
  [...word2].map((char) => characters.word2[char] = (characters.word2[char] || 0) + 1);

  const keysOfWord1 = Object.keys(characters.word1);
  const result = keysOfWord1.filter((key) => characters.word1[key] === characters.word2[key]);

  return result.length === keysOfWord1.length;
}

console.log(validAnagram("texttwisttime", "timetwisttext"));
