/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

P:
input: two strings
       - original string
       - should be the last part of the string
output: boolean

rules:
- return true if the original string ends with the 2nd arguments
- return false otherwise

A:
- reverse both of the string
  - convert both of the string to an array of char
  - reverse the char
  - convert back to the string
  - assign the two reverse string to reverse' and reverse2
- iterate over the 'reverse 2'
  - if the current char is not the same as the char in the same position at 'reverse 1' return false
- end of iteration
- return true;

*/

function solution(str, endStr) {
  let reverseStr = str.split('').reverse().join('');
  let reverseEnd = endStr.split('').reverse().join('');
  
  for (let i = 0; i < reverseEnd.length; i++) {
    if(reverseEnd[i] !== reverseStr[i]) return false;
  }
 return true;
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))