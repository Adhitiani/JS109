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

//Rotation Part 3
/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

E:
735291 -> 352917 0 -6
3 52917 -> 3 29175 1 5
32 9175 -> 32 1759 2 
321 759 -> 321 597 3
3215 97 -> 3215 79 4

A:

- convert the number to string
- iterate over the string:
- in each iteration:
  - divide the string to two part: 'remaining' and 'rotate'
  - 'remaining: 0 - 0, 0 -1, 0 - 2, 0 - 3, 0 - 4  , 0 -5
  - 'rotate' : slice 0, 1, 2, 3, 4, 5
 
  - rotate the rotate part:
    - convert the string to an array of char
    - take the first element from the array
    - append it to the mutated array
    - convert back the 'rotate' to string  
  
  - reasign string to - concat the 'remaining' and 'rotate' 

- convert the string to number
- return the number

//
*/

function maxRotation1(num) {
  let str = String(num);
  
  for (let i = 0; i < str.length; i++) {
     let remaining = str.slice(0, i);
     let rotate = str.slice(i)
     
     let rotateArr = rotate.split('');
     rotateArr.push(rotateArr.shift());
     rotate = rotateArr.join('');
     
     str = remaining.concat(rotate);
  }
  return Number(str);
}

console.log(maxRotation(735291));          // 321579

console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


function maxRotation(num) {
 // get the element of the index that rotating
 // append it to the mutate element --> an array
  
// convert the number to string --> an array of char
  // iterate over the array
  // in each iteration - take out the rotate element
  // push it on the mutate array
// return array --> string --> number
  
  let array = String(num).split('');
  
  for (let i = 0; i < array.length; i++) {
    let element = array.splice(i, 1);
    array.push(element[0]);
  }
   return Number(array.join(''))
}