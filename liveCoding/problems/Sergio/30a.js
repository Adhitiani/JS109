/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

A:
- convert the number to separate digits
  - convert number to strings
  - convert strintn to an array of character
  - convert array of char to array of number
- count the of the power of number by its digits
  - iterate over the number
    - for each of number
      - raised it to the power of the array length
  - end iteration
- count the sum of its array  
  - if it's the same as the original number return true
  - return false otherwise  
*/

function narcissistic(value) {
  let arrNum = String(value).split('').map(Number);
  let powerUp = arrNum.map(num => Math.pow(num, arrNum.length));
  let sum = powerUp.reduce((sum, ele) => sum + ele, 0 )
  
  return sum === value;
}

console.log(narcissistic(371))