const linkedListClass = require('../challenges/linkedList/linked-list.js');

describe.skip('Linked Lists', () => {
  it('instantiating an empty list', () => {

    const list = new linkedListClass.LinkedList();
    const exampleResult = {
      head: null,
      size: 0,
    };
    expect(list).toEqual(exampleResult);
  });

  it('Can properly insert into the linked list', () => {
    const list = new linkedListClass.LinkedList();
    const value = 5;
    list.insert(value);

    expect(list.size).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const list = new linkedListClass.LinkedList();
    const value = 5;
    list.insert(value);

    expect(list.head.value).toBe(5);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    expect(list.size).toBe(3);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'abbey';
    list.insert(valueOne);

    expect(list.includes('abbey')).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'masters';
    list.insert(valueOne);
    expect(list.includes('abbey')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    expect(list.toString()).toBe(' abbeyThree abbeyTwo abbey');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.append(valueThree);

    expect(list.size).toEqual(3);
    expect(list.head.next.next.value).toBe('abbeyThree');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';

    list.insert(valueOne);
    list.append(valueTwo);
    list.append(valueThree);
    expect(list.size).toEqual(3);
    expect(list.head.next.value).toEqual('abbeyTwo');
    expect(list.head.next.next.value).toEqual('abbeyThree');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new linkedListClass.LinkedList();
    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.insertBefore(valueTwo, 'abbeyMIDDLE');

    expect(list.size).toEqual(4);
    expect(list.toString()).toBe(' abbeyThree abbeyMIDDLE abbeyTwo abbey');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insertBefore(valueOne, valueThree);
    expect(list.size).toEqual(3);
    expect(list.head.value).toBe('abbeyTwo');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    expect(list.size).toEqual(3);
    expect(list.head.value).toEqual('abbeyThree');
    expect(valueTwo).toBe(list.head.next.value);
    list.insertAfter(valueTwo, 'abbeyMIDDLE');
    expect('abbeyMIDDLE').toBe(list.head.next.next.value);

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    list.append('abbeyLAST');
    expect(list.size).toBe(4);
    expect(list.head.next.next.next.value).toBe('abbeyLAST');
  });

  it('Where k is greater than the length of the linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    expect(list.kthFromEnd(4)).toBe('exception');
  });

  it('Where k and the length of the list are the same', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    expect(list.kthFromEnd(3)).toBe('exception');
  });

  it('Where k is not a positive integer', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);

    expect(list.kthFromEnd(-1)).toBe('exception');
    expect(list.kthFromEnd('hello')).toBe('exception');
  });

  it('Where the linked list is of a size 1', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    list.insert(valueOne);
    expect(list.kthFromEnd(1)).toBe('exception');
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new linkedListClass.LinkedList();

    const valueOne = 'abbey';
    const valueTwo = 'abbeyTwo';
    const valueThree = 'abbeyThree';
    const valueFour = 'abbeyFour';
    list.insert(valueOne);
    list.insert(valueTwo);
    list.insert(valueThree);
    list.insert(valueFour);
    expect(list.kthFromEnd(2)).toBe('abbeyThree');
    expect(list.kthFromEnd(0)).toBe('abbey');
    expect(list.kthFromEnd(1)).toBe('abbeyTwo');
  });

});