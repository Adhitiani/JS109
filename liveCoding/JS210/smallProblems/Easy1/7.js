/*Leap Years Part 1

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

Examples:

Copy Code
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

RPOBLEM
input: a number (year)
output: boolean

rules
explicit
- input is always greater than 0
- return true if its a leay year
- return false if its not a leap year
- leap year is:
  - the year is evenly divisible by 400
  - if it's not evely divisible by 100
  - evenly divisible by 4
  
Example:
see above

DATA STRUCTURE
number --> boolean

ALGO
- check if the number is equal or greater than 400
  - return true if it's evenly divisible by 400
  - else return false
- if it's less than 400
  - return true if it's divisible by 4 and not evenly divisble by 100
  - false otherwise
  
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
   return true
  } else {
   return (year % 4 === 0 && year % 100 !== 0);
  }
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