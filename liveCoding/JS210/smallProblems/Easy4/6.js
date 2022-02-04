/*Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.


P:
input: an array
output: a string

rules:
ex:
- multiples all the element in the array
- divides the result by the array length
- return the result as string with three decimal places

E:
3, 5 = (3*5) / 2 = 7.5 -- "7.500"

D:
array --> string

A:
- find the sum of multiplicaiton of all the element
- divide it by the array length
- convert it to string with 3 decimal value
*/

function showMultiplicativeAverage(arr) {
  let average = arr.reduce((acc, curr) => acc * curr, 1) / arr.length;
  
  return average.toFixed(3);

}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// with for loop

function showMultiplicativeAverage1(arr) {
 let multiplies = 1;
  
  for (let i = 0; i < arr.length; i++) {
    multiplies *= arr[i];
  };
  
 return (multiplies / arr.length).toFixed(3);

}

console.log(showMultiplicativeAverage1([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage1([2, 5, 7, 11, 13, 17]));    // "28361.667"



