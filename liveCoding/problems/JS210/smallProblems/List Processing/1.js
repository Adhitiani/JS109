/*Sum of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Examples:

Copy Code
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

A:
Get the sum of its digits:
- convert the number to a string
- convert the string to an array of char
- convert the array of char to an array of number
- compute the sum of the array of number:
  - init 'sum' to 0
  - iterate over the number
  - in each iteration:
    - add up the current sum with the current number
- return the sum    

*/

function sum(num) {
  return String(num).split('').map(Number).reduce((sum, ele) => sum + ele, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));