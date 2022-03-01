/* Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:
Algoritm:
1. convert the string to lowerCase and to array
2. filter only the alphanumeric character
- isAplhanumeric?
  - if it's greater than or equal `a` and less or equal to `z` or  greater to and equal to 0 and less than or equal to 9.

3.convert the array to string
4.reverse the array and convert back to string.
4.check if the reverse string  is equal to the original string
  -- if it's equal means its palindrome and return true
  -- return false otherwise

Copy Code */


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');             // falseą


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isAplhanumeric(char) {
  return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
}

function isRealPalindrome(str) {
  let arr = str.toLowerCase().split('');
  let alphaNum = arr.filter(char => isAplhanumeric(char)).join('');
  return isPalindrome(alphaNum);
};

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));