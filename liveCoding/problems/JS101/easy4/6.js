/* Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

Algortim
1. convert the number to string
2. convert the string to an array
3. reverse the array
4. convert to string
5. compare if the original string is equal to the reverse string.

Copy Code */
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

function isPalindromicNumber(num) {
  let str = String(num);
  let strReverse = str.split('').reverse().join('');
  return str === strReverse;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
