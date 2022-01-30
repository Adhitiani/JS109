// You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases
/*




PROBLEM
input: an array of string, a number
output: a string

Rules:
- return the first longest string consisting of k number of string from array
- if the length of array is 0 or 
- the number input is greater than the array length, or
-  the number input <= 0
  return " "

EXAMPLE
["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"
"zone", "abigail" index: 0 - 1
"abigail", "theta", index 1 - 2
"theta", "form", index 2 - 3
"form", "libe", index 3 - 4
"libe", "zas", index 4 - 5
"zas", "theta", index 5 - 6
"theta", "abigail", index 6 - 7

at index 7, we stop? 

["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"


  "it","wkppv","ixoyx"  index 0 - 2
  "wkppv","ixoyx", "3452" index 1 - 3
  "ixoyx", "3452", "zzzzzzzzzzzz" 2 - 4
  
Data Structure:
array --> string

[ant , bear, cat].forEach(elem => {
  // loop over the string (looping over each character in the string)
      // a, n, t
})

[ 'zone', 'abigail' ] - What do you do with this array??? 
[ 'abigail', 'theta' ]
.... 
[ 'abigail' ] - we don't want this array, so we're going ignore, or do nothing, stop looping

ALGO:
1. create an empty string
2. create an empty array
3. get the possible substring from the array
   - iterate over the array. in each iteration (for each element aka string):
     - extract the element the same number as the input number.
       - slice the element start from 0 index until the same length as the given argument. 
       - concatenated the element and push it in an array
       - if the element is less than the given argument stop the looping.
     - do this until the last element   

What are we doing? In simple English, 
4. Target - Get the longest string. 
   - reassign the empty string to the first element of the array
   - iterate over the array, start from the second element
   - for each of the element, compare the length with the string result
     - if it's greater than the string result reassign the result with the element
   - return the result   



result array = []

longest string=  abigailtheta",

return this string. 


*/

function longestConsec(array, num) {
  
  let result = '';
  let arrResult = [];
  
  for (let i = 0; i <= (array.length - num); i++) {
    let arrSubstring = array.slice(i, i + num);
    let str = ''
    arrSubstring.forEach(element => str += element);
    arrResult.push(str);
  }
  
  arrResult.forEach(str => {
    if (str.length > result.length) result = str;
  })
 
  return result;

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === 'abigailtheta');
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true