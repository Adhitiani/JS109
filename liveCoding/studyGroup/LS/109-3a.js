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
//console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
//console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
//console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
//console.log(commonPrefix(["throne", "throne"]) === "throne"); // true