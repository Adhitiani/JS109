/* Leap Years (Part 1)

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Examples:
Problem:
input: number
Output: boolean ( true if leap year, false if it is not)

What is leap year?
-  divisible by 4 ( year % 4 === 0)
- not divisible by 100 (year % 100 === 1)
- evenly divisible by 400 (year % 400 === 0)

example 
2016 % 400 === 1
2016 % 100 === 1
2016 % 4 === 0 

2016 true

2015 % 400 === 1
2015 % 100 === 1
2015 % 4 === 1

algoritm:
1. check if the number divisible by 400
 - if yes return true.
 - if not:
 2. check if the number is not divisible 100 and divisible by 4
  - if yes return true
  else return false
 */

  function isLeapYear(year) {
   if (year < 1752) {
      return (year % 4);
   } else {
      return (year % 400 === 0) || 
   (year % 100 !== 0 && year % 4 === 0) 
   };
};

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));

