/*
Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:

Copy Code
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

P:
input: two arrays of numbers
output: a new array

rules:
- return the products of all combinations of number pairs tht exist between two arrays

E:
[2, 4], [4, 3, 1, 2]
24 23 21 22
44 43 41 42
8, 6, 2, 4, 16, 12, 4, 8
2, 4, 4, 6, 8, 8, 12, 16

D
array --> array

A:
- get all the number combination and  compute the product of all the combination:
  - declare a 'result' and init to an empty array
  - iterate over the first array
  - for each of first array element:
    - iterate over the second array
    - in each of iteration:
      - multiply the current element of the first array with each of the second array element
      - push the result to 'result'
      
- return the product of all combination in ascending order
  - sorted the result in ascending order

*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr1[i] * arr2[j]);
    }
  }
 return result.sort((a, b) => a - b)
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

