/*#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

P:
input: an array of consecutive letters
output: a string

rules:
- return the missing letter in the array
- the input is always a valid array
- it always one letter is missing
- the length of array at least 2
- the letter in array alwys only one case (always lowercase or uppercase)

E
['a','b','c','d','f'] --> e

D:
array --> a string

A:
- create an array of string alphabet in lower case
- check the firt element in lower case index on the string of alphabet
- create a result string with inital value of empty string
- iterate over the string array
  - the start index is the index of the first element
  - for each of char:
    - check if it's the lowercase form is equal to the char in the same index in the array of alphabet
    - if it's not concatenated the char in the array to the result string
- check if the char in the string is lower case or upper case:
      - if the char.lowercase is equal to the lowercase form of character
        - return the lowercase form of the result character
        - if no return the uppercase form of result character
   
  


*/

function alphabet() {
 let alpa = [];
  for (let i = 0; i < 26; i++) {
    alpa.push(String.fromCharCode(97 + i));
  };
  
  console.log(alpa);
}

alphabet()



function findMissingLetter(array) {
  const LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
  
  let result = '';
  
  let startIdx = LETTERS.indexOf(array[0].toLowerCase());
 
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== LETTERS[startIdx + i]) {
       result = LETTERS[startIdx + i];
       break;
     };
   };

  if(array[0] === array[0].toLowerCase()) {
    return result;
  } else {
    return result.toUpperCase();
  }

}


//console.log(findMissingLetter(['a','b','c','d','f']));
//console.log(findMissingLetter(['O','Q','R','S']));


/*
A:
- find the char code of the first element in the array
- iterate over the array
- start the index from 1
- for each of the element check:
  - if the char is equal to the char with the firt char code + index
    - if it's not return the char at the char code + current index
*/

function findMissingLetter1(arr) {
 let first = arr[0].charCodeAt();
 
  for (let i = 1; i <= arr.length; i++) {
    if(arr[i] !== String.fromCharCode(first + i)) {
      return String.fromCharCode(first + i); 
    };
  };
}

console.log(findMissingLetter1(['O','Q','R','S']));
console.log(findMissingLetter1(['a','b','c','d','f']));