// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal

// letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

/*
Problem:
input: string; in lower case letter
output: object; the key is the letter and the value is the number of the letter count

rules:
- key is string, the value is number
- assume that that the outputs key is in ascending order
- assume the input is always valid string

Ex:
see below

Data Structure:
input: string
array to sort the input
output: object

ALgo:
- convert the stirng to an array ; sort the array assign it to 'sortArr'
- declare 'resultObj' to {}
- iterate over the 'sortArr'
  - if the curr char is exist as properties in 'resultObj'
    - increment the value by 1 or add a new properties with the value of 1
- end of iteration
- return the 'resultObj'

*/

function letterCount(str) {
  let sortArr =  [...str].sort();
  let resultObj = {};
  
  for (let i = 0; i < sortArr.length; i++) {
    let currChar = sortArr[i];
    resultObj[currChar] = resultObj[currChar] + 1 || 1;
  }
  
  return resultObj
}

console.log(letterCount("codewars"));//, {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
console.log(letterCount("activity"));//, {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
console.log(letterCount("arithmetics"));//, {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
console.log(letterCount("traveller"));//, {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
console.log(letterCount("daydreamer"));//, {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});

