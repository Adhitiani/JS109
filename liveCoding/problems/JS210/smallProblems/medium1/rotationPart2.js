/*Rotation Part 2

Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Examples:

Copy Code
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

P:
input: 2 numbers
output: a rotate number

rules:
- rotates the last n digits of a number
- for the last n digits : rotate one digit to the left, moving the first digit to the end

E:
735291, 3
735 291 
735 912 --> 735912

735291, 4
73 5291
73 2915
--> 7332915

735291, 4 --> 2

D: 
number --> string --> array --> string --> number

A:
//- convert the number to an array of char,  'arrOfChar'
- convert the number to a string
- convert the string to an array of char


// get the last n digit of number, 'lastDigits'
  - slice(length - n) assign it to 'lastDigits'
//rotate the first element to the end
  - slice the first element of 'last digits'
  - concatenated the rest of the lement with the last digit
  - assgin the rotate digit to 'rotateElem'

// get the rest of the element
  - slice the 'arrOfChar' from 0 to 'arrOfChar' length - n
  - assign the sliced array to 'leftElem'
  
// concatenated 'leftElem' with 'rotateElem' and assign to 'resultArr'
// convert them to a string
// convert them to number
// return the number
  
*/

function rotateRightmostDigits1(num, rotateNum) {
  let arrOfChar = String(num).split('');
  
  
  let lastDigits = arrOfChar.slice(arrOfChar.length - rotateNum);
  let rotateElem = lastDigits.slice(1).concat(lastDigits.slice(0, 1))
  

  let leftElem = arrOfChar.slice(0, arrOfChar.length - rotateNum);
  
  let resultArr = leftElem.concat(rotateElem);
 
  return Number(resultArr.join(''));

  
}

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 



// using splice
/*

// convert the number to an array
- init 'arrOfChar'
- convert the number to string
- convert the string to an array of char

// get the maniputaled element
- init 'element'
- take out the element form 'arrOfChar'
  - find the index of the element
    - 'arrOfChar'.length - n
  - arrOfChar.splice('arrOfChar'.length - n, 1)
  
//push the element to the end of 'arrChar'
// convert back the array to a string and to a number
// return the number


*/
function rotateRightmostDigits2(num, rotateNum) {
  let arrOfChar = String(num).split('');
  
  let element = arrOfChar.splice(arrOfChar.length - rotateNum, 1)
  arrOfChar.push(element);
  
  return Number(arrOfChar.join(''))

}

//rotate as string:
/*
- convert the number to a string
- divide the string  to two parts:
  - left part : from index 0 - the rotate index
  - rotate part: rotate index = string.length - input digit
  
- rotate the rotate part:
  - convert the string to an array
  - slice the first char
  - concatenat the rest of the array with the first char
  - convert the array back to the string
  
return leftpart concatenated with rotate part in number form 

*/

function rotateRightmostDigits3(num, rotateNum) {
  let str = String(num);
  let leftPart = str.slice(0,str.length - rotateNum);
  let rotatePart = str.slice(str.length - rotateNum);
  
  rotatePart = rotatePart.split('')
  rotatePart = rotatePart.slice(1).concat(rotatePart.slice(0, 1)).join('');
  
  return Number(leftPart + rotatePart);
}


