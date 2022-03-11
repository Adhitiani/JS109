//You have to create a function that takes a posiitve integer number and return the next bigger number form by the digit.
// 12 --> 21
// 513 --> 531
// 2017 --> 2071
// if no bigger number can be compare using thos digits, return -1
// 9 --> -1
// 111 --> -1
//531 --> -1

/*
PROBLEM:
input: a number (a positive integer);
output: a number (the next bigger number form by the digit)

Rules:
- if no bigger number using those dight return -1;

EXAMPLE:
12 --> 21
513 --> -1
2017 --> 2071
12345 --> 12354
5876, 5867, 6587

Algoritm
1. create a result number and initialized it to -1
2.convert the number to a string
3. convert the string to an array of number
4. iterate over the array:
   - start from the last char
   - compare it to the previous characters
   - if the last char is bigger than the previous one, change the place
   - convert it back to string and to number and if it's bigger return the number
5. return the result number   
*/

console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
console.log(nextBiggerNum(2341) === 2413);

function nextBiggerNum(num) {
  let nextBigNum = -1;
  let arrayOfNumber = String(num).split('');
 

  for (let index = 0; index < arrayOfNumber.length; index ++) {
    let rightIndex = arrayOfNumber.length - 1 - index;
    let previousIndex = rightIndex - 1;

    if(arrayOfNumber[rightIndex] > arrayOfNumber[previousIndex]) {
      [arrayOfNumber[previousIndex], arrayOfNumber[rightIndex]] = [arrayOfNumber[rightIndex], arrayOfNumber[previousIndex]];
      break;
    };
  };

  if(Number(arrayOfNumber.join('')) > num) {
    return nextBigNum = Number(arrayOfNumber.join(''));
  } else {
    return nextBigNum;
  }; 
};

/*console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
console.log(nextBiggerNum(2341) === 2413);

//You have to create a function that takes a posiitve integer number and return the next bigger number form by the digit.
// 12 --> 21
// 513 --> 531
// 2017 --> 2071
// if no bigger number can be compare using thos digits, return -1
// 9 --> -1
// 111 --> -1
//531 --> -1

P:
input: a number
output: the next bigger number form by the digit

rules:
- if no bigger number return -1

E:
see above

D:
number --> number

A:
- do the iteration
- in each iteration:
  - increment the number by 1
  - compare the number with the given argument
    - if the number has the same digit number as the given argument return the number

Compare the digit numbers
- convert both number to the string
- convert both string to an array of char
- convert the char to number
- sort the number
- iterate the first array:
  - for each of char, compare it to the element with the same index position in the second array
    - if it's not equal return false
    - else return true.
*/

function isSameDigit(arr1, arr2) {
  let arrStr1 = String(arr1).split('').map(Number).sort((a, b) => a - b);
    //console.log(arrStr1);
  let arrStr2 = String(arr2).split('').map(Number).sort((a, b) => a - b);
    //console.log(arrStr2);
   
   for (let i = 0; i < arrStr1.length; i++) {
     if(arrStr1[i] !== arrStr2[i]) {
       return false;
     }
   }
   return true;
 }
 
 function nextBiggerNum(num) {
   
   
   for (let i = 1; i < Infinity; i++) {
    if(isSameDigit(num, num + i)) {
      return num + i;
    } 
   }
   
   return -1
 }
 
 
 /*console.log(nextBiggerNum(513) === 531);
 console.log(nextBiggerNum(12) === 21);
 console.log(nextBiggerNum(513) === 531);
 console.log(nextBiggerNum(2017) === 2071);
 */
 console.log(nextBiggerNum(111) === -1);
 console.log(nextBiggerNum(531) === -1);
 //console.log(nextBiggerNum(123456789) === 123456798);
 //console.log(nextBiggerNum(2341) === 2413);

 function isSameDigit(num1, num2) {
  let newNum1 = String(num1).split('').sort((a,b) => a - b).join('');
  let newNum2 = String(num2).split('').sort((a,b) => a - b).join('');

  return newNum1 === newNum2;
}

function nextBiggerNum(num) {

  for (let i = 1; i < num * 10; i++) {
   let currNum = num + i
   if (isSameDigit(num, currNum)) {
     return currNum;
   } 
  }
  return -1
}

 console.log(nextBiggerNum(513) === 531);

 console.log(nextBiggerNum(12) === 21);
 console.log(nextBiggerNum(513) === 531);
 console.log(nextBiggerNum(2017) === 2071);
 console.log(nextBiggerNum(111) === -1);
 console.log(nextBiggerNum(531) === -1);
 console.log(nextBiggerNum(123456789) === 123456798);
 console.log(nextBiggerNum(2341) === 2413);
