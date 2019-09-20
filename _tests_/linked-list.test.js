const linkedListClass = require('../challenges/linkedList.js');

describe('Linked Lists', () => {
  it('instantiating an empty list', () => {

    const list = new linkedListClass.LinkedList();
    const exampleResult = {
      head: null,
      size: 0,
    };

    expect(linkedListClass.LinkedList.insert(list)).toBe(exampleResult);
  });
});