/* Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

PROBLEM:
input: a number
output: a number (a negative number)

Rules: if the number positive return negative
       if the number is negative return it as is.

EXAMPLE:
5 --> -5
-3 --> -3

DATA STRUCTURE
input: number
output: number
string?

ALGORITM:
1. check if the number is negative
   if it's, return the number
   if positive:
   -- convert the number to string
   -- concatenate it with - sign
   -- conver back to number
   -- return the number


Copy Code */
console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) === -0);

function negative(num) {
  if(num < 0) {
    return num;
  } else {
    let str = '-' + String(num)
    return Number(str);
  };
}

// unary operator -
function negative2(num) {
  return num  < 0? num : -num;
};

console.log(negative2(5) === -5);
console.log(negative2(-3) === -3);
console.log(negative2(0) === -0);

//Math abs

function negative3(num) {
  return Math.abs(num) * -1;
};

console.log(negative3(5) === -5);
console.log(negative3(-3) === -3);
console.log(negative3(0) === -0);