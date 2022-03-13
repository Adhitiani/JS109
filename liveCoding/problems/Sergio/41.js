/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
/*
PROBLEM
input: string
output: boolean
- true if the string is pangram
- false if it is not

rules/question:
what is pangram?
- a sentence that contains every single letter of the alphabet at least once.
- case insensitive

EXAMPLE
The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once

DATA STRUCTURE
input: string
array to hold the alphabet
output: boolean

ALGORITHM
- init alphabet = 'abcdefghijklmnopqrstuvwxyz'
- conver the alphabet to an array of letter = 'arrLetter'
- iterate over the arrLetter'
  - if every char in the 'arrLetter' is include in string input
    - return true
  - else
    - return false  
- end iteration
*/

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arrLetter = alphabet.split('');
  return arrLetter.every(char => string.includes(char))
  //console.log(arrLetter)
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))