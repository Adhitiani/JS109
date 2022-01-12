/* Capitalize Words

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

PROBLEM:
input: a string
output: a string with the first char of word capitalized

rules:
- return the first chacter of every word capitalized
- word is any sequence of non-whitespace

EXAMPLE:
'four score and seven' --> Four Score And Seven'

DATA STRUCTURE
string --> string
array

ALGhoritm:
1. split the string to an array of word
2. iterate over the array, for each of the word:
   - take the first character of word, capitalized 
   - concatenated with the rest of the character
3. convert back the array to the string
4. return the string   


Copy Code */

function wordCap(string) {
  let words = string.split(' ');
  let capArr = words.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
   return capArr.join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
