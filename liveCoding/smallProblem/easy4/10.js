/* Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

PROBLEM:
input: a string (words separated by spaces)
output: a string (swaps the first and last letters of every word)

Rule:
The input is:
- every words contains at least one letter
- the string always contain at least one word
- each string contains nothing but words and spaces
- no repetead spaces

Example:
'Oh what a wonderful day it is' --> hO thaw a londerfuw yad ti si

Data Structure:
input: string
output: string
array

Algoritm:
1. convert the string to an array of words (a sequnce divided by space)
'Oh what a wonderful day it is' --> [Oh, what, a, wonderful, day, it, is]
2. create a result Array --> []
3. iterate over the outer array:
   - create a newString ---> '';
   - on each word, swap the first char with the last, the last with the first
    first char = word[word.length - 1];
    last char = word[0];
   - slice the first and the last word
   - concatenated the new first char + slice middle word + the new last char
   - re-assigned the newString with the new word
   - push the newString to the result array
4. retrun the result array that has been converted to string. 

1. convert the string to an array of words
2. swap the last letter of the word with the first letter, vice versa:
   - if the word is only on char, return the char otherwise:
     - first char = word[word.length - 1];
     - middleChar = word.slice(1, -1)
    - last cChar = word[0];
   return  first char + middlechar + last char
3. iterate over the array and replace each word with the swap word
4. convert the result array to string
5. return the string   
*/

function swap(str) {
  if(str.length === 1) return str;
  let arrayOfWords = str.split(' ');
  let swapArr = [];

  for (let index = 0; index < arrayOfWords.length; index += 1) {
    let currentWord = arrayOfWords[index];
    let firstChar = currentWord[currentWord.length -1];
    let lastChar = currentWord[0];
    let middleWord = currentWord.slice(0, currentWord.length -1).slice(1);
    
    let swapString = '';
    if(currentWord.length === 1) {
        swapString = currentWord;
    } else {
      swapString = firstChar + middleWord + lastChar;
    };

    swapArr.push(swapString);
    
  }
  return swapArr.join(' ');
}

function swapTheLetter(word) {
  if(word.length <= 1) return word;
  let firstChar = word[word.length -1];
  let middleChars = word.slice(1, -1);
  let lastChar = word[0];

  return firstChar + middleChars + lastChar;

}

function mapSwap(str) {
  let arrWords = str.split(' ');
  return arrWords.map(word => swapTheLetter(word)).join(' ');
};


console.log(mapSwap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(mapSwap('Abcde') === "ebcdA");
console.log(mapSwap('a') ===  "a" );
console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a') ===  "a" );
