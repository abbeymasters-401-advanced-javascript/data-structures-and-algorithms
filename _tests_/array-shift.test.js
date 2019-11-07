const insertShiftArray = require('../challenges/arrayShift/array-shift.js');

test.skip('finding middle of array and adding in a value', () => {
  expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
});

test.skip('finding middle of array and adding in a value pt 2', () => {
  expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
});