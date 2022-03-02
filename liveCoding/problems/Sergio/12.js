/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

testing
7 / 2 = 3,5 -> idx 4
9 / 2 = 4,5 --> idx 5

test
4 / 2 = 2 2-1
A:
- if the length of the string is odd take one char at
  - length / 2 round it up
  - return the char
- if th elength is odd, take the char ar:
  - start at index length / 2 - 1, and take 2 char
  return the char
  

*/

function getMiddle(str) {
  let arrChar = str.split('');
  let length = str.length;
  
  if(length % 2 === 0) {
    return arrChar.splice((length / 2) -1, 2).join('');
  } else {
    return arrChar.splice(Math.floor(length /2), 1).join('');
  }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("test"))