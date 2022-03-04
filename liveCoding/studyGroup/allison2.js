/* PROBLEM - 01
// Find the missing letter

Write a function that takes an array of consecutive (increasing) letters as input and returns the missing letter in the array. 

You will always get a valid array and there will always be exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters of only one case.


Problem:
input: an array of letters (increasing)
output: a string; the missing letter in the array

rules:
- always get a valid array
- always one letter missing
- the input always has at least 2 elements
- the input will either lowercase or uppercase

Notes: 
  - I have 'O' and I need the index of the lower-case version from the alphabet. 
  - I need index 14 in the `alphabet` for the second example. 
  - How do I get the index of a letter from a string? -> indexOf
  - We only want to start comparing the input to the alphabet from the 'starting point' in the alphabet.
  - The second probelm is how I use the index of the alphabet to actually compare values? 
    - First iteration: want to compare 'o' with 'O'.
    - Second iteration: want to compare 'p' with 'Q'. 

Example:
['a', 'b', 'c', 'd', 'f'] -> e
['O', 'Q', 'R', 'S'] - P

Data Structure:
input: an array


output: a string

Algo:
- create 'alphabet' = 'abcdefghijklmnopqrstuvwxyz'
- create `startingIndex` and init to the index in `alphabet` where our first letter of the input occurs.
- iterate over the input array 'arr' // ALTERNATE: iterate over the alphabet starting from the index that we grabbed.
  - start index is the index of the first char in the array
  - convert the current char to lower case
  - if the curren char in the input array is not the same as the char in the 'alpahbet' 
    - check if the first char in the input is lower case or upper case the char that is in alphabet
    - return the original char
- end of iteration


ALTERNATE ALGORITHM
- create 'alphabet' = 'abcdefghijklmnopqrstuvwxyz'
- create `startingIndex` and init to the index in `alphabet` where our first letter of the input occurs.
- One option: create a manual iterater for the input index and increment it with the body of the for loop to 'idx'
- iterate over the alphabet starting from the index that we grabbed.
  - start index is the index of the first char in the array
  - convert the current char to lower case
  - if the curren char in the input array is not the same as the char in the 'alpahbet' 
    - check if the first char in the input is lower case or upper case the char that is in alphabet
    - return the original char
  - increment the 'idx' by 1  
- end of iteration


*/

function missingLetter(arr) {
  const ALPH = 'abcdefghijklmnopqrstuvwxyz'
  const START_INDEX = ALPH.indexOf(arr[0].toLowerCase());
  let jdx = 0;
  
  // The point of the `log` is to check your expectations against what 
  // your program is actually doing. So, sometimes it's better to say: 
  // "If I'm inside this if-statement, I expect 'something specific' to have been true."
  
  
  for (let idx = START_INDEX; idx < ALPH.length; idx++) {
    // console.log(`Array value is ${arr[jdx]}`);
    // console.log(`Alphabet value is ${ALPH[idx]}`);
     console.log(`Input is ${arr[jdx]}, alphabet is ${ALPH[idx]}.`);
    
    if(arr[jdx].toLowerCase() !== ALPH[idx]) {
      console.log(`Input and alphabet were different letters.`);
      if (arr[jdx] === arr[jdx].toLowerCase()) {
        console.log(`Input was orginally lowercase.`);
        return ALPH[idx];
      } else {
        console.log(`Input was originally uppercase`);
        console.log(`Missing Char expected is 'p', got: ${ALPH[idx]}`);
        return ALPH[idx].toUpperCase();
      }
    }
    
     jdx += 1;  
  }
}


console.log(missingLetter(['a', 'b', 'c', 'd', 'f']) === 'e');
console.log(missingLetter(['O', 'Q', 'R', 'S']) === 'P');


/*
function ex(inputArr) {
  const alphabet;
  const startingIndex;
  let idx = 0; 
  
  for (let i = startingIndex; i < alphabet.length; i++) {
    // o, p, q, r, s, ...
    // but we still need to iterate over the input array to compre values
    const alphabetChar = alphabet[i];
    const currInputChar = inputArr[idx];
    idx += 1;
  }
}
*/





