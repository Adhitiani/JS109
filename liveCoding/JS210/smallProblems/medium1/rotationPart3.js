/*Rotation (Part 3)

Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:

Copy Code
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Example:
735291 --> 352917
3 52917 --> 329175
32 9175 --> 321759
321 759 --> 321597
3215 97 --> 321579

A:
//convert the number to an array of char, 'arrOfChar'
  - init 'arrOfchar'
  - convert the number to string
  - convert the string to an aray of char
  
//iterate over 'arrOfChar'
- for each of char:
  - get the mutate element
    - init 'element'
    - take one element on the current index
  - push the 'element' to the end of 'arrOfChar'
//convert back the 'arrOfChar' to string
/ convert the string to number
// return the number
*/

function maxRotation1(num) {
  let arrOfChar = String(num).split('');
  
  
  for (let i = 0; i < arrOfChar.length -1; i++) {
    let element = arrOfChar.splice(i, 1);
    //arrOfChar = arrOfChar.concat(element);
      arrOfChar.push(element[0]);
  }
  
  return Number(arrOfChar.join(''));
}

console.log(maxRotation(735291) === 321579)         // 
//console.log(maxRotation(3) === 3)
//console.log(maxRotation(35) === 53)
//console.log(maxRotation(105) === 15)
//console.log(maxRotation(8703529146) === 7321609845)

function maxRotation(num) {
  let str = String(num);
  
  
  for (let i = str.length; i > 0; i--) {
    let rotate = str.slice(i);
    console.log(rotate);
    let left = str.slice(0, i);

    let rotateArr = rotate.split('');
    
    rotateArr.push(rotateArr.shift());
    str = left + rotateArr.join('');
  }
  return str;
}