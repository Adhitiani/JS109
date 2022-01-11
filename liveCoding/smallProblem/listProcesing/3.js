/*Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

PROBLEM:
input: two arrays (contain list of numbers)
output: a new array

Rule:
- return a new array
  - contain the products of all combinations of number pairs that exist between the two array
  - sorted in ascending numerical order
- input will not be an empty array

EXAMPLE:
[2, 4], [4, 3, 1, 2] -->
2 x 4, 2 x 3, 2 x 1, 2 x 2 --> 8, 6, 2, 4
4 x 4, 4 x 3, 4 x 1, 4 x 2 --> 16, 12, 4, 8
--> 2, 4, 4, 6, 8, 8, 12, 16

ALGORITHM:
1. create an empty array
2. iterate over the first array, for each of element:
   iterate over the second argument, for each of element of second array:
    - multiply it with the element of the first argument 
    - push the result of each of element to the result array
3. sort the result array
4. return the result array


*/

//console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(num => {
    arr2.forEach(num2 => result.push(num * num2));
  });
  
 return result.sort((a,b) => a -b);
               
};

// 
/*
AGORITHM:
1. create a result array and determined the length
   - the length is the multpy of the length of the first array with the lenght of the second array
2. create a base index of 0 to determine where to place the new value
3. iterate over the first array
   - in each iteration
     - iterate over the second array:
       - in each iteration:
         - multiply the first array element with the second element
         - assign the result to the result array
         - increament the index by 1
4. sort the result
5. return the result            

*/

function multiplyAllPairs2(arr1, arr2) {
  let result = new Array(arr1.length * arr2.length);

  let index = 0;
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result[index] = num1 * num2;
      index += 1;
    })
  })
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// determine the lenght of the new array
//Alghoritm
//1. create an empty array with the length of the result of multiplying the arr1 with arr 2
// 2. iterate over arr1, in each iteration:
      // - iterate over arr2, for each element:
         // multiply it by arr1 current element and assign the result to the empty array at the current index location

function multiplyAllPairs3(arr1, arr2) {
  let result = new Array(arr1.length * arr2.length);
  let idx = 0;
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result[idx] = num2 * num1;
      idx += 1;
    });
  });
  console.log(result);
};         

console.log(multiplyAllPairs3([2, 4], [4, 3, 1, 2])); 
