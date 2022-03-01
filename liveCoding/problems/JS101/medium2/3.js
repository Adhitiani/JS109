/*Tri-Angles

A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

PROBLEM:
input: 3 numbers
output: string

rules:
Explicit
- return 'Right' if one angle is exactly 90
- return 'Acute' if all three angles are < 90
- return  'Obtuse' if one angle is > 90
- return 'invalid' if:
  - the sum is not 180 or
  - there is at least one that is < 1
  
EXAMPLE:
see below

DATA STRUCTURE
number --> string
array

ALGO:
1. check the validity of the triangle
  - if the sum is not 180 or at least one of the angle is < 1 return 'invalid'
2. if one angle is equal to 90 return 'right'
3. if all three angle < 90 returns Acute
4. if one angle is > 90 return obtuse
*/

function triangle(num1, num2, num3) {
  if ((num1 + num2 + num3) !== 180 || [num1,num2,num3].some(num => num < 1)) return 'invalid';
  
  if ([num1,num2,num3].some(num => num === 90)) return 'Right';
  if ([num1,num2,num3].every(num => num < 90)) return 'Acute';
  if ([num1,num2,num3].some(num => num > 90)) return 'Obtuse';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"