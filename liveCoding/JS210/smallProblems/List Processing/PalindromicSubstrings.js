/*Palindromic Substrings

Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

P: 
input: a string
output: an array of a substring that are palindromic

rules:
- each substring must be the same sequence of cahr forward and backward
- the substring is sorted by their order of appearance in the string
- Duplicate substrings should be included multiple times.
- consider all character
- single characters are not palindrome
- if there is no palindrome substring return an empty array



E:
'madam' --> madam, ada
m
ma
mad
mada
madam
a
ad
ada
da
adam
d
da
dam
a
am
m

D:
string --> array

A:
// get all the possible substring from the string
// assign them to an array called 'subString' :
  - init 'subString' to an empty array
  - iterate over the outer loop
    - iterate over the inner loop
    - for each of iteration:
      - slice the array from current outerloop index to inner loop index ( outerloop idx + 1)
      - push the substring to 'subString'
  

//get all the polindrome substring and assign it to 'result':
  - init 'result' to an empty array
  - iterate over the 'subString':
  - for each of substring:
  - if the substring.length > 1:
    - check if the current substring = reverse substring
      reverse substring --> convert the susbtsting to an array of char, reverse the order, convert back to a string
    - if it's equal push the substring to 'result'  

- return 'result'



palindromes('abcd');       // []

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

*/

function palindromes(str) {
  let substring = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i, j));
    }
  }
  
  let result = []
  for (let i = 0; i < substring.length; i++) {
    if(substring[i].length > 1) {
     if(isPalindrome(substring[i])) {
       result.push(substring[i]);
     }
    }
  }
  return result
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
};

console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('abcd'));       // []

console.log(palindromes('hello-madam-did-madam-goodbye'));
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
};


function palindromes(str) {
  let substring = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i, j));
    }
  }
  
  let palindrome = []
  for (let i = 0; i < substring.length; i++) {
    if(substring[i].length > 1) {
     if(isPalindrome(substring[i])) {
       palindrome.push(substring[i]);
     }
    
    }
  }
  
 if (palindrome.length === 0) return 0;
  
  return palindrome.sort((a,b) => b.length - a.length)[0].length
}

// filter

function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
};


function palindromes(str) {
  let substring = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i, j));
    }
  }
  
  let palindrome = substring.filter(isPalindrome);
  console.log(palindrome);
}




