/* Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

PROBLEM:
input: two arrays
output: an array which each element taken in alternation

Rules:
- both array are non empty
- they have the same numbers of element

Example:
[1, 2, 3], ['a', 'b', 'c'] --> 1, a, 2, b, 3,c

Algoritm:
1. create a result array
2. iterate over the first array, in each itration
   - push the element fo the first array to the result array
   - push the second element of the second array to the result array

3. return the result array


Copy Code
 */
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


function interleave(arr1, arr2) {
  let resultArray = [];
  
  /* for(let index = 0; index < arr1.length; index += 1) {
    resultArray.push(arr1[index], arr2[index]); */

    arr1.forEach((_, idx) => {
      resultArray.push(arr1[idx], arr2[idx]);
   
  });

  return resultArray;

 
};