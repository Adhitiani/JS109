/* Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

PROBLEM:
input: two arrays of numbers
output: an array contain each pair of numbers from the arguments that have the same index;

Rule:
- the argument contain the same number of elements

EXAMPLE:
[3, 5, 7], [9, 10, 11] --> 3x9 = 27, 5 x10 = 50, 7x11 = 77 --> [27, 50, 77];

DATA STRUCTURE
input: arrays
output: an array

Algoritm:
1. create an empty array
2. iterate over the first array, in each iteration:
   - multiply the current element with the element of the second array with the same index
   - push the result to the result array
3. return the result array    

Copy Code */

//forEach

function multiplyList(arr1, arr2) {
  let result = [];

  arr1.forEach((num, idx) => {
    result.push(num * arr2[idx]);
  })

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

//map

function multiplyList2(arr1, arr2) {
  
  return arr1.map((num, idx) => {
    return num * arr2[idx];
  })
};

console.log(multiplyList2([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// reduce

function multiplyList3(arr1, arr2) {
  return arr1.reduce((result, value, idx) => {
     result.push(value * arr2[idx]);
     return result;
  }, []);
}

console.log(multiplyList3([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
