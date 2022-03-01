/*Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

P:
input: a string of words
ouput: a string

rules:
ex:
- return the first and last letter swaps of evry word
- assume that every word contain at least on letter
- the input string will always contain at least one word
- each string only contain words and spaces

im:

E:
Abcde --> ebcdA

D:
string --> array --> string

A:
- create a 'result' and initialized it with an empty array;
- convert the string to an array of words
- iterate over the array
- for each of the words:
  - replace it with the swap word:
    - convert it to an array of char
    - swap the first char with the last char
    - the last char with the first char
    - convert back to the string
  

- convert back the array to the string
- return the string
*/

function swapChar(word) {
  let arr = word.split('');
  
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
   return arr.join('');
};


function swap(str) {
  
  return  str.split(' ').map(word => swapChar(word)).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

