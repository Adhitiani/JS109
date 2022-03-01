//Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

/*
PROBLEM
input: a number
output a number






*/

function sumSquareDifference(num) {
  let sum = 0
 for (let counter = 1; counter <= num; counter ++) {
    sum += counter;
 }
  let sumSquare = sum * sum;
  let square = 0;
  for (let counter = 1; counter <= num; counter ++) {
   square += counter * counter;
  }
  
  return sumSquare - square
};


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

