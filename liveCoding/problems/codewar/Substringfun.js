//Substring funComplete the function that takes an array of words.
/*
You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
  
 P:
 input: an array of string
 ouput: a string
 
 rules:
 - return a string that resulting from the nth letter from each element. The letter is the same position as the element index position on the array
 
 Example:
 see above
 
 D:
 an array --> string
 
 A:
 - create a result and init to an empty string
 - iterate over the arrayof word
   - in each iteration, extract the letter on the current index position
   - push the letter to the result
 - return the result string  
  
*/  

function nthChar(words) {
  let result ='';
  
  words.forEach((word, idx) => result += word[idx]);
  return result;

}

let words = ["yoda", "best", "has"];

console.log(nthChar(words))