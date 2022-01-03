/* Sequence Count

Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

PROBLEM:
input: two integers (count, starting number)
output: array ( has the same length as the count, the element is a multiple of the starting number)

Rules:
- the argument is an integer >= 0
- the count is 0 it return an empty array array length = 0

EXAMPLE:
5, 1 --> 5 is the array length, 5 elements
     --> 1 is the starting number
1, 2, 3, 4, 5
1 x 1, 1 x 2, 1 x 3
0, 1, 2, 3, 4
starting point * idx + 1

ALGORITM:
1. create an empty array
2. use iteration method:
   - starting number is the second argument
   - multiply it by the idx +1
   - push the result to the array
   - stop the loop when the element numbers is the same as the limit
3. return the array

Examples:

Copy Code
*/
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // [] 

function sequence(limit, startNumber) {
  let array = [];

  for (let index = 1; index <= limit; index ++) {
    array.push(startNumber * index);
  }
  return array;
}