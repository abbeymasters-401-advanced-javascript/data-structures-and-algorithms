class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
  }

  /**
   * Push a new node to the top of the stack
   * @param value
   * no return 
   */

  push(element) {
    const node = new Node(element);
    if (!this.top) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let answer;
    if (this.top) {
      answer = this.top.value;
      this.top = this.top.next;
    } else answer = null;
    return answer;
  }

  peek() {
    return this.top.value;
  }
}


class Queue {
  constructor(value) {
    this.front = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.front;
    if (!currentNode) {
      this.front = newNode;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  dequeue() {
    let currentNode = this.front;
    let answer;
    if (!currentNode) {
      return 'empty queue';
    } else {
      answer = currentNode.value;
      this.front = currentNode.next;
    }
    return answer;
  }

  peek() {
    return this.front.value;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};