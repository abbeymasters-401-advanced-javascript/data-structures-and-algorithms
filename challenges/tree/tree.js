class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = null;
  }

  preOrder(root) {
    if(root === null) return [];
    let stack = [];
    let result = [];
    stack.push(root);
    while(stack.length > 0) {
      let node = stack.pop();
      result.push(node.val);
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
    }
    return result;
  }
}


module.exports = {
  Node, 
  BinaryTree,
};