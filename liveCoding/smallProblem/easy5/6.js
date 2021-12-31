/* Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

PROBLEMS:
input: an array of integers
output: a string the result of:
        - multiplies the integers
        - divided the result by the length of array
        - return a string og the valu rounded to 3 decimals

Rules / Question:
empty array return empty string?
input is always integer        

Examples:
3, 5 --> 3 x 5 = 15
15 / 2 = 7.5
"7.500"

DATA STRUCTURE
input: array
output: string
toFIxed for 3 decimals

ALGORITM:
1. multiply all the integers
create the result number initialized it to 1.
iterate over the array, in each iteration
multiply the result number with each element.
2. divides it by the length of the array
3. convert it to string with 3 decimal
Copy Code */

function multiplicativeAverage(array) {
  /* let sumMultiply = 1;

  for (let index = 0; index < array.length; index += 1) {
    sumMultiply *= array[index];
  } */

  // reduce

  let sum = array.reduce((acc, curr) => acc * curr, 1);
  
  let average = sum / array.length;
  
  return average.toFixed(3);


}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"