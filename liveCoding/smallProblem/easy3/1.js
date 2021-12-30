/* ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Problems:
- takes a string as argument
- returns a new string with consecutive duplicate characters remove to one character

Input: a string
Output: a string with no consecutive duplicate char

Examples:
"aaaa" --> 'a'
'4455ff' --> '45f'


Data Structure:
input: string
output: string

Algoritm:
1. Guard clause: if it's empty string return an empty string.
2check if the character is the same as the previous character
3. If not form a new string (concat with the other char)
4. repeat this action for each of char
*/

function crunch(str) {
  if(str === '') return "";
  let newString = str[0];
  
  for (let index = 1; index < str.length; index += 1) {
    if (str[index] !== newString[newString.length - 1]) {
      newString += str[index];
    }
  }
 
  return newString;

};
console.log(crunch('ddaaiillyy ddoouubbllee'))
    // "daily double"
    console.log(crunch('4444abcabccba'));              // "4abcabcba"
    console.log(crunch('ggggggggggggggg'));            // "g"
    console.log(crunch('a'));                          // "a"
    console.log(crunch(''));                           // ""