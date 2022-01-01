/* Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Examples:

Copy Code */

//reverseNumber(12345);    // 54321
//reverseNumber(12213);    // 31221
reverseNumber(201);      // 654
//reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
//reverseNumber(1);        // 1

function reverseNumber(num) {
  let strArrReverse = String(num).split('').reverse();
  let noZero = strArrReverse.filter((char, idx) => (char !== '0') && (char[idx + 1] !== '0'));
  console.log(noZero);
}