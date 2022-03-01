/*Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

A:
- create an empty array to hold the result
- iterate n number of time, where the n is the length of the arr1 or arr2 (they have the same length)
- for each of iteration:
  - push the elements in the current index of array 1 and array 2 to the result array
- return the result array  

*/

function interleave(arr1, arr2) {
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  };
  
  return result;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

