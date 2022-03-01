/*Convert a String to a Number

For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

Problem:
input: a string
output: a number

ALGO
- create a 'result' and intialized it to 0;
- create an object as a lookup table to convert each of string digit to a digit number.
- find the appropriate number for the string
  - create an empty array to hold the number
  - iterate over the string.
  - for each of character check the matching value, push the value to the array
- Turn the numbers to their appropriate digit
  - iterate over the array of number.
  - for each of iteration, ressign the 'result' with the sum of 10 multiple by the current result and the current number
- return the result number

*/

console.log(stringToInteger('570'));       // 570

function stringToInteger(str) {
  let result = 0;
  let obj = {};
  
  for (let i = 0; i <= 9; i++) {
    obj[i] = i;
  };
  
  let arrNum = [];
  for (let i = 0; i < str.length; i++) {
    arrNum.push(obj[str[i]]);
  };
  arrNum.forEach(num => {
    result *= (10 * result) + num;
  });
  
  return result;
}

// Note:
// remember!
// - how to create an object loop up for number
// - how to create a matching value in the object


function stringToInteger1(str) {
 let obj = {};
  
  for (let i = 0; i <= 9; i++) {
    obj[i] = i;
  };
  
  let result = 0
  let arrStr = str.split('');
  
  arrStr.forEach(num =>{
    result = (10 * result) + obj[num];
  });
  
  return result
}


console.log(stringToInteger1('4321'));      // 4321