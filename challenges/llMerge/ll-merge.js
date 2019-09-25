const linkedListClass = require('../linkedList/linked-list');

function mergeLists(list1, list2) {
  const finalList = new linkedListClass.LinkedList();
  let currentOne = list1.head;
  let currentTwo = list2.head;

  while(currentOne.next !== null && currentTwo.next !== null) {
    finalList.append(currentOne.value);
    finalList.append(currentTwo.value);

    currentOne = currentOne.next;
    currentTwo = currentTwo.next;
  }
  finalList.append(currentOne.value);
  finalList.append(currentTwo.value);
  return finalList.head;
}

module.exports = mergeLists;