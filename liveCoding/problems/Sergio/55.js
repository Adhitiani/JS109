/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
  */
 /*

PROBLEM
input: string; string of words
output: string
- every letter is replaced by its position in the alphabet

rules/question:
- ignore other char that is not a letter
- assume that it is case insensitive. 'a' === 'A'

EXAMPLE

DATA STRUCTURE
input: string
  array to separate letter only
output: string

ALGORITHM
- turn the words to lowercase
- turn the string to an array of char; 'arrChar'
- filter only the char that is letter
  - init 'letterOnly' to the filtered letter
- find the position of each char in the alphabet
  - init alphabet = 'abcdefghijklmnopqrstuvwxyz'
  - iterate over the letterOnly
    - replace the char with the index postion of char in the alphabet + 1
  - end iteration
- convert letterOnly to string
- return the string

*/
function alphabetPosition(words){
  words = words.toLowerCase();
  let arrChar = words.split('');
  let letterOnly = arrChar.filter(char => char.toLowerCase() !== char.toUpperCase())
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  letterOnly = letterOnly.map(letter => {
   return letter = alphabet.indexOf(letter) + 1;
  })
 return letterOnly.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight.") === "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");