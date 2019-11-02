function fizzBuzzTree(tree) {
  let rootValue = this.root;
  return function fizzBuzzHelper(rootValue) {
    if(!rootValue) return 'null';

    if(rootValue.value % 3 === 0) rootValue.value = 'Fizz';
    if(rootValue.value % 5 === 0) rootValue.value = 'Buzz';
    if(rootValue.value % 15 === 0) rootValue.value = 'FizzBuzz';
    

  };
}
