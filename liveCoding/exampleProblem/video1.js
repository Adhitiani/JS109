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