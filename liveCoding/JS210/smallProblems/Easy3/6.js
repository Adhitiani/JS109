/*Palindromic Number

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

P:
input: a number
output: boolean

rules
explicit
- return true if the input is palindromic
- return false otherwise
- A palindromic number reads the same forwards and backwards.

implicit
- asume that the input always fositive integer

E:
34543 --6 true
123210 - false

D:
number --> string --> array --> string --> boolean

A:
- convert the number to string
- convert the string to array
- reverse the element in the array
- convert back to the string
- return true if the original string is equal with the reverse string
- return false otherwise


*/

function isPalindromicNumber(num) {
  let str = String(num);
  
  return str === str.split('').reverse().join('');
};

console.log(isPalindromicNumber(34543))
console.log(isPalindromicNumber(123210))
console.log(isPalindromicNumber(22))
console.log(isPalindromicNumber(5))

// not tranform to string

/*
- create a result number and initialized it to 0
- copy the input number
- while the copy number is greater than 0, do:
  - extract the last digit of the copy number
    - the last digit is the reminder of copy number % 10
  - update the result number with the sum of  result * 10 + the last digit number
  - update the remaining number by dividing it with 10 and round it down
- compare the input number with result number
  - if it's equal return true
  - return false otherwise
*/

function isPalindromNum(num) {
  let reverse = 0;
  let reverseNum = num;
  
  while(reverseNum > 0) {
    let last = reverseNum % 10;
    reverse = reverse * 10 + last;
    reverseNum = Math.floor(reverseNum/10); 
  }
  return num === reverse
};

console.log(isPalindromNum(34543))
console.log(isPalindromNum(123210))
console.log(isPalindromNum(22))
console.log(isPalindromNum(5))