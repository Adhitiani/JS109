/*Get the Middle Character

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

P:
input: a string (non empty)
output: a string --> a middle char of the string

rules:
- odd length return one char
- even length return two char

E:
Launch
012345
Lau nch
012 345
0-3 3
length = 6
return --> un (2, 3)

I Love JavaScript
l: 17
return : a (8)
even : (length - 1) / 2

abcde

abcd efg
0123 456
0-4  456

A:
- convert the string to an array of char
- find the middle index: round down the result of array length / 2
- if the array length is  odd, extract one char that it's in the middle index
- if the array length is even, extraact two char start from the middle index - 1
*/

function centerOf(str) {
  let arrChar = str.split('');

  let middleIdx = Math.floor(arrChar.length / 2);
  //console.log(middleIdx);
  
  if (arrChar.length % 2 === 0){
    return arrChar.splice(middleIdx - 1, 2).join('');
  } else {
    return arrChar.splice(middleIdx, 1).join('');
  }
  

  
}
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// string (slice)

function centerOf1(str) {
 

  let middleIdx = Math.floor(str.length / 2);
  console.log(middleIdx);
  
  if (str.length % 2 === 0){
    return str.slice(middleIdx - 1,middleIdx + 1);
  } else {
    return str.slice(middleIdx, middleIdx + 1);
  }
  

  
}
console.log(centerOf1('I Love JavaScript')); // "a"
console.log(centerOf1('Launch School'));     // " "
console.log(centerOf1('Launch'));            // "un"
console.log(centerOf1('Launchschool'));      // "hs"
console.log(centerOf1('x'));                 // "x"