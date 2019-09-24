# Linked Lists
Today we're creating linked node lists. 

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency
We created insert, includes and toString methods in order to create new nodes, insert into the node, and to output a string of everything included in the node. We created a new Node class and LinkedList class where we create the aforementioned methods. For the insert method we created a new Node taking in the inputted value and set that value to the head if it was null. If there was already a value, we made that the next node in the list. We also increased the size of the list by one. For the includes method, we used a for loop to see if the current value equaled the inputted value and if so it returns a boolean of true, as it continues through the length of the node list and finds no match then it returns false. For the toString method we initially set an empty string that is then filled by going through another for loop and using a template literal to then input each value of each node. It then returns the full string of values. 