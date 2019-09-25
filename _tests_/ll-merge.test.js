const linkedListClass = require('../challenges/linkedList/linked-list.js');
const mergeLists = require('../challenges/llMerge/ll-merge');


describe('Merge Lists Test', () => {
  it('merges two lists', () => {
    const list1 = new linkedListClass.LinkedList();
    const list2 = new linkedListClass.LinkedList();

    list1.insert('abbey');
    list1.insert('allison');
    list1.insert('alex');
    list2.insert('hello');
    list2.insert('goodbye');
    list2.insert('thing');

    expect(mergeLists(list1, list2).value).toBe('alex');
  }); 

  it('merges two lists of different lengths', () => {
    const list1 = new linkedListClass.LinkedList();
    const list2 = new linkedListClass.LinkedList();
    
    list1.insert('abbey');
    list1.insert('allison');
    list2.insert('hello');
    list2.insert('goodbye');
    list2.insert('thing');
    
    expect(mergeLists(list1, list2).value).toBe('allison');
  });
});