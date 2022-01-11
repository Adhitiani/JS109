/* Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

PROBLEM:
input: a string
output: an array

Rules:
- return alist of all palindromic substrings
- palindromic is a sequence of charc that reads the same forward and backward
- the returned list should be sorted by their order of appearance
- duplicate substrings should be included multiple times
- if there is no substringn palindrom returns an empty array
- the string can be more than one words

EXAMPLE:
'madam' --> [m, ma, mad, mada, madam, a, ad, ada, adam, d, da, dam, a, am, m] ==> [madam, ada]

DATA STRUCTURE:
string - array

ALGHORITM:
1. create an empty array
2. check if the string has an empty space char:
   - if there is, split the string by the empty string to an array. 
3. get all the substring from the string and put it in an array
4. iterate over the array of substring and check if the substring is palindrom.
   - if it's palindrom, push it to the result array
5. return the result array 

3. get the substring:
  - create an empty array
  - iterate over the string, in each iteration
    - get the leading substring and iterate over the leading substring
     - in each iteration, get the substring of the leading substring which is push the characters concatenated with the previous character

4. isPalindrom
  - split the substring to an array of characters
  - reverse the array and convert baack to a string
  - if the string equeal with the reverse string then it's palindrome.   

Examples:

Copy Code
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ] */

function isPalindrom(string) {
  if(string.length <= 1) return false; 
  let reverseStr = string.split('').reverse().join('');
  return string === reverseStr;
};


function substring(string) {
  let substring = [];

  for (let index1 = 0; index1 < string.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 <= string.length; index2 += 1) {
      substring = substring.concat(string.slice(index1, index2));
    };
  };
  return substring;
}

function palindromes(string) {
  let result = [];
  let arrSubString = substring(string);
  arrSubString.forEach(substring => isPalindrom(substring)? result.push(substring) : result);
  return result;
};


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]