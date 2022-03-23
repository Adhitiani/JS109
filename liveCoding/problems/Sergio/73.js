/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.

*/
/*
PROBLEM
input: 2 arrays
- arr1 is an array of substring
- arr2 is an array of string
output: an array
- the elements are the elements of array 2 that are substring of the string elements in arr1
- the array is sorted in lexicographical order? aplhabetical order?

rules/question:
- return [] if there are no elements match. 
- the substring can be in any place
- no duplicate value in output

EXAMPLE
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
["live", "strong" ]

DATA STRUCTURE
input: array
output: array

ALGORITHM
- init 'result' to []
- iterate over a1
  - for each of ai element
    - iterate over a2
      - if the current char of a1 is include in current char of a2
        - push the currChar of a1 to 'result'
    - end iteration
- end iteration
- filter the result with no duplicates elements
- return the filtered result sorted in alphabetical order

*/

function inArray1(arrSubstrings, arrStrings) {
  let result = [];
  arrSubstrings.forEach(substring => {
    arrStrings.forEach(string => {
      if (string.includes(substring)) {
        result.push(substring);
      }
    })
  })
  return result.filter((str,idx) => result.indexOf(str) === idx).sort();
}
let a2;
let a1;
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])

// using filter and some
// filter the element of a1 that is included in element of a2

function inArray(a1, a2) {
  let result = a1.filter(substring => a2.some(string => string.includes(substring)))
  return result.sort();
}



