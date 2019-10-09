class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root, results = []) {
    if(root) {
      results.push(root.value);
      if(root.left) this.preOrder(root.left, results);
      if(root.right) this.preOrder(root.right, results);
    }
    return results;
  }

  inorder(node, results = []) {
    if(node) {
      if(node.left) this.inorder(node.left, results);
      results.push(node.value);
      if(node.right) this.inorder(node.right, results);
    }
    return results;
  }

  postOrder(node, results = []) {
    if(node) {
      if(node.left) this.postOrder(node.left, results);
      if(node.right) this.postOrder(node.right, results);
      results.push(node.value);
    }
    return results;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  add(value) {
    let rootValue = this.root;
    return addRecursive(value, rootValue);
  }

  contains(value) {
    let rootValue = this.root;
    return containsRecursive(value, rootValue);
  }
}

function containsRecursive(value, rootValue) {
  let direction;
  if(value === rootValue.value) return true;
  if(value < rootValue.value) direction = 'left';
  else direction = 'right';
  if(rootValue[direction]) return containsRecursive(value, rootValue[direction]);
  else return false;
}

function addRecursive(value, rootValue) {
  let direction;
  if(value < rootValue.value) direction = 'left';
  else direction = 'right';
  if(rootValue[direction]) { 
    return addRecursive(value, rootValue[direction]); 
  }
  return rootValue[direction] = new Node(value);
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};