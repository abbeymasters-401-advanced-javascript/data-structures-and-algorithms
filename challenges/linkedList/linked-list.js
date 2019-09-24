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
    while(currentNode.value !== value) {
      return false;
    } return true;
  }

  /**
   * Turns all node items into a string 
   * @returns string
   * @param value 
   */
  toString() {
    let emptyStr = '';
    let currentNode = this.head;

    while(currentNode !== null) {
      emptyStr += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    } 
    return emptyStr;
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
  insertBefore(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;

    if(currentNode === null) {
      currentNode = node;
      this.size++;
    } else {
      while(currentNode.next.value !== value) {
        currentNode = currentNode.next;
      } 
      node.next = currentNode.next;
      currentNode.next = node;
    
      this.size++;
    }
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currentNode = this.head;

    if(currentNode === null) {
      currentNode = node;
      this.size++;
    } else {
      while(currentNode.value !== value) {
        currentNode = currentNode.next;
      }
    } 
    node.next = currentNode;
    currentNode.next = node;
    this.size++;
  }
}

module.exports = {
  Node,
  LinkedList,
};