const { Node, BinaryTree, BinarySearchTree } = require('../challenges/tree/tree');

describe.skip('Binary Tree tests', () => {

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

  it('Can successfully return a collection from a preorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(20);
    binaryTree.root.left = new Node(10);
    binaryTree.root.left.left = new Node(5);
    binaryTree.root.right = new Node(25);
    binaryTree.root.right.left = new Node(23);
    binaryTree.root.right.right = new Node(30);
    expect(binaryTree.root.left.left.value).toBe(5);
    expect(binaryTree.root.right.left.value).toBe(23);
    expect(binaryTree.root.value).toBe(20);
    expect(binaryTree.preOrder(binaryTree.root)).toEqual([20, 10, 5, 25, 23, 30]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(20);
    binaryTree.root.left = new Node(10);
    binaryTree.root.left.left = new Node(5);
    binaryTree.root.right = new Node(25);
    binaryTree.root.right.left = new Node(23);
    binaryTree.root.right.right = new Node(30);
    expect(binaryTree.inorder(binaryTree.root)).toEqual([5, 10, 20, 23, 25, 30]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const binaryTree = new BinaryTree();
    binaryTree.root = new Node(20);
    binaryTree.root.left = new Node(10);
    binaryTree.root.left.left = new Node(5);
    binaryTree.root.right = new Node(25);
    binaryTree.root.right.left = new Node(23);
    binaryTree.root.right.right = new Node(30);
    expect(binaryTree.inorder(binaryTree.root)).toEqual([5, 10, 20, 23, 25, 30]);
  });
});

describe('binary search tree', () => {
  it('adds a node', () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.root = new Node(20);
    binaryTree.root.left = new Node(10);
    binaryTree.root.left.left = new Node(5);
    binaryTree.root.right = new Node(25);
    binaryTree.add(36);
    expect(binaryTree.root.right.right.value).toBe(36);
  });

  it('contains the value', () => {
    const binaryTree = new BinarySearchTree();
    binaryTree.root = new Node(20);
    binaryTree.root.left = new Node(10);
    binaryTree.root.left.left = new Node(5);
    binaryTree.root.right = new Node(25);
    expect(binaryTree.contains(10)).toBe(true);
    expect(binaryTree.contains(40)).toBe(false);
  });
});