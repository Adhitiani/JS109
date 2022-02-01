/*Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

PROBLEM
input: a number
output: a number

rules:
explicit
- returns the number multiplied by two if it's not a double number
- returns a double number as is
- double number is an even length number whose left side digit are exactly the same as it's right side digits

EXAMPLE
37 - not a double --> 74
44 - double --> 44

DATA STRUCTURE
number --> string --> number

ALGO
- check if the number is double number
  - convert the number to the string and find it's length
  - if the length is even number:
    - check if it's the right side is equal than the left side
      - if it's equal then return true
      - if it's not equal then return false
  - if it's odd number return the number
  - if it's not return the number * 2
*/

function isDouble(num) {
  let length = String(num).length;
 
  return (String(num).slice(0, length /2) === String(num).slice(length /2));
 
 };
 
 function twice(num) {
  return isDouble(num)? num : num * 2;
 }
 
 
 
 console.log(twice(37));          // 74
 console.log(twice(44));          // 44
 console.log(twice(334433));      // 668866
 console.log(twice(444));         // 888
 console.log(twice(107));         // 214
 console.log(twice(103103));      // 103103
 console.log(twice(3333));        // 3333
 console.log(twice(7676));        // 7676
 
 
 