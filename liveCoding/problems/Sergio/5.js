/*Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
  
P:
input: an array of string (arrWord)
output: a string

rules:
- concatenate the nth letter from each word
- return the new word
- the n is the position of the word in the list

E:
["yoda", "best", "has"] = yes

D:
input: an array
output: a string

A:
- init 'newWord' to ''
- iterate over 'arrWord'
  - take the char from the current word based on the index
  - concatenated the char to 'newWord'
- end of iteration
- return 'newWord';

*/

function nthChar(arrWord) {
  let newWord = ''
  
  arrWord.forEach((word, idx) => {
    newWord += word[idx];
  })
  
  return newWord;
}

console.log(nthChar(["yoda", "best", "has"]))