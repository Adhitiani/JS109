/*Task

You are given a string s. It's a string consist of letters, numbers or symbols.

Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

Note

1 <= s.length <= 10^7

5 fixed testcases

100 random testcases, testing for correctness of solution

100 random testcases, testing for performance of code

All inputs are valid.

Pay attention to code performance.

If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

Example

For s="baacab", the output should be 3.

The non repeating substrings in s are:

"b","c","a","ba","ac","ca","ab","cab"
The longest one is "cab", its length is 3.

For s="abcd", the output should be 4.

The longest one is "abcd", its length is 4.

For s="!@#$%^&^%$#@!", the output should be 7.

The longest substring are "!@#$%^&" and "&^%$#@!", their length both are 7.

- init longest = ''
- get all the substring
  -iterate over the stirng in outer loop with index = i
    - iterate over the string in inner loop with index = i + 1
     - in each iteration get the substirng:
       - slice the string from i to i + 1
       - check the current substring if all char is unique --> Helper Funciton 
         - if char is unique compare it with the length of longest
           - if curr substring length is greater than longest
             - longest = current substring
    - end iteration
  - end iteration
- return longest

check if substring has all chars unique
- convert substring to an array of characters
- iterate over the array of characters
  - filter the char that has no duplicate
- end iteration
- return the array in string form
*/

function noDuplicate(str) {
  let arrChar = str.split('');
  return arrChar.filter((char, index, arr) => arr.indexOf(char) === index).join('')
}

function longestSubstringOf1(str) {
  if(noDuplicate(str) === str) return str.length;
  let longest = 0;
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      if(noDuplicate(substring) === substring) {
        if(substring.length > longest) longest = substring.length;
      }
    }
  }
  return longest;
}

//console.log(noDuplicate("hchzvfrkmlnozjk"))

//console.log(longestSubstringOf("abcd"),4,"abcd is the longest substring.")

console.log(longestSubstringOf("hchzvfrkmlnozjk"),11,"chzvfrkmlno is the longest substring.")

//console.log(longestSubstringOf("!@#$%^&^%$#@!"),7,"!@#$%^& is the longest substring.")

//console.log(longestSubstringOf("abcd".repeat(10000)+"abcde"+"abcd".repeat(10000)),5,"abcde is the longest substring. Don't try to write a brute force solution ;-)")


// build a new string where the char from input string is add one by one
// if the char is already in the new string slice the new string right after the first char appear --> remove chars from the start char of the string until the duplicate char appear the first time in the string, leaving the string only has the chars with only unique chars.
function longestSubstringOf(str) {
  let max = 0;
  let temp = '';
  for (let char of str) {
    console.log(`current char is ${char}`)
    let tempIdx = temp.indexOf(char);
    temp += char;
    console.log(`temp is ${temp}`)
    console.log(`temp index is ${tempIdx}`)
  
    if (tempIdx >= 0) temp = temp.slice(tempIdx+1);
    console.log((`temp after slicing is ${temp}`))
    if (max < temp.length) max = temp.length;
  }
  return max;
}