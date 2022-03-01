/* How long are you?

Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

PROBLEM:
input: a string
output: an array

Rules:
- returns an array that contain: 
  - every word from the string
  - each word followed by a space and the words's length
  - input is an empty string or no argument passed return an empty array

  EXAMPLE:
  'cow sheep chicken' --> ['cow 3', 'sheep 5', 'chicken 7'];

  DATA STRUCTURE
  input: string
  output: an array
  an array iteration method
  string interpolation

  ALGHORITM:
  1. guard clause: if the string length < 1 return '[];
  2. split the string to an array of word
  3. iterate over the array. For each of the word:
     - determine the length of the word
     - return a string `word word.length'
  4. return the array   

Copy Code */

function wordLengths(string = '') {
  if(string.length < 1) return [];

  let arrOfWord = string.split(' ');
  return arrOfWord.map(word => {
    return `${word} ${word.length}`;
  });
};


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []