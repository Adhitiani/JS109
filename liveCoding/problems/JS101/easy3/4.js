/* Fibonacci Number Location By Length

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

JavaScript's normal Number type can represent integers accurate up to the value of Number.MAX_SAFE_INTEGER, which is the 16-digit value 9007199254740991. Any integer larger than that value loses accuracy. For instance, the following code outputs 1, not 2 as you may expect:

Copy Code
console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);
We'll be working with much larger numbers in this problem. Fortuanately, JavaScript now supports a BigInt type that lets you work with massive integers, limited only by the amount of memory available to your program, and the time you can devote to waiting for an answer.

To use BigInt integers in your solution, simply append the letter n to any numbers you use in your solution: 1n, 1234567890123456789012345678901234567890n, and so on. JavaScript will take care of the rest.

Problem:
input: a number
output: index of the first Fb number that has the number digit the same as the input.


Examples:
1. create a fibonici number
- fibonici number series are the number that is the result of adding the number itself with the previous number. [0, 1]

currentNum = 1n
prevNum = 0
nextNum = (currentNum + prevNum) 0 + 1n = 1n
counter = 1;

2. check if the current num length is the same as the input, if not repeat

currentNum = nextNum; // 1n
prevNum = currentNum; // 1n
nextNum = 1n + 1n = 2n
counter +=1


3. return counter


2. check if the number has the same digit as the input- 
To check how many digit are a number:
- while the number is > 10, do:
-- divided by 10, and round it up
-- add the counter digit by 1
-- repeat the process untill the last number is less than 10
-- return the digit
3. if its the same return the index number
4, if not repeat step 1 and 2.



1 digit ---> 1 * 10
2 digit ---> 10
3 digit ---> 100
3. if its return the index
4. if not repeat step 1

 */
function digit(num) {
let counter = 1;

while (num > 10) {
  num = Math.floor(num / 10)
  counter += 1;
}
return counter;
}

/* function findFibonacciIndexByLength(number) {
  let fibArr = [ 1n, 1n];
  let index = 1;
  
  while(BigInt(String(fibArr[index]).length) < number) {
    fibArr.push(fibArr[index] + fibArr[index-1])
    index += 1
  }

  return BigInt(fibArr.length);
  


}; */



function findFibonacciIndexByLength(number) {

}



/* function fibonacci(element) {
  const sequence = [0, 1];
  for (i = 2; i <= element; i++) {
      sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence[element];
}
*/

/* 1. create a fibonici number
- fibonici number series are the number that is the result of adding the number itself with the previous number. [0, 1]

currentNum = 1n
prevNum = 0
nextNum = (currentNum + prevNum) 0 + 1n = 1n
counter = 1;

2. check if the current num length is the same as the input, if not repeat

currentNum = nextNum; // 1n
prevNum = currentNum; // 1n
nextNum = 1n + 1n = 2n
counter +=1 */

function findFibonacciIndexByLength(digit) {
  let currNum = 1n;
  let prevNum = 0n;
  let counter = 1 // 2

  while (BigInt(String(currNum).length) < digit) {
    let nextNum = currNum + prevNum; // 1n + 0n = 1n // 2n
    prevNum = currNum;
    currNum = nextNum; 
    counter += 1;
  }

  return BigInt(counter);

}

console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)) //=== 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)) // === 45n;
console.log(findFibonacciIndexByLength(16n)) // === 74n;
console.log(findFibonacciIndexByLength(100n)) //=== 476n;
console.log(findFibonacciIndexByLength(1000n))  //=== 4782n;
console.log(findFibonacciIndexByLength(10000n)) //=== 47847n; 

// The last example may take a minute or so to run.
