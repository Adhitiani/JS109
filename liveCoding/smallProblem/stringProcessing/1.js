/* Uppercase Check

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

PROBLEM:
input: a string
output: a boolean

Rules:
- return true if alphabetic char all upper case
- return false otherwise
- ignore char that are not alphabetic
- return true for empty string

EXAMPLE:
'4SCORE!' --> true

DATA STRUCTURE
input: string
output: boolean
array?

ALGORITHM
1. convert all the string to upper case
2. check the conver string:
   . if it is equal to the original string return true
   - return false otherwise


Copy Code */

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

function isUppercase(string) {
  return string.toUpperCase() === string;
};