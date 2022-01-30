/*

Convert a Number to a String

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

PROBLEM
input: number
output: string

Rules:
- convert a positive integer or zero and convert it to a string representation
- don't use any method or coercion

EXAMPLE
see below

DATA STRUCTRE
number --> string

ALGO
- create a 'result' and initialized it to an empty string.
- get the number digit by digit
  - create an array and initialized it to an empty array
  - do the loop while the number is greater than 0. in each loop:
    - get the reminder of the number % 10 
    - unshift the reminder to the array  
    - reassgined the number to the result of substracting the number with the reminder and divided by 10
- convert the digit number to digit string
  - create an array of string equivalent by number
  - iterate of the array of number.
    - for each of the number find the matching string and concatinated to the result 
- return the result string
*/

const STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(num) {
  let result = '';
  if(num === 0) return STRING[num]
    
  
  while(num > 0) {
   let reminder = num % 10;
    result = STRING[reminder] + result
    num = (num - reminder) / 10;    
  }
  
  return result;
  
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"