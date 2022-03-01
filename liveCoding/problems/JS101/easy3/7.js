/* Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

Copy Code */


/* 
Problem:
Input: a number
Output: a number --> - multiply by 2 if its not a double number
                     - as it it is if it's a double number
- double number?
-- an even-length number 
-- left-side digits are exactly the same as its right-side digits.
-- example: 44, 3333, 103103

Example:
1. 334433 --> even length, 334 - 443 not a double number multiply by 2 --> 668866
2. 444 --> not an even length number -- multiply by 2 --> 888
3. 103103 ---> even length, 103 - 103 double number, return as it is --> 103103

Data structur:
input: number
output: number

Algoritm1:
1. Determine the length of the number
2. Check the length of the number:
   -- If it's odd , multiply the number with 2, return the number

   -- If it's even, check if it's double number
   ---- double number:
   ------ divide the string number by 2
   ------ check if they are identical 

   --- if it's double number return the number
   --- if it's not: return the number multipy by 2
 
Algortim2:
1. divided the number by 2
  -- convert it to string, determine the length and divided by 2
2. check if the half is equal with the other half
 -- if it's equal , return number
 -- if it's not, return the number multiply by 2


*/

/* function twice(num) {
  let length = String(num).length;
  let stringNum = String(num);
  if (length % 2 !== 0) return num * 2;
  if (length % 2 === 0)  {
    if (stringNum.slice(0, stringNum.length / 2) === stringNum.slice(stringNum.length / 2)) {
      return num;
    } else {
      return num * 2;
    }
  }
} */

function twice(num) {
  let midPoint = Math.floor(String(num).length / 2);
  let right = String(num).slice(0, midPoint);
  let left = String(num).slice(midPoint);

  return right === left? num : num * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
