/*
PROBLEM
input: a string
output: string
- the highest scoring word
- the score based on its position in the alphabet

rules/question:
- If two words score the same, return the word that appears earliest in the original string.
- All letters will be lowercase 
-  all inputs will be valid.

EXAMPLE

DATA STRUCTURE
input: a string
an array to store words
an array to store alphabet
output: string

ALGORITHM
// separate the string into an array of word assign it to 'wordsArr'
// compute each word score
   - init 'letters' to 'abcdefghijklmnopqrstuvwxyz'
   - init score = 0
   - init word = '';
   - iterate over 'wordsArr'
      - init CurrScore = 0
      - iterate over current word
        - find the index of each char
        - add the index + 1 to currScore
      - end iteration
      - if currScore > score
        - score = currScore
        - word = current Word 
   - end iteration
// return the highest score word
- return word
*/
function high(str) {
  let letters  = 'abcdefghijklmnopqrstuvwxyz';
  let wordArr = str.split(' ');
  let score = 0;
  let highestWord = '';

  wordArr.forEach(word => {
    let currScore = 0;
    for ( let i = 0; i < word.length; i++) {
      currScore += letters.indexOf(word[i]) + 1
    }
    if(currScore > score) {
      score = currScore;
      highestWord = word
    }
    currScore = 0
  })
  return highestWord;
}

console.log(high('man i need a taxi up to ubud') == 'taxi');
console.log(high('what time are we climbing up the volcano') == 'volcano');
console.log(high('take me to semynak') == 'semynak');
console.log(high('aaa b') == 'aaa');
console.log(high('what time are we climbing up the valcono volcano') == 'valcono');

/*
//Turn the string into an array of words
// init longest word = ''
// init score = 0
// iterate over the array of words
// helper function sumScore:
   - declare and init 'alphabet' = 'abcdefghijklmnopqrstuvwxyz'
   - for each word:
     - split the word to an array of char
     - iterate over the array of char
        - replace the char with the its index position in alphabet + 1
        - compute the sum of all char and assign it to 'sum'
        ////
        - if the sum is greater than 'score'
          - score = sum
          - longestWord = word
     - end iteration
// end iteration
return longestword
*/

function sumScore(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   return str.split('').map(char => alphabet.indexOf(char) + 1).reduce((sum, ele) => sum + ele, 0);
}

function high(str) {
  let highestWord = '';
  let highestScore = 0;
  let words = str.split(' ');
  
  words.forEach(word => {
    if(sumScore(word) > highestScore) {
      highestScore = sumScore(word);
      highestWord = word;
    }
  })
  return highestWord;
}

console.log(sumScore('abc'))
console.log(high('man i need a taxi up to ubud') == 'taxi');
console.log(high('what time are we climbing up the volcano') == 'volcano');
console.log(high('take me to semynak') == 'semynak');
console.log(high('aaa b') == 'aaa');
console.log(high('what time are we climbing up the valcono volcano') == 'valcono');

/////// using for...of loop

function high(x){
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";
  
  for (let word of words) {
    let lettersSum = 0;
    
    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }
    
    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }
  
  return highestScoreWord;
}

/*
PROBLEM
input: string of words
output: string; the highest scoring words

rules/question:
- the words scoring is according to each letter position in the alphabet
a = 1, b = 2
- return the highest scoring words as string
- if the words score the same return the word that appear earliest
- all letters will be lower case
- all input will be valid --> all will be in string
- assume no empty input


EXAMPLE
'aaa b'

DATA STRUCTURE
input: string
   array; to separate string into  each individual word
output: string

ALGORITHM
// turn the input string to an array of words; 'arrWords'
// compute the point of each words
   - define and init 'alphabet' = 'abcdefghijklmnopqrstuvwxyz'
   - init 'highestScore' = 0
   - iterate over arrWords
   //helper function:
     - for each of word:
       - let currentScore = 0
       - iterate over the letters
         - find it's score --> the index of curr char in the alphabet + 1
         - add the score to currentScore
       - end iteration

       - if currentScore > highestScore then 
           - highestScore = currentScore
       - currentScore = 0    
   - end iteration
   - return highestScore

*/

function wordScore(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let score = 0;
  for ( let char of str) {
   score += alphabet.indexOf(char) + 1
  }
  return score;
}

function high(words) {
  let highestWord = ''
  let highestScore = 0;
  let arrWords = words.split(' ');
  
  arrWords.forEach(word => {
    let currScore = wordScore(word);
    if (currScore > highestScore) {
      highestScore = currScore;
      highestWord = word;
    }
  })
  return highestWord;
}

console.log(high('man i need a taxi up to ubud') == 'taxi');
console.log(high('what time are we climbing up the volcano') == 'volcano');
console.log(high('take me to semynak') == 'semynak');
console.log(high('aaa b') == 'aaa');
console.log(high('what time are we climbing up the valcono volcano') == 'valcono');