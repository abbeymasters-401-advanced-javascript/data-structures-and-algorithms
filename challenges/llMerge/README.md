# Merge Lists

## Challenge
I'm writing a function called mergeLists that takes two linked lists as arguments. Then we're zipping the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. 

## Approach & Efficiency
For this challenge, I set the heads of the two node lists to variables, and created a finalList variable that would contain both node lists. Then I used a while loop that runs as long as the node list isn't null, and while it's running it's appending a node from the first list and then the second list. When the node list is at the end, we append the final two nodes from each list and return the head. 