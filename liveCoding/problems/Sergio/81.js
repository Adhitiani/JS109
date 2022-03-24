/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/
/*
PROBLEM
input: an array of integers
output: a number
- the only number that is different
different?
- the ornly odd number among even numbers in the array or
- the only even number among odd numbers in the array

rules/question:
- th eintegers can be positive or negative
- assume there are always one number different

EXAMPLE

DATA STRUCTURE
input: an array
array to filter the odd or even number
output: a number

ALGORITHM
- filter the array to only have odd number
- filter the array to only have even number
- return the only element in the array that has length equal to 1
*/

function findOutlier(arr) {
  let even = arr.filter(num => num % 2 === 0);
  let odd = arr.filter(num => num % 2 !== 0);
  if (even.length === 1) return even[0];
  if (odd.length === 1) return odd[0];
}
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)