/*
Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

Copy Code
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

PROBLEM
input: two strings
Output: a string

rules:
Explicit
- return the result of concatenating short string + long string + short string
- the strings are always different length

EXAMPLE
'abc', 'defgh'
short = abc
long defgh
abcdefghabc

DATA STRUCTURE
string --> string

ALGO
- determine the length of the two strings
- compare the length, determine which one is shorter which one is longer
- return shorter + longer + shorter
*/

function shortLongShort(str1, str2) {
  return str1.length > str2.length? str2 + str1 + str2 : str1 + str2 + str1 
};

console.log(shortLongShort('abc', 'defgh'))
console.log(shortLongShort('abcde', 'fgh'))
console.log(shortLongShort('', 'xyz'))

/// array destructive

function shortLongShort1(str1, str2) {
  let [short, long] = str1.length<str2.length? [str1, str2] : [str2, str1];
  return short + long + short;
}

console.log(shortLongShort1('abc', 'defgh'))
console.log(shortLongShort1('abcde', 'fgh'))
console.log(shortLongShort1('', 'xyz'))