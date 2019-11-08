// declare both hashmaps and function
function leftJoin(firstHashmap, secondHashmap) {
  const arr = firstHashmap.array;
  const secondArr = secondHashmap.array;
  let newArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 1) {
      newArray.push(arr[i][0]);
    }
  }
  // console.log(newArray);
  // console.log(secondArr);
  for(let j = 0; j < secondArr.length; j++) {
    if(secondArr[j].length >= 1) {
      console.log(arr[j]);
      if(firstHashmap.get(secondArr[j][0][0])) {
        for(let k = 0; k < newArray.length; k++) {
          if(newArray[k][0] === secondArr[j][0][0]) {
            newArray[k].push(secondArr[j][0][1]);
          }
        }
      }
    }
  }
  newArray.forEach(array => {
    if(array.length === 2) array.push(null);
  });
  return newArray;
}

module.exports = leftJoin;