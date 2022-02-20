/*Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

A:
- create 'words' and init to an array of the numbers in english:
numberWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
- init a 'arrResult' to an empty array
- convert the string to an array of words
- iterate over the array of words
- for each of word:
  - if the word is end with '.':
    - take out the '.'
      - reassign the word to slice the word from 0 - str.length - 1
      - check if it's include in number word
        - if it is push the index of the word in 'numberWord' and '.'
  - else 
      - if it's include in 'numberWord':
        - push the index of the word in 'numberWord'
      - else push the word
      
- return 'arrResult.join(' ');  


*/
console.log(wordToDigit('Please call me at fivelim five five one two three four. Thanks.')) 

function wordToDigit1(str) {
  let numberWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  let arrResult = [];
  let arrWords = str.split(' ');
  
  for (let i = 0; i < arrWords.length; i++) {
    let currWord = arrWords[i];
    
    if(currWord.endsWith('.')) {
      currWord = currWord.slice(0, currWord.length -1);
      if (numberWord.includes(currWord)) {
          arrResult.push(`${numberWord.indexOf(currWord)}.`);
          } else {
            arrResult.push(`${currWord}.`);
          }
    } else {
      if (numberWord.includes(currWord)) {
          arrResult.push(numberWord.indexOf(currWord));
          } else {
            arrResult.push(currWord);
          }
    }
  }
  
  return arrResult.join(' ');
}

// using map
/*
arrOfWord
- iterate over the array of word
- for each of word:
  - iterate over the numberWord
  - if the current word is equal to any number of word
    - return the index of the word in numberWord
  else:
    - check if the number of Word element include in the word

*/


function wordToDigit(string){
  let toReplace = ['zero',  'one',  'two',  'three',  'four',  'five',  'six',  'seven',  'eight',  'nine'];
  toReplace.forEach((element, index) => string = string.replaceAll(element,index));
  
  return string
}