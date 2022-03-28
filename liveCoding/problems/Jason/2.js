/*You are given a string s. It's a string consist of letters, numbers or symbols.

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

1. get all the posible string, filter it with only string that has unique chars and find the maximum one
2. build a new string start from the first char, if the current char is not exist in the new string concatenated it to the string, if its exist chop the string after the curr char exist first time in the string, remove the first part. keep track with the length
*/

function longestSubstringOf1(str) {
  let longest = 0;
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j <= str.length; j++) {
     let substring = str.slice(i, j)
     if(isUnique(substring)) {
       if(substring.length> longest) longest = substring.length;
     }
    }
  }
  console.log(longest)
}


function longestSubstringOf(str) {
  let longest = 0;
  let substring = ''
  for(let i = 0; i < str.length; i++) {
    if(!substring.includes(str[i])) {
      substring += str[i];
    } else {
     substring = substring.slice(substring.indexOf(str[i]) + 1);
      substring += str[i];
    }
     if(substring.length > longest) longest = substring.length;
    }
   return longest;
  }
  



function isUnique(str) {
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}


console.log(longestSubstringOf("36Hgk:U0->8+$%MZ/o2aOY@DP\\A6uOHIyiX+e)hB~$pgf-/PvGX6OU7_,nqrfh~$.@`aUl)@nb/`G1INqw@djdnpjS0U*ExGi5"))

console.log(longestSubstringOf("abcd"),4,"abcd is the longest substring.")

console.log(longestSubstringOf("hchzvfrkmlnozjk"),11,"chzvfrkmlno is the longest substring.")

console.log(longestSubstringOf("!@#$%^&^%$#@!"),7,"!@#$%^& is the longest substring.")

console.log(longestSubstringOf("abcd".repeat(10000)+"abcde"+"abcd".repeat(10000)),5,"abcde is the longest substring. Don't try to write a brute force solution ;-)")
console.log(isUnique('abc'))