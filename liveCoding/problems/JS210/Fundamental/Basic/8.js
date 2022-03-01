/*Convert a String to a Signed Number

The previous exercise mimics the parseInt function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

ALGO
signed:
The result is the return value of calling the stringToInteger()
check if the string start with the signed
- if it's start with -
  - remove the - sign 
  - multiple the result by -1
  
- if it's start with + 
  - remove the + sign
  - return the result
  
- if it's doesn't start with anything return the result

*/

function stringToInteger(cleanStr) {
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  cleanStr = cleanStr.split('');
  let result = 0;
  
 cleanStr.forEach(char => {
    result = (10 * result) + arrNum[char]
  });
  
  return result;
};



function stringToSignedInteger(str) {
  if(str.startsWith('-')) {
     return stringToInteger(str.slice(1)) * -1;
     } else if (str.startsWith('+')) {
     return stringToInteger(str.slice(1));   
     } else {
       return stringToInteger(str);
     }
};



console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100

//NOTE
// Slice method is a method for both array and string

