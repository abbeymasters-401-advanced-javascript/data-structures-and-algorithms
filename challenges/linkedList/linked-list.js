class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;
  }
  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }
  toString() {
    let emptyStr = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      emptyStr + `${currentNode.value}`;
      currentNode = currentNode.next;
    } return emptyStr;
  } 
}

module.exports = {
  Node,
  LinkedList,
};