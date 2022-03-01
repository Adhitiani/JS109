/*Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

Copy Code
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

PROBLEM
input: a number
output: a number

rules
expicit:
- return the sum of all numbers between 1 and the given number inclusively
- the number that are summed only that are multiple of 3 or 5
- the input is always an integer greater than 1

EXAMPLE
5 -> 3 + 5 = 8
10 --> 3 + 5 + 6 + 9 + 10 = 33

DATA STRUCTURE
number --> number

ALGO
- create a result and intialized it to 0
- iterate over the number from 1 to the given input number
- for each of number:
  - if it's divisible by 3 or 5 add it to the reuslt number
- return the result number  

*/

function multisum(input) {
  let result = 0;
   
   for (let number = 1; number <= input; number++) {
     if (number % 3 === 0 || number % 5 === 0) result += number;
   };  
   return result;
 };
 
 console.log(multisum(3));       // 3
 console.log(multisum(5));       // 8
 console.log(multisum(10));      // 33
 console.log(multisum(1000));    // 234168