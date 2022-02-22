/*The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

fib number [1, 1, 2, 3, 5] = F[n] = f[n-1] + f[n -2]

// create an array and init to [0, 1]
// do the iteration while argument is less or equal than the argument
// strat at  idex 2
array[i] = array[i -1] + array[i -2]
// push the current sum
// return the element on the last index
 
*/ 

function fib(num) {
  let fibArr = [0, 1];
  
  for (let i = 2 ; i <= num; i++) {
    let currFibNum = fibArr[i - 1] + fibArr[i - 2]
    fibArr.push(currFibNum)
  }
  
  return fibArr[num]
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(11));
console.log(fib(12));
console.log(fib(13));
console.log(fib(14));
console.log(fib(15));
console.log(fib(16));
console.log(fib(1000));

/*
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

*/
