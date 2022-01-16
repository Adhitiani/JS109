// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'], 
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.
/*
PROBLEM:
input: an array of strings
output: a boolean

Rules:
Explicit:
- return a boolean:
  - return true if at least three of the elements have digits whose sum is divisible by 3
  - return false otherwise
- input array contains strings digits from 0 -9

Implicit:
- We can assume the input will not be an empty array
- if the array length is less than 3 return false

EXAMPLE
input: ['35', '01110', '126', '57', '13']
--> [8, 3, 9, 12, 4] --> [3, 9, 12] ==> true

DATA STRUCTURE
array of string -->  array of numbers --->boolean

ALGO:
1. iterate over the input array. For each of element:
   - coerce the string to an array of character
2.iterate over the sub array:   
   - coerce the character to number
   - sum the number
3. Select the number of the array that divisible by 3
4. evaluate the length of the filtered array
   - if it's greater or equal to 3 return true
   - return false otherwise
*/


function threeByThree(array) {
  let arrayOfChar = array.map(string => {
     return string.split('')
  });
  
  let number = arrayOfChar.map(subArray => {
    let sum = 0;
    subArray.forEach(char => sum += Number(char));
    return sum;
  });
  
  let divThree = number.filter(sum => sum % 3 === 0);
  
  return divThree.length >= 3;
  
  
}




// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

