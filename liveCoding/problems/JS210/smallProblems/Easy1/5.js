/*Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Copy Code
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Copy Code
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

PROBLEM
input: number
output: string 

rules:
explicit
- return the sum betwen 1 and the given input
- return the product between 1 and the given input

EXAMPLE
input: 5
sum = 1 + 2 + 3 + 4 + 5 = 15
input: 6
product = 1 * 2 * 3 * 4 * 5 * 6

DATA STRUCTURE
input: number
output: string

ALGO
- get the sum of the given input
  - create a 'result' and initialized it with '0'
  - iterate over the number between 1 to given input
  - in each iteration reassigned result with the sum of the current result with the current number
- get the product of the given input
  - create a 'result' and initialized it with 1
  - iterate over the number between 1 to the given input
  - in each iteration reassign the result with value of the current result multipy by the current num
- log to the console the product and the sum;  
*/

function productAndSum(num) {
  let sum = 0;
  for (let number = 1; number <= num; number ++) {
    sum += number;
  };
  
  let product = 1;
  for (let number = 1; number <= num; number++) {
    product *= number;
  };
  
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
   console.log(`The product of the integers between 1 and ${num} is ${product}.`);
  

}

productAndSum(6);

