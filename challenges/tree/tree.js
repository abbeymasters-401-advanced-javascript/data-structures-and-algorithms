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
    preOrderHelper(this.root);
    function preOrderHelper(root) {
      if(root !== null) {
        preOrderHelper(root.left);
        preOrderHelper(root.right);
      }
    }
  }
}


module.exports = {
  Node,
  BinaryTree,
};