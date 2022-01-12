/* Staggered Caps (Part 1)

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

PROBLEM:
input: a string
output: a string

rules:
- return strating from the first char capitalized and followed by a lowercase of non-alphabetic char
- capitalized for every other char

EXAMPLE:
Examples:
AlL_CaPs

DATA STRUCTURE
 string --> string
 array

 Alghrotim:
 1. convert the string to an array of char
 2. iterate over the array. for each of char:
    - replace the char in even index with upper case
    - replace the char in the odd index with lower case
 3. convert back to string
 4. return the string   

Copy Code */

function staggeredCase(string) {
  let arrOfChar = string.split('');
  let arrResult = arrOfChar.map((char, idx) => {
    if(idx % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  });
  return arrResult.join('');
};

console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");                     // 
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");   // 
