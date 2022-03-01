
// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

/* 
Problem:
- A funciton takes two argument (any type)
- returns boolean true if one of argument is truthy
- returns false if otherwise.

Input: 2 values, any type.
output: boolean

Example:
5, 0 --> truthy, falsy --> true
false, true -->  falsy, truthy --> true
1, 1 --> truthy , truthy --> false

Algorithm:
1. check the truthiness of the arguments
if num1 is truthy and num2 is falsy or num1 is falsy and num 2 is truthy returns true
otherwhise return false

*/

/* function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  };
  return false;
} */

const xor = (oper1, oper2) => !!oper1 === !!oper2 ? false: true;

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
