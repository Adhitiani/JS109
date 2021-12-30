/* Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Problems:
- input: a string of digit
- output: number as integer

example: '1234' --> 1234

Data Structure:
 input: string
 output: number

Algorithm:
- create a number
- check the string character by character and convert it to its number equivalent
- add the single number to the previous number times 10.
-return the number

Copy Code */

/* function stringToInteger(str) {
  let number = 0;

  for( let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx]

     switch (currentChar) {
      case '1' :
        currentChar = 1;
        break;
        case '2' :
        currentChar = 2;
        break;
        case '3' :
        currentChar = 3;
        break;
        case '4' :
        currentChar = 4;
        break;
        case '5' :
        currentChar = 5;
        break;
        case '6' :
        currentChar = 6;
        break;
        case '7' :
        currentChar = 7;
        break;
        case '8' :
        currentChar = 8;
        break;
        case '9' :
        currentChar = 9;
        break;
        case '0' :
        currentChar = 0;
        break;
    } 
    number = (number * 10) + currentChar;
  }
  return number;
} */

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

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToInteger("4321") * -1);