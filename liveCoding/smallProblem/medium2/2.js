/*Triangle Sides

A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

PROBLEM:
input: 3 numbers (the length of the 3 sides of a triangle)
output a string.

Rules.
- return Equilateral: All three sides are of equal length.
- return Isosceles: Two sides are of equal length, while the third is different.
- return Scalene: All three sides are of different lengths.
- return invalid if:
  - the sum of the lengths of the two shortest sides is NOT greater than the length of the longest side
  - at least one side is < 1
  
EXAMPLE:
see below

DATA STRUCTURE
numbers --> string
array

ALGO:
1. convert the number to an array of number
2. Find total of the 3 numbers
3. Find the highest number
4. find the shorter number
5. find the middle number
7. check the validity of the triangle
   - if one of the 3 number is less than one, or
   - If the longest is less than the sum of the middle and short length
   return invalid
8. check the 3 numbers
   - if all three sides are equal return Equilateral
   - if two numbers are equal and the third is diffrent return Isosceles
   - if all three are different return Scalene
*/

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3]
  let sum = num1 + num2 + num3
  let longest = Math.max(...arr);
  let shortest = Math.min(...arr);
  let middle = sum - longest - shortest
  
  if(arr.some(num => num < 1) || shortest + middle < longest) return 'invalid';
  
  if(num1 === num2 && num1 === num3) return 'equilateral';
  if(num1 === num2 && num1 !== num3) return  "isosceles";
  if((num1 !== num2 && num1 !== num3) && num2 !== num3) return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"