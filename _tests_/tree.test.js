const { Node, BinaryTree } = require('../challenges/tree/tree');

describe('Binary Tree tests', () => {

  it('Can successfully instantiate an empty tree', () => {
    const binaryTree = new BinaryTree();
    expect(binaryTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('A');
    expect(binaryTree.root.value).toBe('A');
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node('B');
    binaryTree.root.left = new Node('A');
    binaryTree.root.right = new Node('C');
    expect(binaryTree.root.left.value).toBe('A');
    expect(binaryTree.root.right.value).toBe('C');
  });

  it.skip('Can successfully return a collection from a preorder traversal', () => {
    const binaryTree = new BinaryTree();
    
  });

  it.skip('Can successfully return a collection from an inorder traversal', () => {
    const binaryTree = new BinaryTree();

  });

  it.skip('Can successfully return a collection from a postorder traversal', () => {
    const binaryTree = new BinaryTree();
  });

});