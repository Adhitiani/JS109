/*Lettercase Counter

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

Problem
input: a string
output: object

rules:
- return an oject that containing three properties
  - lower case letters
  - uppercase letter
  - nither
- an empty space is count as characters  
  
EXAMPLE:
'abCdef 123' --> LC 5, UP 1, neither 4

DATA STRUCTURE
input: a sting
output: object
array?

ALGORITM
1. create an object that has key lowercase, uppercase, neither with all othem has 0 as a value
2. iterate over the string, for each of the cahracet chec
   - if it's lowercase, increament the lowercase value to 1
   - if its uppercase, increment the uppwer case value to 1
   - else increment neither key to 0
3. return the object


*/

function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  
  for (let index = 0; index < string.length; index ++) {
    if (string[index] >= 'a' && string[index] <= 'z') {
      obj.lowercase += 1;
    } else if (string[index] >= 'A' && string[index] <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    };
  };
  
  return obj;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }