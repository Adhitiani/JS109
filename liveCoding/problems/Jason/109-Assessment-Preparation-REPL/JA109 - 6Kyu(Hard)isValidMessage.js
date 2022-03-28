// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

/*
P:
-> string
<- boolean
- each string will contain 'num -> string -> num -> string '
- possible case that number will be at end of input string -> false
- for the function to return true, the preceeding integer must match the string afterwards!
- integers can be more than 9 IE: 10 or 11 or 100
- scope/edge: ''? '0'?,  
- ... all integers?

E: 
'1a' -> true
1a1a -> true
2aa1a-> true
2aaa1a-> false

D:
-> string
= simplObj -- KVP that has keys with 'instances' paired with values that are [num, string]
  - keys will be instances at which they occur ... essentially +1 
  - [num] is the preceeding integer
  - string is the postfix string
<- boolean

A:
function isvalidmessage
// guardclauses
--- if [0] char is not a number, then return false
--- if [last char] is a number, return false

-> inputString
= simplAry = []
= simplAry = [[inputStr[0], '']; // we can assume this is the first number
= let counter = 0;
- iterate through string, char is curren element, starting at 1, @i
  = let currBool = Number.isNaN(Number(char@i));
  = let prevBool = Number.isNaN(Number(char@i-1));
  - if currBool && prevBool 
    - simplAry[counter][1] += char@i
  - else if (currBool !== prevBool) && (currBool)
    - transition from number to char
    - simplAry[counter][1] += char@i
  - else if (currBool !== prevBool) && (prevBool)
    - transition char to number 
    - counter += 1
    - simplAry.push([char@i, ''])
  - else if (!currBool && !prevBool)
    - simplAry[counter][0] += char@i

- iterate through all elements if all the first elms match the second elms


*/

function isAValidMessage2(str){
  if (str.length === 0) {return true}
  if (Number.isNaN(Number(str[0])) || !Number.isNaN(Number(str[str.length - 1]))) {
    return false;
  }
  let simplAry = [];
  let counter = 0;
  simplAry = [[str[0], '']];
  for (let i = 1; i < str.length; i += 1) {
    let charCurr = str[i];
    let charPrev = str[i - 1];
    let currBool = Number.isNaN(Number(charCurr));
    let prevBool = Number.isNaN(Number(charPrev));    
    if ( currBool && prevBool ) {
      // a char to char
      simplAry[counter][1] += charCurr;
    } else if ((currBool !== prevBool) && (currBool)) {
      // num to char
      simplAry[counter][1] += charCurr;
    } else if ((currBool !== prevBool) && (prevBool)) {
      // char to num
      counter += 1;
      simplAry.push([charCurr, '']);
    } else if ((!currBool) && (!prevBool)) {
      // num to num
      simplAry[counter][0] += charCurr;
    }
  }

  console.log(simplAry);

  for ( let subAry of simplAry ) {
    let num = Number(subAry[0]);
    let strLen = subAry[1].length;
    if (num !== strLen) {
      return false
    }
  }
  return true;
}

console.log(isAValidMessage("3hey5hello2hi"))

/*
Comment: 
1. Consider the use of `every` or `some` when iterating through an array and seeing if one or all the values are true (or false)
*/

function isAValidMessage(str) {
  // '3hi5hello' -> [3, hi, 5, hello]
  const NUMBERS = '0123456789'; // CHARACTER CLASS!! (consider regex but this is more explicit)
  let ary = [str[0]];
  for (let i = 1; i < str.length ; i += 1) {
    let prev = str[i - 1];
    let curr = str[i];
    let lastAryVal = ary[ary.length - 1];
    let class1Bool = NUMBERS.includes(prev) && NUMBERS.includes(curr); // prev and curr are numbers
    let class2Bool = (!NUMBERS.includes(prev)) && (!NUMBERS.includes(curr)); // prev and curr are letters
    // can classify any which way here!
    if (class1Bool || class2Bool) { // if any is true, they are the same character class!
      // append here to the last element of the array!
      ary[ary.length - 1] += curr;
    } else {
      ary.push(curr);
    }
  }

  // nested array
  // [[num, str],[, ]] 

  let nest = [];
  console.log(nest)
  // use every
  console.log(ary.length)
  for (let i = 1; i < ary.length + 1; i += 2) {
    nest.push([ary[i - 1], ary[i]])
  }
  
  return nest.every(sub => Number(sub[0]) ===  sub[1].length);
  
  // console.log(ary); 
  // console.log(nest)
}