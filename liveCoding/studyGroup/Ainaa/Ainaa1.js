/*

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


Input: two string arguments
Ouput: boolean
      -- true if both string are anagram to each other
      - false otherwise

What is anagram? An anagram is the result of rearranging the letters of a word to produce a new word // the string to be an anagram to each other they have to have the same characters.

Rules:
- anagrams are case insensitive

Example:

foefet (f, f, o, e, e, t) --> toffee (f,f, o, e, e, t)
"Twoo" (T, w, o,o)  "WooT" ( T, w, o, o);

Data Structure:
Input: string
output: Boolean
Array

Test Your Algorithm
---- 

two and twoo 

array of strings = ['t', 'w', 'o'] (based on the shortest word)

Iterating through string: twoo

Iteration 1 - current character 't'

't' is included in array? 

't' compare with array
 ['t', 'w', 'o'] 
result - true - get rid of 't' from the array, somehow

'w' compare with array
['w', 'o']
result - true - get rid of 'w' from the array, somehow

'o' compare with array
['o']
result - true - get rid of 'o' from the array, somehow

'o' compare with empty array
[]
result? = false (return false , exit the function altogether)

"dumble", "bumble"

b
['d', 'l', 'e']
return false 

"ound", "round"
['o', 'u', 'n', 'd']

r o u n d
['o', 'u', 'n', 'd']
return false 

"abc", "xyz"

Algoritm
// check first if both string has the same length, if not return false
1. convert one of the string to an array
2. check one character of the string if it's exist in the array, if it's not return false
3. if it's exist then take out the character from the array.
-- use indexOf to check if the char exist
-- take out the char using the splice.
4. repeat untill the array length is 0.
5. If the next char is compare with an empty array, the function return false.

two, twoo ??? what happens in your algorithm? 

1. check first if both string has the same length, if not return false
2. converting both string to lowercase 
3. splitting str1 into an array of characters
4. iterating over string2, for each character (in the array of characters)
  - if the character doesn't exist (index === -1) 
    - then return false 
  - else (the character exists)
    - then splice out the current character from the array of characters (using the index)
5. return true (if the array is empty)
  (if the array is not empty???? is it possible to get an array that is not empty at the end? )

    

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  let array = str1.split('');
 
  for (let index = 0; index < str2.length; index += 1) {
    
    if (array.indexOf(str2[index]) === -1) {      
      return false;
    } else {
      array.splice(array.indexOf(str2[index]), 1);  
    }
  
  }
  
  return true;

}

// Algorithm 

// lowercase both strings and sort the characters
// compare the sorted strings
//  - if they are the same, they are anagrams, return true
//    -if they are, they are not anagrams , return false 

function isAnagram2(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

// splice
// slice
// sort
// forEach, map, fiter
// for loop 
// LowerCase, UpperCase
// replace

Small Problems - understand really well and memorize how to do it. 

// leading substring - https://launchschool.com/exercises/50f14ae3
// all substring or all subarrays - https://launchschool.com/exercises/381f7129

'abc' 

a, ab, abc
b, bc
c

[1, 2, 3, 4]

1, 12, 123, 1234
2, 23, 234
3, 34, 
4

once you get all substring, you have to do something with them? 
  
count the number of substrings 


https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript
solution('aa_bb_cc_dd_bb_e', 'bb') => 2 because 'bb' substrings appear twice in the string. 

find all the substrings
a, aa, aa_, aa_b, aa_bb ...

then you can count how many bb are inside the substrings. 


console.log(isAnagram2("foefet", "toffee")) //=== true);
console.log(isAnagram2("Buckethead", "DeathCubeK")) //=== true);
console.log(isAnagram2("Twoo", "WooT")) // === true);

console.log(isAnagram2("dumble", "bumble") === false);
console.log(isAnagram2("ound", "round") === false);
console.log(isAnagram2("apple", "pale") === false);

*/

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

/*
Problem:
input: two strings
output: boolean
        - return true if the two strings are anagram
        - return false otherwise
question:
- What is anagram?
  - An anagram is the result of rearranging the letters of a word to produce a new word
  - The two strings has to have the same characters for anagram

Rule:
- anagram are case insensitive

Example:
"foefet", "toffee" --> f,f, o, t, e, e
"dumble", "bumble" --> d, b false

Data Structure:
Input: strings
output: boolean
array?

Algoritm
1. check if the length of the two strings are the same
   - if not return false
2. convert the strings to lower case
3. convert the strings to arrays
"foefet", "toffee" --> [f, o, e,f, e, t], [t, o, f, f, e, e]
3. iterate over the array1 and check if the current element of array 1 is include in the array 2. If it's not include return false
[f, o, e,f, e, t], [t, o, f, f, e, e]
f --> [t, o, f, f, e, e]
o --> [t, o, f, f, e, e]

4. return true 
*/

function isAnagram2(str1, str2) {
 if(str1.length !== str2.length) return false;

 let arr1 = str1.toLowerCase().split('');
 let arr2 = str2.toLowerCase().split('');

 for(let index = 0; index < arr1.length; index += 1) {
  if(!arr2.includes(arr1[index])) return false;
 }
 
 return true;

}

console.log(isAnagram2("dumble", "bumble") === false);


console.log(isAnagram2("foefet", "toffee")) //=== true);
console.log(isAnagram2("Buckethead", "DeathCubeK")) //=== true);
console.log(isAnagram2("Twoo", "WooT")) // === true);


console.log(isAnagram2("ound", "round") === false);
console.log(isAnagram2("apple", "pale") === false);

/*

Alghoritm:
1. check if the length of the arrays are equal
   - if not return false
2. convert the strings to lower case
3. convert the strings to arrays
4. sort the array
5. convert back to string
6. compare the string
   - if it's equal return true
   - return false otherwise
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  
  let sortedStr1 = str1.toLowerCase().split('').sort().join('');
  let sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2;

};

console.log(isAnagram("dumble", "bumble") === false);


console.log(isAnagram("foefet", "toffee")) //=== true);
console.log(isAnagram("Buckethead", "DeathCubeK")) //=== true);
console.log(isAnagram("Twoo", "WooT")) // === true);


console.log(isAnagram("ound", "round") === false);
console.log(isAnagram("apple", "pale") === false);
