class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class Stack {
  constructor(value) {
    this.stack = null;
  }

  push(element) {
    let head = this.stack;
    let newNode = new Node(null, element);
  }

  pop() {
    let head = this.stack;
    this.stack = head.next;
    return head.value;
  }

  peek() {
    return this.stack.value;
  }

}


class Queue {
  constructor(value) {
    this.front = null;
  }

  enqueue() {

  }

  dequeue() {

  }

  peek() {

  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};