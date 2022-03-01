/* Delete Vowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

PROBLEM
input: an array of string
output: an array of same string without the vowels

Rules: if all the string is vowels return the string as empty string

EXAMPLE:
['ABC', 'AEIOU', 'XYZ'] => ['BC', 'XYZ']

DATA STRUCTURE: 
input: array
output: array

ALGHORITM:
1.create a cost consist of all vowel
2. create an empty array
3.iterate over the array
   - create an empty string
   - iterate over the string element, for each of char check:
     - if it's not vowel push it to an empty string
   - push the result string to the array
   - reassign the string to an empty string
4. return the array


*/

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

function removeVowels(array) {
  const VOWEL = 'aiueoAIUEO';
  let noVowels = [];

  array.forEach(str => {
    let temp = '';
    for (let index = 0; index < str.length; index++) {
      if(!VOWEL.includes(str[index])) {
        temp += str[index];
      };
    }
    noVowels.push(temp);
    temp = '';
  })

 return noVowels;
};

// using map
function removeVowels1(array) {
  let VOWELS = 'aiueoAIUEO';

  return array.map(string => {
    let noVowel = '';
    for (let index = 0; index < string.length; index ++) {
      if(!VOWELS.includes(string[index])) noVowel += string[index];
    };
    return noVowel;
  });
};

console.log(removeVowels1(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels1(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels1(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// using index of

function removeVowels2(array) {
  let VOWELS = 'aiueoAIUEO'

  return array.map(string => {
    let noVowels = '';
    for (let index = 0; index < string.length; index++) {
      if(VOWELS.indexOf(string[index]) < 0) {
        noVowels += string[index];
      };
    };
    return noVowels;
  });
};

console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
