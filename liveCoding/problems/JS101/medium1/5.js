/*Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

PROBLEM
input: a string
output: a string with the english word convert to digit number

Rules
- return the string with every occurence of a number word converted to its coresponding digit

EXAMPLE:
see below

Data structure
string --> string
 
array

ALGO
1. convert the string to an array of words
2. create an array of english word in order from zero to 9
3. iterate over the array of words. For each word:
   - find the index of that word in the array of engslih word
   - replace the word with the string index of that word
4. conver the array back to string and return the string   



*/

function wordToDigit(str) {
  let numWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let words = str.split(' ');
  
  let wordDigit = words.map(word => {
    
    
    return numWord.indexOf(word) > -1? word = String(numWord.indexOf(word)) : word;
  });
  
 return wordDigit.join(' ')
                            
}

function wordToDigit1(sentence) {
  let numberWords = {
    0: 'zero', 
    1: 'one', 
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight', 
    9: 'nine' 
  };

  for (let number in numberWords) {
    sentence = sentence.replaceAll(numberWords[number], number)
  }
  return sentence;
}

console.log(wordToDigit1('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*Word to Digit

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Problem:
input: a string
ouput: a string (every number word replace by its digit characters)

EXAMPLE:
see below

DATA STRUCTURE
input: string
output: string


ALGO
1. create an array of english word, starting from zero
2. replace the word in the string with the matching index of the word
3. return the string

*/

function wordToDigit(str) {
  let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  arr.forEach((word, idx) => {
   str = str.replaceAll(arr[idx], idx)
  });
  
  console.log(str);
  
}
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

