/* Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:
Problem:
input: a string ( with non alphabetic character)
output: a string( with non alphabetic char replaced by spaces and no consecutive space);

Algoritm:
1. iterate over the string
 -- check if the char is alphabetic, if it's push it to a new string
 -- if it's not, check the lst char of the string is empty space.
    - if iTs is do nothing
    - if it's not push an empty space to a new string
2. return a new string    


Copy Code */

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
/* 
function cleanUp(str) {
  const ALPH = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';

  for (let index = 0; index < str.length; index +=1) {
    if (ALPH.includes(str[index])) {
      newString += str[index];
     } else if (newString[newString.length - 1] !== ' ') {
      newString += ' ';
    } 

  }
  return newString;
  
}; */


function include(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function cleanUp(str) {
  let newString = '';

  for (let index = 0; index < str.length; index += 1) {
    if(include(str[index])) {
      newString += str[index];
    } else if (newString[newString.length -1] !== ' ') {
      newString += ' ';
    };
    
  }
  return newString;
};