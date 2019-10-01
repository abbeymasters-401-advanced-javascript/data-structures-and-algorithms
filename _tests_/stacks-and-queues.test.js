const { Node, Stack, Queue } = require('../challenges/stacksAndQueues/stacks-and-queues');

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
    const stack = new Stack();
    stack.push('abbey');
    stack.push('kathleen');
    stack.push('masters');
    expect(stack.peek()).toBe('masters');
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toBe(null);
  });

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('abbey');
    expect(queue.front.value).toBe('abbey');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('abbey');
    queue.enqueue('kathleen');
    queue.enqueue('masters');
    expect(queue.front.value).toBe('abbey');
    expect(queue.front.next.value).toBe('kathleen');
    expect(queue.front.next.next.value).toBe('masters');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('abbey');
    queue.enqueue('kathleen');
    queue.enqueue('masters');
    const answer = queue.dequeue();
    expect(answer).toBe('abbey');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('abbey');
    queue.enqueue('kathleen');
    queue.enqueue('masters');
    const answer = queue.peek();
    expect(answer).toBe('abbey');

  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('abbey');
    queue.enqueue('kathleen');
    queue.enqueue('masters');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    const answer = queue.dequeue();
    expect(answer).toBe('empty queue');
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.front).toBe(null);
  });

});