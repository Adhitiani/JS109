/*Running Totals

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

P:
input: an array of numbers
output: an arrays

rules:
explicit
- returns an array with the same number of element
- the element replace by the running total from the original array

implicit
- input empty array return an empty array

E:
[2, 5, 13] --> [2, 7, 20];

D:
array --> array

A:
- create a result array and initialised it to []
- iterate over the array
- for each of the element:
  - if it's the first element push the element to the result array
  - else:
    - add it with the previous element in the result array
    - push the sum to the result array;
- return the new array;  


A: using map
- iterate over the array
- for each element replace it with the current element + the sum of all the element before it
*/

function runningTotal(arr) {
  let result = [];
  
  arr.forEach((num, idx) => {
    if(idx === 0) {
     result.push(num);
    } else {
      result.push(num + result[idx - 1]);
    }
  });
  
  return result;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


/*
A:
- create a result array and initialized to to an empty array
- create a temp sum and initialzed it to 0
- iterate over the array
- for each of element:
  - add it with the temp sum
  push the temp sum to the array
- return the result array  
*/

function runningTotal1(arr) {
  let result = [];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  
  return result;
};



console.log(runningTotal1([2, 5, 13]));             // [2, 7, 20]
runningTotal1([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal1([3]);                    // [3]
runningTotal1([]);                     // []




