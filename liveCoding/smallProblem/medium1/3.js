/*Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

PROBLEM:
input: a number
ouput: a max rotated number

Rules:
Explicit
- rotate the number by its maximum rotation

EXAMPLE
735291
1 digit 7 35291 --> 352917
352917
2 digit 35 2917 --> 3 29175 --> 329175
329175
3 digit 329 175 ---> 32 1759 --> 321759
321759
4 digit 3217 59 --> 321 597 --> 321597
321597
5 digit 32159 7 --> 3215 79 --> 321579


DATA STRUCTURE
number --> string --> array --> string --> number

ALGO
1. convert the number to string
2. convert the string to an array of string number
2. iterate over the array
   - the iteration number is less than the length of the string
   - in each iteration:
     - take a character based on the number of the counter starting from the index 0 and put it in the back of the array number
     - increment the counter by 1
3. convert the array to string and to number
4. return the number
     
*/
function maxRotation(num) {
  let strArr = String(num).split('');
  
  for (let digit = 0; digit < strArr.length; digit ++) {
   strArr.push(strArr.splice(digit ,1))  
  }
  
  return Number(strArr.join(''));
 
}

function maxRotation2(number) {
  let array = [...String(number)];
  for (let index = 0; index < array.length; index += 1) {
    array.push(array.splice(index, 1));
  }


console.log(Number(array.join('')));
}

console.log(maxRotation2(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845