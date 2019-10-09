# Binary Trees

## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node and the right child node.
* Create a BinaryTree class
* Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

## Approach & Efficiency
* To search we check if the new value matches the root—if it does then we return false, otherwise we check to see if the value is greater or less than the root's value. Then depending on whether it's greater or less than, we assign it a direction. Then we run the recursive function again with the next node in that direction assigned as the next root value. It runs until we have a match, otherwise it returns false.
* To add we assign a direction at the beginning of the function depending on whether it's less than or greater to the root's value. If there's a next node in whichever direction then we run the recursive function again to continue traversing. If there's not a next node, we add the new node value.
