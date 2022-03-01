/* Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example

Copy Code 
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

let rl = require('readline-sync');

let num1 = Number(rl.question('Enter the first number\n'));
let num2 = Number(rl.question('Enter the second number\n'));
/* 
console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${Math.round(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`); */

let obj = {
  '+' : num1 + num2,
  '-' : num1 - num2,
  '*' : num1 * num2,
  '/' : Math.round(num1 / num2),
  '%' : num1 % num2,
  '**': num1 ** num2,
}

for (let key in obj) {

  console.log(`==> ${num1} ${key} ${num2} = ${obj[key]}`);
  
}
