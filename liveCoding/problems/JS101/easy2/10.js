/* Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

Examples

Copy Code */

function stringToInteger(str) {
  const DIGITS = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
  }

  let digit = str.split('').map(char => DIGITS[char]);
  let number = 0;
  digit.forEach(num => number = (number * 10) + num);

  return number;

}



function stringToSignedInteger (str) { 
  if (str[0] === '-') {
    return stringToInteger(str.slice(1)) * - 1;
  } else  if(str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
