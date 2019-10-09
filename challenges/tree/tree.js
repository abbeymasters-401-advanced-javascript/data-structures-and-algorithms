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
    const newValue = new Node(value);
    const currentValue = this.root;
    if(currentValue > newValue && currentValue.left === undefined) {
      currentValue.left = newValue;
    } else if(currentValue > newValue) {
      this.add(newValue.left);
    } else if(currentValue < newValue && currentValue.right === undefined) {
      currentValue.right = newValue;
    } else if(currentValue < newValue) {
      this.add(newValue.right);
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};