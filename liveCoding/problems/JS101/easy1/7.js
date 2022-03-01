// Short Long Short

// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// Examples:

// Copy Code


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

/* 
Problem:
- a function takes 2 string arguments
- find the length of the 2 strings
- concatenating short string + longer string + short string

input: two string
output: a string (short + long + short)

example
'abc', 'defgh' --> 'abcdefghabc'
'abcdef', 'gh' --> 'ghabcdefgh'
'', xyz --> 'xyz'

Data Structure :
 string

 input : stirng
 output : string

 Algoritm:

 1. determine the length of the two string
 2. compare the length:
    - if arg1 < arg2 --> arg1 + arg2 + arg1
    - if arg2 < arg1 --> arg2 + arg1 + arg2
 3. return the concatinated string
 

*/

function shortLongShort(str1, str2) {


   if(str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  };
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));