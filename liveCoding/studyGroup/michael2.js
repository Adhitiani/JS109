/* Reverse Only Letters - LeetCode: https://leetcode.com/problems/reverse-only-letters/

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!" 

  PROBLEM:
  input: string
  outptu: string; letters are reversed, non alph letters remain 
  in same position

  rules: 
  all strings
  reverse all chars keep all non chars in same position

  EXAMLPE:
  "ab-cd" => "dc-ba"
  "a-bC-dEf-ghIj" => "j-Ih-gfE-dCba"

DATA: 
  input: string
  regex;
  array result, 
  output: string, letters are reversed, non alph letters remain 
  in same position

ALGO:
  define the function reverseOnlyLetters string para
    -define valStrArr macth val char regex 
          ---reverse all those chars
    -init stringArr split single char;
  -iterate through stringArr
    if the char is not included in the valStrArr
    - put the non alph char into valStrArr;
  return valStrArr;
*/

function reverseOnlyLetters(string){
  let valStrArr = string.match(/[a-zA-Z]/g).reverse();
  let stringArr = string.split('');

  for(let idx = 0; idx < stringArr.length; idx++){
    if(!valStrArr.includes(stringArr[idx])){
      valStrArr.splice(idx, 0, stringArr[idx])
    }
  }
  return valStrArr.join('')
}

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); //
