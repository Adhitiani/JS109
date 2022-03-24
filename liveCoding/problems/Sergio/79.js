/*#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!) 

- init alphabet to 'abcdefghijklmnopqrstuvwxyz'
- find the index of the first letter in the array
- slice the alphabet start from that letter
- init 'missingLetter' to ''
- iterate over the input array
  compare the current char in the input array with the sliced alphabet
  - if the current letter in lowercase is not equal with the current letter in alphabet
    - reassign the missingLetter to the current letter in alphabet
    - break
- end iteration
- check if the char in the input array is lowercase or upper case
  - if the char in the input array is equal with its lowercase
    - return the lowercase
  - else
    - return the uppercase 
*/
// using slice
function findMissingLetter1(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let indexInAlpha = alphabet.indexOf(arr[0].toLowerCase());
  let compareAlpha = alphabet.slice(indexInAlpha);
  
  let missingLetter = '';
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() !== compareAlpha[i]) {
      missingLetter = compareAlpha[i];
      break;
    }
  }
  if (arr[0].toLowerCase() === arr[0]) {
    return missingLetter;
  } else {
    return missingLetter.toUpperCase();
  }
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');

// using index position

function findMissingLetter(arr) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let indexInAlpha = alphabet.indexOf(arr[0].toLowerCase());
  
  let missingLetter = '';
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() !== alphabet[indexInAlpha + i]) {
      missingLetter = alphabet[indexInAlpha + i];
      break;
    }
  }
  if (arr[0].toLowerCase() === arr[0]) {
    return missingLetter;
  } else {
    return missingLetter.toUpperCase();
  }
}