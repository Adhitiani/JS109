/* Convert a Signed Number to a String!

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

Examples

Algortim
1. check if the number start with sign
2 if it start with - then concatenated with -


Copy Code */

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/* function integerToString(num) {
  let string = '';
  let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  if(num < 10) return DIGITS[num];

  while (num > 0) {
    let digit = num % 10;
    string = DIGITS[digit] + string;
    num = Math.floor(num /10);
  };
 return string;

} 

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {

   return '-' + integerToString(Math.abs(num));

  } else if (Math.sign(num) === 1) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }
} */

function signedIntegerToString(number) {
  let arr = [];
  let counter = Math.abs(number);
 

  while (counter > 0) {
    let digit = counter % 10;
    arr.unshift(digit);
    counter = Math.floor(counter / 10);
  };

  switch (Math.sign(number)) {
    case -1 :
      return `-${arr.join('')}`;
    case 1 :
      return `+${arr.join('')}`;  
    default:
      return '0';  
  } 

}

