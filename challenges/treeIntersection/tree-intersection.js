function treeIntersection(treeOne, treeTwo) {
  const firstTree = treeOne.preOrder(treeOne.root);
  const secondTree = treeTwo.preOrder(treeTwo.root);

  const commonArray = [];
  for(let i = 0; i < firstTree.length; i++) {
    if(secondTree.includes(firstTree[i])) commonArray.push(firstTree[i]);
  }
  return commonArray;
}

module.exports = treeIntersection;