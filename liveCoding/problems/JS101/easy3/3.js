/* Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.



Problem:
input: a positive integer (always a positive integer)
output: a string of '1' and '0' with the same length as the integer

Examples:
 6 --> "101010"
 9 --> "101010101"

 Data structure
 input: number
 output: string

 Algorithm:
 1. add a string '1' alternating with '0' untill the length is the same as the input
 2. 

Copy Code */

function stringy(num) {
  let string = '';
  

    while (num > 0) {
      string += '1';
      num -= 1

      while (num > 0) {
        string += '0';
        num -= 1;
        break;
      }
    }
    return string
  };
  


console.log(stringy(6) === "101010");    
console.log(stringy(9) === "101010101");    // 
console.log(stringy(4) === "1010");    // 
console.log(stringy(7) === "1010101");    // 