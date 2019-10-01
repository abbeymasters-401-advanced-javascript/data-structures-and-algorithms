const { Node, Stack, Queue} = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('Stacks and Queues', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('abbey');
    stack.push('masters');
    expect(stack.top.value).toBe('masters');
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push('abbey');
    stack.push('masters');
    expect(stack.top.value).toBe('masters');
    expect(stack.top.next.value).toBe('abbey');
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('abbey');
    stack.push('kathleen');
    stack.push('masters');
    const answer = stack.pop();
    expect(answer).toBe('masters');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('abbey');
    stack.push('kathleen');
    stack.push('masters');
    stack.pop();
    stack.pop();
    stack.pop();
    const answer = stack.pop();
    expect(answer).toBe(null);
  });

  it('Can successfully peek the next item on the stack', () => {

  });

  it('Can successfully instantiate an empty stack', () => {

  });

  it('Can successfully enqueue into a queue', () => {

  });

  it('Can successfully enqueue multiple values into a queue', () => {

  });

  it('Can successfully dequeue out of a queue the expected value', () => {

  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

  });

  it('Can successfully empty a queue after multiple dequeues', () => {

  });

  it('Can successfully instantiate an empty queue', () => {

  });

});