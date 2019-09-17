function insertShiftArray(arr, input) {
  let middleIndex = Math.ceil(arr.length / 2);
  let newArray = [];
  let index = 0;
  for(let i = 0; i < middleIndex; i++) {
      newArray[index] = arr[i];
      index += 1;
  } newArray[middleIndex] = input;
  for(let i = middleIndex; i < arr.length; i++) {
    newArray[newArray.length] = arr[i];
  }
  return newArray;
}


const arrayOne = [2,4,6,8];
const inputOne = 5;

console.log(insertShiftArray(arrayOne, inputOne));

module.exports = insertShiftArray;