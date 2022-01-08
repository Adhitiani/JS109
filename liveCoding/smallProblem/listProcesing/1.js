/* Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

Examples:
input: a number (a positive integer)
output: a number (the sum of its digit)

Rules:
- use a series of method calls to perform the sum

EXAMPLE:
23 = 2 + 3 = 5
496 = 4+9+6 = 19

DATA STRUCTURE:
input: number
output: number
string

ALGHORITM
1. Convert the number to string
2. convert the string to an array of char
3. convert  the element in array to number
4. determine the sum of the  element
5. return the sum


Copy Code */
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

function sum(num) {
  let arrayOfChar = String(num).split('');
  //let arrOfNum = arrayOfChar.map(char => Number(char));

  return arrayOfChar.reduce((acc, curr) => acc + Number(curr), 0); 
}

/*
ALGORITM2:
1. convert the number to string, convert it to an array
2. conver the element of array to number
3. create a result variable and initialize it with 0
4. iterate over the string:
    while the string length is bigger than 0, take the last character, add it with the result variable.
5. return the result variable    
*/

function sum2(num) {
  let arrStr = String(num).split('');
  let arrNum = arrStr.map(char => Number(char));
  
  let sumNum = 0;

  while (arrNum.length > 0) {
    sumNum += arrNum.pop();
  }
  return sumNum;
}

console.log(sum2(23));           // 5
console.log(sum2(496));          // 19
console.log(sum2(123456789));    // 45