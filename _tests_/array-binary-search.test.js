const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe.skip('using binary search function', () => {
  it('using binary search function', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
  it('using binary search function #2', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });
});