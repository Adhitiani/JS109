/*


Swap Case

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:

Copy Code

A.
- create an empty string 'result'
- itearte over the string
- for each of char:
  - if the char === toLowerCase() concatenated the 'result' with char.toUpperCase()
  - if the char === toUpperCase() concatenated the 'result' with char.toLowerCase()
  - else concatenated with char as is
- return the result  
  
*/

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (currChar === currChar.toLowerCase()) {
      result += currChar.toUpperCase();
    } else if (currChar === currChar.toUpperCase()) {
      result += currChar.toLowerCase();
    } else {
      result += currChar;
    }
  }
   return result;
}
console.log(swapCase('CamelCase') === "cAMELcASE")
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv")

