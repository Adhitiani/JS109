/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:


Problem:
input: number
output: number; the next featured number that greater than the input number
featured number?
- odd number
- multiple by 7
- all digits should be unique --> appear 1

Example:
12
11
10
9
8
7 --> starting point + 7
14
21

21 -->
20
19
18
17
16
15
14--> + 7

A:

- Guard clause:
- if the input is equal to 9876543201 return "There is no possible number that 
find the starting point

- helpere function 
- startNum(num)
do the loop start with input number
- decrement by 1 in each iteration
- if the current number is multplied by 7 return the number

do the loop start from the starting point until the max = 9876543201
- increment by 7 in each loop
- if the number is odd && the number is unique
  - return the number
- end loop

helper function 
isUnique(number) 
- convert the number to string
- iterate over the string
  if the index of the curr char is not the same as the last index of that char return false
- end iteration
- return true

helper function 
isOdd(num) 
- return num % 2 !== 0
*/

function startNum(num) {
  while(num > 0) {
   num -= 1
    if(num % 7 === 0) return num
  }
}

function isOdd(num) {
  return num % 2 !== 0
}

function isUnique(num) {
  let strNum = String(num);
  
  for(let i = 0; i < strNum.length; i++) {
    if(strNum.indexOf(strNum[i]) !== strNum.lastIndexOf(strNum[i])) return false
  }
  return true;
}


function featured(num) {
  const MAX = 9876543201;
  if(num === MAX) return "There is no possible number that fulfills those requirements."
  
  for(let number = startNum(num); number < MAX; number += 7 ) {
    if(isUnique(number) && isOdd(number)) return number
  }
}

//console.log(isUnique(712))

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."