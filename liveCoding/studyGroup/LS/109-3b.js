// You are given an array of strings and an integer k.
// Your task is to return the first longest string consisting of k
// consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Test Cases


/*
Input:  an array of strings and an integer


Output:  a string

Examples/Edge Cases/Rules
longestConsec([], 3) === ""); // true
["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""

Algorithm
- if input num is longer than our array length return ""
- if input num < 1 return ""
- create an output string ""
iterate over the strings in the array - input num
  set currentstring to ''
  loop from out current outer loop index to our current outer loop index + input num
    concat each elm to our currentstring
    if the length of our currentstring > our output string
      then reassign our output string to currentstring
  
return outputstring

*/

function longestConsec(arr, num) {
  let result = '';
  if (arr.length < num) {
    return result;
  }
  if (num < 1) {
    return result;
  }
  for (let idx = 0; idx <= arr.length - num; idx += 1) {
    let currentString = '';
    for (let i = 0; i < num; i += 1) {
      currentString += arr[idx+i];
    }
    // console.log(currentString);
    if (currentString.length > result.length) {
      result = currentString;
    }
  }
  // console.log(result);
  return result;
}






console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true