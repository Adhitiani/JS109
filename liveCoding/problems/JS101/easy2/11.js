/* Convert a Number to a String!

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


Problem: 
- convert number to a a string
example: 1234 --> '1234'
Data Structure:
input number
output: string
array?

Algoritm:
1. split the number into one digit
2. put it in an array of number
3. join to convert it to string






Examples:
-

Copy Code */

/* function integerToString(num) {
  let arrNum = [];
  
  if(num === 0) {
    arrNum.push(num);
  };


 while(num > 0) {
   arrNum.push(num % 10);
   num = Math.floor(num/10);
   
 }

 return arrNum.reverse().join('');

} */

function integerToString(num) {
  const STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  let str = '';

   do {
    let reminder = num % 10;
    num = Math.floor(num / 10);
    str = STRING[reminder] + str;
  } while (num > 0)
  
  return str;
  
  
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"