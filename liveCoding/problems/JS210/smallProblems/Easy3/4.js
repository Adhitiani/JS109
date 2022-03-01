/*Palindromic Strings Part 1

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

P:
input: a string
output: a boolean

rules
explicit
- return true if the given string is palindrome
- return false otherwise
- palindrom reaads the same forwards and backwards
- case matters and all characters matter

E:
'madam' --> true
'Madam' --> false, case matters

D:
string --> an array --> boolean

A:
- convert the string to an array
- reverse the array
- convert back to the string
- compare it with the original string:
  - return true if they are equal
  - return false otherwise

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


*/

function isPalindrome(str) {
  let arrReverse = str.split('').reverse();
  let reverseStr = arrReverse.join('')
  
  return str.toLowerCase() === reverseStr.toLowerCase();
}

