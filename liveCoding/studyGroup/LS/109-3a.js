// Problem Description
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

/*
Problem:
  - Looking at each word in the given array, identify the common characters at the beginning of each word & return 
    those common characters
  - If no common characters, return ''
  - words will always be in lower cases.
  - All words must have common characters, partial insufficient, return ''
  
  
Solution
  - Initialize  a  variable named commonChar to ''
  - Loop the first word
      - Concat the current char (or appropriate index of that character) in the first word to commonChar.
  - Iterate through the array & look at each word
      - Compare the currentchar of each word in the array to the current char in the outer array
        If not equal, then return ''
        Else continue
  - return commonChara 
*/

function commonPrefix(arr) {
  let commonChar = '';
  
  for (let i = 0; i < arr[0].length; i++) {
      let currChar = arr[0][i];
      commonChar += currChar;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== currChar) {
        console.log("in");
        return '';
      }
    }
      
    // console.log(commonChar);  
  }
  
  console.log(commonChar);
}

// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true

// Problem Description
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

/*
P:
input: array; an array of string
output: string; the longest COMMON prefix amongst an array of string

rules:
- if there is no common prefix, return ''
- all given input are lowercse letters

E:

D:
input: array; 'arr'
sort()

output: string;

A:
//get the shortest string in the array; 'shortestStr'
  - sort the array in ascending order based on the length
  - the first element in the array is the shortest string:  'shortestStr[0]'


//compare the char in the shortest string with chars in the rest of the string
  - init 'prefix' to ''
  - iterate over 'shortestStr[0]' with index 'idx'
    - init 'currChar' = 'shortestStr[0][idx]'
    - compare the first chart of 'shortestStr[0]' with the rest of string
      - iterate over the 'shortestStr' with index 'jdx' start at index 1
        init currEle = 'shortestStr[jdx]'
         - if  'currChar' is not equal to the first char in the string element 'shortestStr[jdx][0]'
           - return prefix
      - end of iteration
      - concatenated the 'prefix' with current char
  - end of iteration
  - return prefix
*/

function commonPrefix(arr) {
  let shortestStr = arr.sort((a, b) => a.length - b.length);
  let shortest = shortestStr[0];
  
  let prefix = '';
  
  for (let idx = 0; idx < shortest.length; idx++) {
    let currChar = shortest[idx];
    for (let jdx = 1; jdx < shortestStr.length; jdx++) {
      let currEle = shortestStr[jdx];
      if(currChar !== currEle[idx]) {
       return prefix;
      }
    }
    prefix += currChar
  }
  return prefix;
}

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true