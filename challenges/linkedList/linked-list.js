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

  /**
   * Adds a new node with the given value to the end of the list
   * @param value
   */

  append(value) {
    const node = new Node(value);
    if(this.head === null) {
      this.head = node;
    }
    else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};