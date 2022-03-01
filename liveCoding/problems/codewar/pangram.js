/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

A:
create a string of alphabet, 'alpha'
iterate over the 'alpha'
 in each iteration:
  - if the current alpha is not include in the given string return false
- return true  
 
*/

function isPangram1(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < alpha.length; i++) {
   if (!str.toLowerCase().includes(alpha[i])) return false;
  }
  return true;
}

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(sentence));

//using every

function isPangram(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  return alpha.every(char => str.toLowerCase().includes(char));
  
  
}

