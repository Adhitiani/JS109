/* Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Examples:

Copy Code */

console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21);
console.log(reverseNumber(1) === 1);

function reverseNumber(num) {
  let strArrReverse = String(num).split('').reverse().join('');
  return parseInt(strArrReverse);
};

function takeTheReverseZero(num) {
  let strArrReverse = String(num).split('').reverse();
   let arrOfInteger = [];
   strArrReverse.forEach((num,idx) => {
     if (num !== '0') {
       arrOfInteger.push(num);
     } else if(strArrReverse[idx-1] !== '0' && strArrReverse[idx-1] !== undefined) {
      arrOfInteger.push(num);
     }
   })
   return arrOfInteger.join('');
}

console.log(takeTheReverseZero(10200));
//create an empty array
// iterate over the array, in each iteration
  // - check if the element is 0
      // - if it's 0 check if the previous element is also 0
       //- if not push to the new Array.