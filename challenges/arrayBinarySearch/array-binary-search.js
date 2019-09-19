function binarySearch(arr, value) {
  
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  
  while(startIndex <= lastIndex) {
    let middleIndex = Math.floor((startIndex + lastIndex) / 2);
    if(value === arr[middleIndex]) {
      return middleIndex;
    } else if(value > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if(value < arr[middleIndex]) {
      lastIndex = middleIndex - 1;    
    }
  }
  return -1;
}

module.exports = binarySearch;