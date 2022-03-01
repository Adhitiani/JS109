/* Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Problem:
input: a string
output: boolean
        - true if it's palindrome
        - false if it's not

What is is Palindrome?
- reads the same forwards and backwards
- case matter and all character matters


Examples:
madam --> true
Madam --> false

Data Structure:
- input: string
- output: boolean
array?

Algoritm:
1. convert the string to array
2.  reverse the array and convert back to string.
3.check if the reverse string  is equal to the original string
  -- if it's equal means its palindrome and return true
  -- return false otherwise

Copy Code */
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

/* function isPalindrome(str) {
  let arr = str.split('');
  console.log(str === arr.reverse().join(''));
} */

function isPalindrome(str) {
  let strLength = Math.floor(str.length/2);
 
  for (let index = 0; index < strLength; index += 1) {
    if(str[index] !== str[str.length - 1 - index]) return false;
  }
  return true;
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));