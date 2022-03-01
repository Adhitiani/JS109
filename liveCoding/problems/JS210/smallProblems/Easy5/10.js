/*Reverse It Part 2

Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

P:
input: string
output: a new string

rules:
- return all five or more letter words should be in reversed order
- the word will be separated by a single space

Example
see below

D
string --> array --> string

A:
- create an empty array
- convert the string to an array of word
- iterate over the array
- in each iteration
  - if the currentword length greater or equal to 5:
    - convert it to an array of char
    - reverse the order
    - convert back to a string
    - push it to the array
  - else
    - push the current word to the array
- convert the array to a string of word
- return the string
    

*/

function reverseWords(sentence) {
  let result = [];
  let wordsArr = sentence.split(' ');
  //console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length >= 5) {
      result.push(wordsArr[i].split('').reverse().join(''));
    } else {
      result.push(wordsArr[i]);
    }
  }
 return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

