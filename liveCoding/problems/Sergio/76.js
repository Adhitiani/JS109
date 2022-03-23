/*Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
*/
/*
PROBLEM
input: string (a string of words)
output: string
- the same string where:
  - even index chars are UpperCase
  - odd index chars are lowercase

rules/question:
- each word start at index 0
- index start with 0 which is even --> the first char of each word is upper
- the input will only have letters and spaces
- each words separated by single space

EXAMPLE
Weird string case
WeIrD StRiNg CaSe

DATA STRUCTURE
input: string
output: string

ALGORITHM
- turn the string to an array of word --> 'arrWord'
- iterate over 'arrWord'
  - init 'newWord' to ''
  - for each word
  iterate over the word
    - if idx is even then turn the char to UpperCase
    - concatenated it to 'arrWord
    - else 
      - concatenated the lowerCase of Char to 'arrWords'
    - replace the currWord with 'newWord'    
- end iteration
- convert the array to string
- return the string

*/

function toWeirdCase(str) {
  let arrWord = str.split(' ');
  arrWord = arrWord.map(word => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if(i % 2 === 0) {
        newWord += word[i].toUpperCase();
        //console.log(newWord)
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    return word = newWord
  })
  return arrWord.join(' ');
}
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"