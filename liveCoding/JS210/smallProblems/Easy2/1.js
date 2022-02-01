/*Ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

Copy Code
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch(''); // ""

PROBLEM
input: a string
output: a string

rules
explicit
- return a new string that contain the value of original string with all consecutive duplacate char collapsed into a single character

implicit
- empty string return an empty string

EXAMPLE
ddaaiillyy ddoouubbllee' --> daily double

DATA STRUCTURE
- string --> string
array

ALGO
- convert the string to an array of character
- create a result and inititalized it to an empty string
- iterate over the array
  - for each of character:
    - concatenad the character to the 'result' if the last char of the result is not the same as the current character
- return the result    

*/

function crunch(str) {
  let arrChar = str.split('');
  let result = '';
  
  arrChar.forEach(char => {
   if(char !== result[result.length -1]) {
     result += char
   };
  });
  
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));


