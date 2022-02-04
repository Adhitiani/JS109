/*Array Average

Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

A
- compute the sum of all element
- compute the average by dividing up the sum with the length of the array
- return the result in rounded down to the integer component

*/

function average(arr) {
  let result = arr.reduce((sum, num) => sum + num) / arr.length;
 return parseInt(result);
 }
 
 console.log(average([1, 5, 87, 45, 8, 8]));       // 25
 console.log(average([9, 47, 23, 95, 16, 52]));    // 40