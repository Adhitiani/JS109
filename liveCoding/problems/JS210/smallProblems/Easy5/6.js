/* Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

P:
input: a number
ouput: an array

Rules:
- returns an array containing all integers btween 1 and including the input
- return in ascending order
- the argument is always a positive integer

Example:
5 --> [1, 2, 3, 4, 5]

D:
number --> an array

A:
- create a 'result' an init to an empty array
- iterate n number times where the 'n' is the input argument
- in each iteration push the current number, start from 1
- return result
*/

function sequence(num) {
  let result = [];
  for (let counter = 1; counter <= num; counter++) {
    result.push(counter);
  };
  
  return result
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]