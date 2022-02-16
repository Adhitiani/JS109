/*Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

A:
- declare variable 'result' and init to an empty array
- iterate over the string
- in each iteration:
  - slice the string from index 0 to current idx + 0
  - push the sliced element to result
- return 'result'  
*/

function leadingSubstrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(0, i + 1));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Example:

Copy Code

- create a new array
iterate over the string
for each of element:
 - call the leading substring function (get all the leading substring)
 - push it in the new array
- flat the new array to one level
- return the new array

*/
function substrings(str) {
  let substring = [];
  
  for (let i = 0; i < str.length; i++) {
    let currentString = str.slice(i);
    substring.push(leadingSubstrings(currentString));
  };
  
 return substring.flat();
  
}

console.log(substrings('abcde'));


