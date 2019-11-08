const treeIntersection = require('../challenges/treeIntersection/tree-intersection');
const { BinaryTree, Node } = require('../challenges/tree/tree');

describe('testing treeIntersection function', () => {

  it('returns common number in binary tree', () => {
    const firstTree = new BinaryTree;
    firstTree.root = new Node(50);
    firstTree.root.left = new Node(25);
    firstTree.root.right = new Node(75);
    firstTree.root.right.left = new Node(60);
    firstTree.root.right.right = new Node(100);
    firstTree.root.right.right.left = new Node(80);
    firstTree.root.right.right.right = new Node(120);
    firstTree.root.left.left = new Node(20);
    firstTree.root.left.right = new Node(22);
    firstTree.root.left.right.left = new Node(21);
    firstTree.root.left.right.right = new Node(24);

    const secondTree = new BinaryTree;
    secondTree.root = new Node(42);
    secondTree.root.left = new Node(100);
    secondTree.root.right = new Node(600);
    secondTree.root.right.left = new Node(200);
    secondTree.root.right.right = new Node(350);
    secondTree.root.right.right.left = new Node(4);
    secondTree.root.right.right.right = new Node(500);
    secondTree.root.left.left = new Node(15);
    secondTree.root.left.right = new Node(160);
    secondTree.root.left.right.left = new Node(125);
    secondTree.root.left.right.right = new Node(175);
    expect(treeIntersection(firstTree, secondTree)).toEqual([100]);
  });
});