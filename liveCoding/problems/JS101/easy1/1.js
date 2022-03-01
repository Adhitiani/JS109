//Isn't it Odd?

//Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

//Examples:
/*




Problem:
input: an integer (positive, negative, or zero)
output : boolean ( false or true)
         - true --> the number abosolute value is odd
         - false --> if it's not odd (even)
 Question:
 what is integer?
 the whole value, positive, negative or 0.
 What is absolute value of number?
 absolute value is the non-negative number without regards to its sign.
 what is odd value?
 a number which is not divisible exactly by 2.

 Rule:
 -the input is always a valid integer value
 - the function return true if the absolute value of input is odd number

 Example:
  2 --> false
  3 --> true
  0 --> false
  -2 --> false
  -13 --> true

  

  Data structur
  - number

  Algoritm

  1. check if the number is even
     - if it's divided by 2 has no reminder return true
     - if it's divide by 2 has reminder return false

function isOdd(num) {
  return num % 2 === -1 || num % 2 === 1;
};

const isOdd = num => {
  let odd = ['1', '3', '5', '7', '9']
  return odd.includes(String(num).slice(-1))
}
*/

const isOdd = num => {
  return Math.abs(num) % 2 === 1;
}

console.log(String(15).slice(-1))
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true