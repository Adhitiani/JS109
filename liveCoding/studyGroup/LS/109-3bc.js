// Problem Description
// Write a function to find the longest common suffix string amongst an array of strings.

// If there is no common suffix, return an empty string "".

// Note:
// All given inputs are in lowercase letters a-z.


/*
PROBLEM
input: an array of string
output: string

rules/question:
- return the longest common suffix
- suffix is the affix at the end of word
- all given inputs are in lowercase
- if there is no comon suffix return empty string

EXAMPLE

DATA STRUCTURE
input: an array of string
output: string

ALGORITHM
- sort the array in ascending order
- init 'shortest' to first element of the sorted array
- init suffix to ''
- iterate over shortest
  - slice the shortest strat from the last char - curr index 
  - iterate over sorted array
   - if every word in the array end with the sliced string
     - suffix = sliced string
  - end iteration
- end iteration
- return sliced string

*/

function commonSuffix(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length);
  let shortest = sortedArr[0];
  let suffix = '';
  
  for (let i = 0; i < shortest.length; i++) {
    console.log(shortest.length)
    let currSuffix = shortest.slice(shortest.length - 1 - i);
    if(sortedArr.every(word => word.endsWith(currSuffix))) {
      suffix = currSuffix;
    }
  }
  return suffix;
}


console.log(commonSuffix(["arrival", "burial", "deferral"]) === "al"); // true
console.log(commonSuffix(["boredom", "dominant", "kingdom"])  === ""); // true
console.log(commonSuffix(["relience", "defence", "insistence"])  === "ence"); // true
console.log(commonSuffix(["throne", "dungeon"]) === ""); // true
console.log(commonSuffix([" trainee", " trainee"]) === " trainee"); // true

