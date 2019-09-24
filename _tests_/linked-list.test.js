const linkedListClass = require('../challenges/linkedList/linked-list.js');

describe('Linked Lists', () => {
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
  });

});