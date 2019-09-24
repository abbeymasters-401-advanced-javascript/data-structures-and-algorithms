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
  /**
   * Inserts value into a Node List at the head 
   * @param value 
   */

  insert(value) {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;
  }

  /**
   * Checks if value is included in node list 
   * @returns boolean
   * @param value 
   */

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

  /**
   * Turns all node items into a string 
   * @returns string
   * @param value 
   */
  toString() {
    let emptyStr = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      emptyStr += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    } return emptyStr;
  } 
}

module.exports = {
  Node,
  LinkedList,
};