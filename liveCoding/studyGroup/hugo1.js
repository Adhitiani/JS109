/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/ 

//'n', 'n', 'n', 's', 'n', 's', 'n', 's', 's', 's'

/*
PROBLEM
input: an array of string
output: boolean

rules/question:
- return true
  - if the input give you exactly ten minutes
    - one string is one minute
  - if the input get you to your strating point
  - what is the starting point?
  - find the pairs of the string: n - s, w - e

EXAMPLE

DATA STRUCTURE
input: an array of string

output: boolean

ALGORITHM
- if the length of the input array !== 10 return false
// count the occurance of the each of char
   - init 'obj' to {}
   - iterate over the input array
     - if the current element is exist in the 'obj'
       - increment the value by 1
    -  else
       - add new properties to the obj with the value 1
   - end iteration

 - if the nort occurance is NOT equal with the south occurance or if the east occurance is NOT equal to west occurance return false
- return true
*/

function isValidWalk(arr) {
  if (arr.length !== 10)return false
  let obj = {};
  arr.forEach(str => {
    obj[str] = obj[str] + 1 || 1;
  })
  if (obj['n'] !== obj['s'] || obj['e'] !== obj['w']) return false;
  return true;
}


/*

1 0 -1 0 -1 0 1 end 1 0

ALGORITHM
- if the length of the input array !== 10 return false
- init 'northSouth' = 0
- init 'eastWest' = 0
- iterate over the array
  if the curr char is 'n' 
    - increment 'northSouth' by 1
  else if the curr char is 's'
    - decrement  'northSouth' 'result' by -1
  else if the curr char is 'w'
    - increment 'eastWest' by 1
  else
    - decrement 'eastWest' by -1
- end iteration
if (northSouth' === 0 && 'eastWest' === 0) return true
return false
*/


function isValidWalk(arr) {
  if (arr.length !== 10)return false
  let northSouth = 0;
  let eastWest = 0;

  for (let i = 0; i < arr.length; i++) {
    let currChar = arr[i];
    if (currChar === 'n') {
      northSouth += 1;
    } else if (currChar === 's') {
      northSouth -= 1;
    } else if (currChar === 'w') {
      eastWest += 1;
    } else {
      eastWest -= 1
    }
  }

  return northSouth === 0 && eastWest === 0;
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //, 'should return false');
console.log(isValidWalk(['w']))//, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //, 'should return false');
console.log(isValidWalk(['n', 's', 's', 'n', 's', 'n', 'e', 'w', 'e', 'w']))


// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'], 
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.

/*
input: array strings
output: boolean
- true if at leadt thre of the elements in the array have digits whose sum is divisible by 3

test cases: 
input: ['01112', '0111', '00030', '2043', '12043']
output: true 

iterate through the array of strings 
- for each string convert the char to a number 
 - add all of the numbers from the string together 
 - check if the result can be divide by 3
- check that within the array I have at least 3 strings for which the sum of all digits / 3 === 0

1. iterate and transform it through the array 
 - at each iteration // '01112'
- convert the string to an array of number [ 0, 1, 1, 1, 2]
 - reduce method to find the sum of all the elements 
 - if the sum % 3 === 0 return true 
-iterate through main array filter to keep only the boolean true 
- return the lenght of the array filtered if its bigger than 3 return true otherwise return false
*/

function threeByThree(arr) {
// arr.map(str => str.split('').map(char => Number(char)).reduce((acc, el) => acc + el));

  let resultArr = arr.filter(num => num % 3 === 0)
  console.log(resultArr);
  if (resultArr.length >= 4) {
    return true;
  } else {
    return false;
  }
}

threeByThree(['01112', '0111', '00030', '2043', '12043'])

// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

