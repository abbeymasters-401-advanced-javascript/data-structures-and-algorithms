# Array Binary Search
Today, I'm writing a function called BinarySearch which takes in 2 parameters: a sorted array and the search key and returns the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge
I can't utilize any of the built-in methods available in JavaScript.

## Approach & Efficiency
To find the middle index using binary search, I used a while loop and multiple if statements. If the inputted value was the middle index, than I returned that index. If the value was greater than the number at the middle index than I changed the start index to middleIndex + 1 in order to keep shifting the search closer to the intended index. If the value was less than I made the lastIndex equal to the middleIndex minus one. 

## Solution
![](assets/binary-search-1.jpeg)
![](assets/binary-search-2.jpeg)