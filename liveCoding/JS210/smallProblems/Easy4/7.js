/*Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

A:
- iterate over the first array
- in each iteration:
  - replace the element by multiplies the element of array 1 and array 2 with the same index position
- return the new array
*/

function multiplyList(arr1, arr2) {
  let newArr = arr1.map((num, idx) => num * arr2[idx]);
  
  return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]



