const linkedListClass = require('../challenges/linkedList/linked-list.js');
const mergeLists = require('../challenges/llMerge/ll-merge');


describe.skip('Merge Lists Test', () => {
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
    const result = mergeLists(list1, list2);
    expect(result.next.value).toBe('thing');
    expect(result.next.next.value).toBe('allison');
    expect(result.next.next.next.value).toBe('goodbye');
    expect(result.next.next.next.next.value).toBe('abbey');
    expect(result.next.next.next.next.next.value).toBe('hello');
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
    const result = mergeLists(list1, list2);
    expect(result.next.value).toBe('thing');
    expect(result.next.next.value).toBe('abbey');
    expect(result.next.next.next.value).toBe('goodbye');
    expect(result.next.next.next.next.value).toBe('hello');
  });

  it('merges two lists of different lengths pt 2', () => {
    const list1 = new linkedListClass.LinkedList();
    const list2 = new linkedListClass.LinkedList();
    
    list1.insert('abbey');
    list1.insert('allison');
    list1.insert('hello');
    list2.insert('goodbye');
    list2.insert('thing');
    
    expect(mergeLists(list1, list2).value).toBe('hello');
    const result = mergeLists(list1, list2);
    expect(result.next.value).toBe('thing');
    expect(result.next.next.value).toBe('allison');
    expect(result.next.next.next.value).toBe('goodbye');
    expect(result.next.next.next.next.value).toBe('abbey'); 
  });

});

