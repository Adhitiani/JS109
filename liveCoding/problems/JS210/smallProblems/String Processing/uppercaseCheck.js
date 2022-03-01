/*Uppercase Check

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. Ignore characters that are not alphabetic.

P:
input: a string
output: boolean

rules:
- retruns true if all of the alphabetic char are uppercase
- otherwise return false
- ignores char that are not alphabetic
- empty string return true;

E:
see below

D:
string --> an arraay -->boolean

A:
- if the input is empty string return true
- convert the string to an array of char
- filter the char only with the alphabetic char and assign it to 'alphabet'
- iterate over the array 'alphabet':
  - check if every char is in uppercase
  - return true if it is
  - return false otherwise
*/

function isUppercase1(str) {
  //if (str === '') return true;
  
  let alphabet = str.split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
  
  return alphabet.every(char => char === char.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''))

//

/// only chars

function isUppercase(str) {
  return str === str.toUpperCase();
}