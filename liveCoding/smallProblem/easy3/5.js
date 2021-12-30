/* Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.


Problem:
Input: a positive number 
output: a triangle star
-- has the same row as the input
-- every row has the same length of char with the input
-- the first row has one start on the right
-- the second row has two star and so on
-- the last row has the same star as the input

Examples:
3 -->
   *
  **
 ***

 Data Structure: 
 input: Number
 output: string

 Algoritm:
 1. creating the row n time
 2. in each row:
 n = 5
 -- 1 row, 1 star , 4 spacen // space = n - 1 // start = n -( n - 1)
 -- 2 row, 2 star, 3 scapse  // space = n - 2 // star = n - (n -2)
 -- 3 row, 3 star, 2 spaces
 -- 4 row, 4 star, 1 spaces
 -- 5 row, 5 star, 0 spaces

Copy Code
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
********* */

function triangle(num) {
  let counter = 1;
  while (num > 0) {
    console.log(' '.repeat(num - 1) + '*'.repeat(counter));
    counter += 1
    num -= 1;
  }
};

triangle(5);
triangle(9);
