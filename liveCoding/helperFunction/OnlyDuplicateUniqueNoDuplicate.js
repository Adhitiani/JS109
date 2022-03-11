/*Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

A:
// get the occurance of all the char
- init occurance to an empty object
- iterate over the string
  - if the curr char is exist in the object
    - increment the value by 1
  - else
    - add new properties to the object with the value of 1
- end iteration
// filter only the char that has one occurance
   - filter the properties with associated value of 1
// delete it from the string
  - find the index in the string
  - delete the char in the string based on index
    - iterate over the uniqueLetters
     - convert the stirng to an array, splice it by its index, convert back to string
    end iteration
- return the str    
*/

function onlyDuplicates1(str) {
  let occurance = {};
  for (let i = 0; i < str.length; i++) {
    occurance[str[i]] = occurance[str[i]] + 1 || 1;
  }
  let letters = Object.keys(occurance);
  let uniqueLetters = letters.filter(char => occurance[char] === 1);
  let arrChar = str.split('')
  for (let i = 0; i < uniqueLetters.length; i++) {
     let index = arrChar.indexOf(uniqueLetters[i]);
     arrChar.splice(index, 1).join('');
  }
  return arrChar.join('');
}

console.log(onlyDuplicates('abccdefee') === 'cceee')
console.log(onlyDuplicates('hello')=== 'll')
console.log(onlyDuplicates('colloquial')=== 'ollol')
console.log(onlyDuplicates('foundersandcoders') === 'ondersndoders')

function onlyDuplicates(str) {
  let arrChar = str.split('');
  let duplicates = arrChar.filter(char => arrChar.indexOf(char) !== arrChar.lastIndexOf(char));
  return duplicates.join('');
}

function onlyUnique(str) {
  let arrChar = str.split('');
  let unique = arrChar.filter((char) => arrChar.indexOf(char) === arrChar.lastIndexOf(char));
  return unique.join('');
}
console.log(onlyUnique('abccdefee') === 'abdf')
console.log(onlyUnique('hello')=== 'heo')
console.log(onlyUnique('colloquial')=== 'cquia')
console.log(onlyUnique('foundersandcoders') === 'fuac')

function noDuplicates(str) {
  let arrChar = str.split('');
  let unique = arrChar.filter((char, idx) => arrChar.indexOf(char) === idx);
  return unique.join('');
}
console.log(noDuplicates('abccdefee') === 'abcdef')
console.log(noDuplicates('hello')=== 'helo')
console.log(noDuplicates('colloquial')=== 'colquia')
console.log(noDuplicates('foundersandcoders') === 'foundersac')