/*Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

P
input: an array
output: a nested array --> an array that contain two array elements

rules:
ex:
- rturn an array that contains two elements each of which is an array
- the first half array in the first subarray and the second half in the second subarray
- if the input array contain odd number of element, place the middle element in the first subarray

im:
- if the input element is only one, the second sub array is an empty array
- if the input is an empty array, the output is two empty sub array

E:
[1, 5, 2, 4, 3] --> [[1, 5, 2], [4, 3]]
length = 5

D:
array --> array

A:
- create an emtpy array
- check the length of the array
  - if it's odd:
    - extract the element from 0 index until the index result of dividing the length by 2
    - extract the element from the index of the result of dividing the length by 2
    - push both the array to the result array
  - if it's even
    - extract the element from 0 index untill the index result of dividing the length by 2 + 1
    - extract the element from the index of dividing the length by 2
    - push both the array to the result array
- return the result array    

*/

function halvsies(arr) {
  let result = [];
  if(arr.length % 2 === 0) {
   let subArray1 = arr.slice(0, arr.length/ 2);
   let subArray2 = arr.slice(arr.length /2);
   result.push(subArray1, subArray2);
  } else {
     let subArray1 = arr.slice(0, (arr.length + 1)/ 2);
     let subArray2 = arr.slice((arr.length + 1) /2);
     result.push(subArray1, subArray2);
  };
  return result;
};


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/*Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.


A:

- extract the first subarray
  - compute the half number of the length and round it up incase it is an odd number
  - extract the element from the o index to the half of the length round it up
- extract the second subarray
  - compute the half number of the length and round it up incase it is an odd number
  - extract the element start from the number of half of the length
- push both the subArray to the result array

*/

function halvsies(arr) {

  let right = arr.slice(Math.ceil(arr.length/2));
  let left = arr.slice(0, Math.ceil(arr.length/2));
 
  return [left, right];
  
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]