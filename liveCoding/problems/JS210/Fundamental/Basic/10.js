/*Convert a Signed Number to a String

In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

ALGO
- create integer to string function
- if the input biger than 0
  - concatenated the '+' with the integer to string function
  - return the string
- if the input is less than 0;
  - multply the input with -1
  - concatenated the '-' with the integerToString function value
  - return the string
- else return the input  
  

*/
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"


function integerToString(num) {
  let result ='';
  
  do {
    let reminder = num % 10;
    result = reminder + result;
    num = Math.floor(num / 10);
  
  } while (num > 0);
  
  return result;

};

function signedIntegerToString(num) {
  if(num > 0) {
   return '+' + integerToString(num);
  } else if (num < 0) {
    num *= -1;
    return '-' + integerToString(num);
  } else {
    return integerToString(num);
  }
};