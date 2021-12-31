/* Array Average

Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

Examples:

PROBLEM:
input: an array of integer
output: a number ( the average of all intgers rounded down)

EXAMPLE:

ALGORITM
1. sum all the integer in the array
  - create a total number initialized it to 0
  - iterate over the array; in each iteration, reassign the total number with the sum of the total with the elemnt
2. determine the average
3. return the round number of the average

Copy Code */

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

function average(array) {
  let sum = 0;
  array.forEach(num => sum += num);
  return Math.floor(sum /array.length);
}

// reduce

function average2(array) {
  return Math.floor(array.reduce((acc, curr) => acc + curr) / array.length);
}

console.log(average2([1, 5, 87, 45, 8, 8]));       // 25
console.log(average2([9, 47, 23, 95, 16, 52]));    // 40