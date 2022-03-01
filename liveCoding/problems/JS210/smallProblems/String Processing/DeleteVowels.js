/*Delete Vowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

A:
- itearate over the array of string
- for each of the string:
  - convert the string to an array of char
  - filter it to only consonant
  - convert back to string
  

*/

function removeVowels(arr) {
  return arr.map(str => str.split('')
                           .filter(char => !'aeiuoAIUEO'.includes(char))
                           .join(''));
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

