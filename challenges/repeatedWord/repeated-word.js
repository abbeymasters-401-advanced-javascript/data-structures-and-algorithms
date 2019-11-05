function repeatedWord(string) {
  let obj = {};
  let count = 0;
  let newString = string.toLowerCase().split(' ');

  for (let i = 0; i < newString.length; i++) {
    if (!obj[newString[i]]) {
      count++;
      obj[newString[i]] = count;
    } else if (obj[newString[i]]) return newString[i];
  }
}

module.exports = repeatedWord;