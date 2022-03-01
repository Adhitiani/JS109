/*Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

P
input: a number
output: a number

rules:
ex
- return  the number in the reversed digits

E:
12345 --> 54321

5
0 * 0 + 5 = 5
12345 - 5 / 10
1234

D:
number --> number

A.
- create a result number and initialized it with 0
- do the iteration while the input number is bigger than 0
- in each of iteration:
  - compute the reminder of dividing the input number by 10
  - update the result number by adding up the result of multiplying the current result number with the reminder
  - update the input number by extract it with the reminder and dividing it by 10
- return the result number  

*/

function reverseNumber(num) {
  let result = 0;
  let reminder;
  
  for (let i = 0; num > 0; i++) {
    reminder = num % 10;
    result = (result * 10) + reminder;
    num = (num - reminder) / 10;
  }
   return result;
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

// using array method

function reverseNumber1(num) {
  return Number(String(num).split('').reverse().join(''));
}


reverseNumber1(12345);    // 54321
reverseNumber1(12213);    // 31221
reverseNumber1(456);      // 654
console.log(reverseNumber1(12000));    // 21 -- Note that zeros get dropped!
reverseNumber1(1);        // 1