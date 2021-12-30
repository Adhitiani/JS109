/* Convert a Number to a String!

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


Problem:
Input: number
output: string

Example:
1234 --> '1234'

Data structure:
input: number
output: string
array?

Algoritm
1. get the number digit by digit
- get the last number by using the reminder % of 10 and the reminder is the last digit of the number
- to chop the last digit divided it by ten and round it up to the lower number
- repeat this action until the number is 0
2. take one digit number and convert it to the string equivalent 
   - we can put it the number in the array reverse and join
   - we can unhsift the array and put it in the empty string
3. concatenated all the char

Examples:

Copy Code */

/* function integerToString(num) {
  if(num === 0) return 0;
  
  let arrNum = [];
  
  
  while (num > 0) {
    let number = num % 10;
    arrNum.push(number);
    num = Math.floor(num / 10);
  }

    let str = arrNum.reverse().join('');
  
    return str;
  
} */


/* function integerToString(num) {
  let string = '';
  let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  if(num < 10) return DIGITS[num];

  while (num > 0) {
    let digit = num % 10;
    string = DIGITS[digit] + string;
    num = Math.floor(num /10);
  };
 return string;

}  */


function integerToString(num) {
  if (num === 0) return '0';
  let arr = []

  while (num > 0) {
    let digit = num % 10;
    arr.unshift(digit);
    num = Math.floor(num /10);
  }

  return arr.join('');
}


console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(50000));
console.log(integerToString(123456789));
console.log(integerToString(1))
