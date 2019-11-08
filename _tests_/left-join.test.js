const HashTable = require('../challenges/hashTable/hashtable');
const leftJoin = require('../challenges/leftJoin/left-join');

describe.only('testing leftJoin function', () => {
  it('joins two hashmaps by key', () => {
    const firstTable = new HashTable();
    firstTable.add('fond', 'enamored');
    firstTable.add('wrath', 'anger');
    firstTable.add('diligent', 'employed');
    firstTable.add('outfit', 'garb');
    firstTable.add('guide', 'usher');

    const secondTable = new HashTable();
    secondTable.add('fond', 'averse');
    secondTable.add('wrath', 'delight');
    secondTable.add('diligent', 'idle');
    secondTable.add('guide', 'follow');
    secondTable.add('flow', 'jam');

    expect(leftJoin(firstTable, secondTable)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle'],
    ]);
  });

});