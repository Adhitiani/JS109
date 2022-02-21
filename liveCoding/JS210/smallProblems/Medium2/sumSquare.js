/*Sum Square - Square Sum

Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

P:
input: a number
output: a number

rules:
- return the diffrenece between:
  - the square of the sum of integer between 1 to the input number inclusive
  - the sum of the square of the integer between 1 to the input number inclusive

A:
//get the square of the sum:
  - init the 'sum' to 0
  - iterate over the number from 1 to the input number
  - in each iteration:
    - increment the 'sum' with the number
  - init the 'squareOfSum' to 'sum' ** 2  

//get the sum of the square:
  - init the 'sumOfSquare'
  - iterate over the num from 1 to the input number
  - in each iteration:
    increment 'sumSquare' by curr num ** 2
  

// return the difference
   - return 'squareOfSum' - 'sumOfSquare';
 
*/


function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquare(num);
};


function squareOfSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum ** 2;
}

function sumOfSquare(num) {
  let sumSquare = 0;
  for (let i = 1; i <= num; i++) {
    sumSquare += i ** 2
  }
  return sumSquare;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

function sumSquareDifference1(number) {
  let digits = [...Array(number + 1).keys()];


}