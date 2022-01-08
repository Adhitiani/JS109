/* //
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*

Problem:
input: an array of string and a number (integer)
output: string (the first longest string consisting of k concecutive strings taken from the array)

Rules:
- n being the length of the string array:
  - if n = 0 or 
  - k > n or 
  - k <= 0 
  return ""

EXAMPLE:
  ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2
  [4, 7, 5, 4, 4, 3, 5, 7]
  [4 + 7 = 11, 4+5 = 9, 4+4 = 8, 4+4 = 8, 4+3 = 7, 4+5 = 9, 4+ 7 = 11]
  [7 + 5 = 12, 7 + 4 = 11, 11, 10, 12, 7]

Data Structure
input: array and number
output: string

Algoritm:
1. guard clause:
- iterate over the array and determine the length of each element.
- iterate over the array of the length and check each element if: 
  if n = 0 or 
  - k > n or 
  - k <= 0 
  return ""

2. iterate over the array, in each element:
"zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2
  length = [4, 7, 5, 4, 4, 3, 5, 7]
first iteration:
constString = 0;
index = 0
while the index < K;
cons string += string[index];
index = + 1










// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

//2
// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'], 
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.


// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

//1
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

//2
// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'], 
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.


// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

 HyoSung

PROBLEM
- input:
  - array of strings
  - and an integer k
- output: string

Rules
- return the first longest string consisting of k consecutive strings taken from the array
- if length of string array is 0, return empty string
- if integer k is greater than the length of the array, return empty string
- if integer k is less than or equal to 0, return empty string

EXAMPLES
- see below

DATA STRUCTURE
- input array of strings and an integer
- intermediary: get substrings from the array of strings
- output: longest substring

ALGORITHM
- input array of strings and an integer `count` of how many strings to concatenate
- initialize `longestString` to an empty string
- iterate through array
  - initialize `testString` to the value of substrings from the array of length `count`
  - join the array elements to make a string
    - if the the length of `testString` is longer than the length of `longestString`
      - reassign `longestString` to `testString`
- return `longestString` of `count` elements from the array

function longestConsec(array, count) {
  if (array.length === 0 || count > array.length || count <= 0) return '';
  let longestString = '';

  for (let idx = 0; idx < array.length; idx++) {
    let testString = array.slice(idx, idx + count).join('');
    if (testString.length > longestString.length) longestString = testString;
  }

  return longestString;
}


Adhit:
Problem:
input: an array of string and a number (integer)
output: string (the first longest string consisting of k concecutive strings taken from the array)

Rules:
- n being the length of the string array:
  - if n = 0 or 
  - k > n or 
  - k <= 0 
  return ""

EXAMPLE:
  ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2
  [4, 7, 5, 4, 4, 3, 5, 7]
  [4 + 7 = 11, 4+5 = 9, 4+4 = 8, 4+4 = 8, 4+3 = 7, 4+5 = 9, 4+ 7 = 11]
  [7 + 5 = 12, 7 + 4 = 11, 11, 10, 12, 7]

Data Structure
input: array and number
output: string

Algoritm:
1. guard clause:
- iterate over the array and determine the length of each element.
- iterate over the array of the length and check each element if: 
  if n = 0 or 
  - k > n or 
  - k <= 0 
  return ""

2. iterate over the array, in each element:
"zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2
  length = [4, 7, 5, 4, 4, 3, 5, 7]
first iteration:
constString = 0;
index = 0
while the index < K;
cons string += string[index];
index = + 1


Alex
PROBLEM
input: array, integer (slice of that many elements)
output: string

rules:
- if arr.length = 0 or k > array length or k <= 0 return ""
- return concatenation of k consec elements with greatest length

DATA STRUCTURES
input: array, integer (slice of that many elements)
intermediary: array slices joined into strings
output: joined strings

ALGO
input: array, integer
- if arr.length = 0 or k > array length or k <= 0 return ""
- declare empty string `longest`
-iterate through array fom 0 to array length - k
  -assign variable `current` to: a joined slice from index to index + k
  -if current is longer than longest
    longest = current
return longest

function longestConsec(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return ""; 
  let longest = '';
  
  for (let idx = 0; idx <= arr.length - k; idx ++) {
    let current = arr.slice(idx, idx + k).join('');
    //console.log(current);
    if (current.length > longest.length) longest = current;
    console.log(longest)
  }
    return longest;
}
// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true


PROBLEM
input: array of number strings
output: Boolean

rules: 
- elements contain string digits only
- if the sums of the string digits comprising at least 3 elements are divisible by 3 return true, otherwise return false

DATA STRUCTURES:
input: array of number strings
in between: array(each element will be split into arr, coerced to a number, and then reduced to a sum), then another array filtered for those numbers divisible by 3(and then if length of filtered array is greater than 3...)
output: Boolean

ALGO:
-input: arr
- transform array into a new arr in which numstring elements are transformed into sum of their digits(helper function)
-filter this new array for those elements divisible by 3
- return whether length of filtered array is greater than or equal to 3

function threeByThree(arr) {
return arr.map(element => getSum(element)).filter(el => el % 3 === 0).length >= 3;
}  
function getSum (str) {
return str.split('').reduce((sum, num) => sum + Number(num), 0);
}

// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true


 PROBLEM
- input: array of strings
- output: boolean

Rules
- return boolean indicating whether at least three elements in the array have digits whose sum is divisible by 3
- input is only strings of digits 0-9

EXAMPLES
- ['35', '01110', '126', '57', '13'] => [8, 3, 9, 12, 4] => 3 => true

DATA STRUCTURE
- input: array of strings
- intermediary: array (split, map, reduce, length)
- output: boolean

ALGORITHM
- input array of strings
- initialize `count` to 0 to track occurrences of elements divisible by 3
- iterate through elements of array
  - split the string into digits
  - iterate through digits of each element
    - compute the sum of digits in each element
    - if divisible by 3 increment count
- return count
- return true if count >= 3
- return false otherwise 

function threeByThree(array) {
  let count = 0;

  let scores = array.map(string => {
    return string.split('').reduce((sum, digit) => sum + Number(digit), 0);
  })

  scores.forEach(score => {
    if (score % 3 === 0) count += 1;
  })

  if (count >= 3) return true;
  return false;
}


/1
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail",], 2) 
// "abigail theta" => 8 - 2 = 6;  8 - 3 = 5 (array.length - k)

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


//  - input: an array of strings
//  - output: a string 
//  - rule:
//         - return the longest strings made of k substrings 
//         - substrings has to one after another (consecutive)
//         - the return value has to be the first longest string you found


// algo: 
// - find all possible strings of (k substrings)
//  - declare an resultArr to keep all possible strings
//  - interate through all strings inside the input array until (array.length - k)
//  - each time, concatenate (k - 1)  strings after the curruent string 
//  - push it into the resultArr

// - declare a longest empty string
// - iterate through resultArr
// - if (current string's length is longer then longest) 
// - longest = current string
// return the longest */

function longestConsec(array, k) {
   if (array.length  === 0 ||  k > array.length || k<= 0) return "";
   let resultArr = [];
   
   for(let i = 0; i <= array.length - k; i ++) {
      let consecStr = "";
      let counter = 0;
      while (counter < k) {
        consecStr = consecStr + array[i + counter];
        counter ++;
      }
      resultArr.push(consecStr);
   }
   let longest = "";
   for(let i = 0; i < resultArr.length; i++) {
     
     if (resultArr[i].length > longest.length){
       longest = resultArr[i];
     } 
   }
   return longest;
}

// Test Cases
console.log(longestConsec2(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec2(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec2([], 3) === ""); // true
console.log(longestConsec2(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec2(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec2(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec2(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec2(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec2(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "");


function longestConsec(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return ""; 
  let longest = '';
  
  for (let idx = 0; idx <= arr.length - k; idx ++) {
    let current = arr.slice(idx, idx + k).join('');
    if (current.length > longest.length) longest = current;
   
  }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

/* 
// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

*/