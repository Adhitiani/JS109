/* Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

Copy Code
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. 


Problem:
input: 6 numbers
output: string and number

Chek if the 6th number appeared in the last 5 numbers

Example:
25,15,20,17,23, 17 ---> 17 appears...
25,15,20,17,23, 18 --> 18 doesn't appear

Data Structure:
input: number
ouput: number and string
array

Algoritm:
1. take the input from the user
2. places the  5 inputs in an array
3. check if the last input includes in the array
4. return string interpolation
*/

let readline = require('readline-sync');

let num1 = readline.question('Enter the 1st number:\n');
let num2 = readline.question('Enter the 2nd number:\n');
let num3 = readline.question('Enter the 3rd number:\n');
let num4 = readline.question('Enter the 4th number:\n');
let num5 = readline.question('Enter the 5th number:\n');
let lastNum = readline.question('Enter the last number:\n');

let arrNum = [num1, num2, num3, num4, num5];

if(arrNum.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${num1},${num2},${num3},${num4},${num5}.`)
} else {
  console.log(`The number ${lastNum} doesn't appear in ${num1},${num2},${num3},${num4},${num5}.`)
};