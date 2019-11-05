const { PseudoQueue } = require('../challenges/queueWithStacks/queue-with-stacks.js');

describe.skip('Queue with Stacks', () => {

  it('enqueues values', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push(10);
    pseudoQueue.inStack.push(15);
    pseudoQueue.inStack.push(20);
    pseudoQueue.enqueue(5);
    expect(pseudoQueue.inStack.top.value).toBe(20);
    expect(pseudoQueue.inStack.top.next.value).toBe(15);
    expect(pseudoQueue.inStack.top.next.next.value).toBe(10);
    expect(pseudoQueue.inStack.top.next.next.next.value).toBe(5);
  });

  it('dequeues a value', () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.inStack.push(5);
    pseudoQueue.inStack.push(10);
    pseudoQueue.inStack.push(15);
    pseudoQueue.inStack.push(20);
    const result = pseudoQueue.dequeue();
    expect(pseudoQueue.inStack.top.value).toBe(20);
    expect(pseudoQueue.inStack.top.next.value).toBe(15);
    expect(pseudoQueue.inStack.top.next.next.value).toBe(10);
    expect(result.value).toBe(5);
  });

});