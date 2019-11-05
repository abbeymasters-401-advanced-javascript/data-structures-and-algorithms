const HashTable = require('../challenges/hashTable/hashtable');

describe('testing hashtable functions', () => {
  const newTable = new HashTable();
  newTable.add('age', '50');
  newTable.add('color', 'red');

  it('adds and gets keys', () => {
    const ageResult = newTable.get('age');
    const colorResult = newTable.get('color');
    expect(ageResult).toEqual('50');
    expect(colorResult).toEqual('red');
  });

  it('contains a key', () => {
    expect(newTable.contains('age')).toBe(true);
  });

  it('does not contain a key', () => {
    expect(newTable.contains('newthing')).toBe(false);
  });

  it('hashes a key', () => {
    expect(newTable.hash('abbey')).toBe(71);
  });
});