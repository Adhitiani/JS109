/* <Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Problem:
input: two array
output: an array (union values of the two)

Rules:
- no duplication of values in return array
- the argument always arrays
- output ascending?

Example:
[1, 3, 5], [3, 6, 9] --> [1,3,5,6,9]

Data Structure:
array

Algoritm:
1. create an empty array for the result
2. iterate over the first array: 
   - check if the current element exist in the result array, if not push the current elemtn
   - ignore other wise
3. iterate over the second array:
   - check if the current element exist in the result array, if not push the current elemtn
   - ignore other wise
4. sort the array in ascending order
5. retrun the result array

2nd version:
1. concatenate the two arrays arguments
2. sort the array
3. create an empty array
4. iterate over the array, if the current element is not exist in the new array, push the element
5. return the array




Copy Code> */
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 5], [2, 4, 5])); 

function union(arr1, arr2) {
  let result = [];

  /* let twoArrays = arr1.concat(arr2).sort((a,b) => a - b);
  console.log(twoArrays);
  
  twoArrays.forEach(num => {
    if (num !== result[result.length -1]) {
      result.push(num);
    };
  }) */

  [...arr1,...arr2].forEach(num => {
    if(!result.includes(num)) {
      result.push(num);
    }
  })



  /* 
  twoArrays.forEach(num => {
    if(!result.includes(num)) {
      result.push(num);
    }
  }) */

 /*  arr1.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  arr2.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  }); */

  return result;
}
