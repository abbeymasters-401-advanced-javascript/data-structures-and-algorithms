function reverseArray(input) {
  let index = 0;
  let array = [];
  for(let i = input.length - 1; i >= 0; i--) {
    array[index] = input[i];
    index += 1;
  }
  return array;
}

reverseArray();

