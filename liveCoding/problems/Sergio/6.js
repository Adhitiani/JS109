/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples

"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Input: two strings ('str1', 'str2')
output: boolean

rules:
- return true if the two arguments are anagrams
- return false otherwise
- anagram is the result of rearranging letter to produce a new word
- anagram is are case insensitive (uppercase and lowercase count as the same)

A:
- convert the string to lowercase
- convert the string to an array of char
- sort both of the string
- convert back to a string
- if the sorted strings are equal return true
- else
  - return false

*/

function isAnagram1(str1, str2) {
  let sorted1 = str1.toLowerCase().split('').sort().join('');
  let sorted2 = str2.toLowerCase().split('').sort().join('');
  
  return sorted1 === sorted2;
}

console.log(isAnagram("foefet","toffeee" ))

//if the words has duplicate letter
/*
- check if all the letter in the word are the include in the text
  - iterate over the word
    - if not every letter in the word is include in the text return false
- get all the occurance of the letter in the word
- compare the occurance of the letter
  - if the occurance in the text is less than the occurance in the word 
    return false
  

*/

function isAnagram(scrambleLetter, word) {
  let arrChar = word.split('')
  if (!arrChar.every(char => scrambleLetter.includes(char))) return false;
  
  let scrambleOccurance = {};
  
  for(let i = 0; i < scrambleLetter.length; i++) {
    let currChar = scrambleLetter[i];
    scrambleOccurance[currChar] = scrambleOccurance[currChar] + 1 || 1;
  }
  
  for (let i = 0; i < arrChar.length; i++) {
    let currChar = arrChar[i];
    if(!scrambleOccurance[currChar]) return false 
    if(scrambleOccurance[currChar]) {
     scrambleOccurance[currChar] -= 1;
    }
  }
  return true;
}