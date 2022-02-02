/*Palindromic Strings Part 2

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

A:
clean the str
- create an empty str
- iterate over the string
- in each iteration:
  - check if the char is alphabet:
    - if so, concatenated with the empty string
    - If not, do nothing
- return the result string    


function isRealPalindrome(str) {
  let cleanStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if ((str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') || '1234567890'.includes(str[i])) {
      cleanStr += str[i];
    };
  };
  return isPalindrome(cleanStr);
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

*/

function alpanumOnly(str) {
  return str.split('')
            .filter(char => (char.toLowerCase() >= 'a' && char.toLowerCase() >= 'a') || (char >= '0' && char <= '9'))
            .join('');
};

console.log(isPalindrome(alpanumOnly("Madam, I'm Adam")));