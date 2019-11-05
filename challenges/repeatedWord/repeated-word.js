function repeatedWord(string) {
  let obj = {};
  let count = 0;
  let newArray = [];
  const newString = string.split(' ');
  
  newString.map(word => {  
    if(obj[word] !== undefined) {
      newArray.push(word);
      return newArray;
    } else obj[word] = count;
  });
  return newArray;
}

module.exports = repeatedWord;