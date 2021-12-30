
/* In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

1. check if the number < 0
  -  number * - 1
  - result '-' + result

 */


function integerToString(num) {
  const STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  let str = '';

   do {
    let reminder = num % 10;
    num = Math.floor(num / 10);
    str = STRING[reminder] + str;
  } while (num > 0)
  
  return str;
}

function signedIntegerToString(num) {
 if(num < 0) {
   num = num * -1;
   return '-' + integerToString (num);
 } else if ( num > 0){
   return '+' + integerToString (num);
 } else {
   return integerToString(num);
 };

};


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");