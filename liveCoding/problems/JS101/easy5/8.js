/* List of Digits

Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

PROBLEM:
input: number (a positive integer)
output: an array ( a list of digit in the number)

Examples:
12345 --> [1, 2, 3, 4, 5]

Data Structure:
input: number
output: an array
string

ALGORITHM:
1. convert the number to string
2. convert the string to an array
3. iterate over the array and convert each element to number
Copy Code */

function digitList(num) {
 let arrayOfString = String(num).split('');
 return arrayOfString.map(num => Number(num))
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
