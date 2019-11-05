function repeatedWord(string) {
  let obj = {};
  let count = 0;
  let newArray = [];
  let newString = string.toLowerCase().split(' ');
  
  newString.map(word => {  
    if(obj[word] !== undefined) {
      newArray.push(word);
      return newArray;
    } else obj[word] = count;
  });
  return newArray[0];
}

module.exports = repeatedWord;