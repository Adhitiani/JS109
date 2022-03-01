/* Squaring an Argument

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example: */

let multiply = (num1, num2) => num1 * num2;
let square = (num, power) => {
  let total = 0
 for (let counter = 1; counter < power; counter +=1) {
  total += multiply(num,num)
 }
 return total;

}


console.log(square(5,3)) // logs true
//console.log(square(-8) === 64); // logs trueno

