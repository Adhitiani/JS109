/* Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

PROBLEM:
input: an array
output: a nested array
        - first array contain half of the original array
        - second array contain the other half of the original array

Rules:
- if the array contains an odd number of elements place the middle element in the first half of array
- if the array contains one element the other half is an empty array
- empty array return two empty array;

Examples:
[1, 2, 3, 4] --> [[1, 2], [3, 4]]
[1, 5, 2, 4, 3] --> [[1,3,2], [4,3]]
[5] --> [[5],[]] 

DATA STRUCTURE
input: array
output: nested  array

ALGORITM
1. create a result array of an empty array
2. divided the array by 2

3. push first half to the empty array
4. push the second half to the empty array


Copy Code */

/* function halvsies(array) {
 
 let firstHalf = array.slice(0, Math.ceil(array.length / 2));
 let secondHalf = array.slice(Math.round(array.length/2));
 
return[firstHalf, secondHalf];



}; */


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

