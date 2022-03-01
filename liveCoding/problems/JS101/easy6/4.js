/* Get The Middle Character

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.


PROBLEM:
input: a string
output: a string character (the middle char)

Rules:
-if the length is odd return one char
- length is even return two
- on char return char

Data Strucure:
input: string
output: string
array?

ALGORITM
1. convert the string to an array
2. determine the length of the array
   - if it's odd, round up the length/2 and that is the starting index to take the char from char, take one char
   - if it's even, take the char at indenx length / 2 , 2 char;
3. return the chars 


Copy Code */

function centerOf(str) {
  if(str.length <= 1) return str;
  let arrOfChar = str.split('');
  let length = arrOfChar.length;
  
  if(length % 2 === 0) {
    return arrOfChar.splice((length/2) -1, 2).join('');
  } else {
    return arrOfChar.splice(Math.floor(length/2), 1).join('')
  }
  
}
console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");

