/*Clean Up the Words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

PROBLEM
input: a string
output: a string

rules
explicit
- return the string with all of the non-alphabetic char replace by spaces.
- the result string should only have one space in the result.

EXAMPLE
see below

DATA STRUCTURE
string--> string
array?

ALGO
I
- create an empty string
- iterate over the string
- for each of character:
  - check if it's alphabet
    - if it's, concatenated with the string result
    - if it's not:
      - check if the last char in the string is an empty space
        - if it's not, concatenated the empty spring with the result string
        - if it's do nothing
- return the result string    

II using boolean
- create an empty string
- create a checker and initialized it to true
- iterate over the array
- in each iteration:
  - check if the char is alphabet
    - if it is:
      - concatenated it with the result string
      - reassign cheker to true
    - if it's not:
      - check the chekcer
        - if its true:
          - concatenated the empty space to the string result
          - reassigned the cheker to false
        - if it's false do nothing
- return the result       
        


*/

function isAlphabet(char) {
  char = char.toLowerCase();
 return char >= 'a' && char <= 'z'
};


function cleanUp(str) {
 let result = '';
 for (let i = 0; i < str.length; i++) {
  let currChar = str[i];
  if (isAlphabet(currChar)) {
    result += currChar;
  } else if(result[result.length -1] !== ' ') {
    result += ' ';
  };   
 }
  return result;
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");    // " what s my line "


function cleanUp1(str) {
  let cleanStr = '';
  let cheker = true;
  
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (isAlphabet(currChar)) {
      cleanStr += currChar;
      cheker = true;
    } else if (cheker === true) {
      cleanStr += ' ';
      cheker = false;
    };
  }
 return cleanStr
};


console.log(cleanUp1("---what's my +*& line?") === " what s my line ");