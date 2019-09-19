# Shift an Array
I'm writing a function called insertShiftArray which takes in an array and the value to be added. 

## Challenge Description
Without utilizing any of the built-in methods available to our language, I have to return an array with the new value added at the middle index.

## Approach & Efficiency
I found the center index of the array and then did a for loop running up to the length of the array's center index. In that loop, I'm setting the original numbers in the array into a new array and then increasing the index + 1. At that point I have the first half of the numbers and then the new input at the end. Then I did another for loop setting i to the middle index point and running the full length of the array to get in the last half of the array into the new array. Then I returned the new array.

## Solution
![](array-shift.jpeg)