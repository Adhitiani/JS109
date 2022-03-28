// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
/*
-> ary of integers 
<- integer 
- the return is a integer that is occuring the most
- if there is an occurence tie, return the largest number instead
- scope: only array of integers
- edge: []? 

E: 
[0] -> 0
[11, 1, 1] -> 1
[11, 11, 1, 1] -> 11

D: 
-> input ary
= simplObj -- stores the keys, gets unique values and sees how many times they occur
= ary for keys from simplObj
= num for max num of instances
<- integers

A: 
function highestRank
= simplObj -- this will contain unique keys with values as the numebr of occurences
- iterate through ary, for loop, starting from beginning, 
  = currentNum = ary@i
  - if simpleObj has property of currentNum 
    - increment the property += 1
  else 
    - assign to a new property and set to 1
= aryOfKeys = get the keys of simplObj 
- get the largest occurences
= set maxOccur = 0;
= set maxNumber = 0;
  - iterate through the arrOfKeys, 
    = keyval = arrOfKeys[i]
    - if (conditional)
      - conditional: maxNumber <= keyval && maxOccur <= simplyObj[keyval]
      - maxOccur = simplyObj[keyval]
      - maxNum = keyval
    - else
      - continue
return maxNum

*/

function highestRank(ary) {
  let simplObj = {};
  for (let i = 0; i < ary.length; i += 1) {
    let currentNum = ary[i]
    if (simplObj[currentNum]) {
      simplObj[currentNum] += 1;
    } else {
      simplObj[currentNum] = 1;
    }
  }
  let aryOfKeys = Object.keys(simplObj);
  
  let maxOccur = 0; 
  let maxNumber = 0;
  for (let i = 0; i < aryOfKeys.length; i += 1) {
    let keyVal = Number(aryOfKeys[i]);
    if ((maxNumber <= keyVal) && (maxOccur <= simplObj[keyVal])) {
      maxOccur = simplObj[keyVal];
      maxNumber = keyVal;
    }
  }
  return maxNumber;
}

console.log(highestRank([11, 22, 33, 33, 33, 44, 55, 55]));
/*
comment: 
1. DO NOT TRY let a, b, = 0
  -- instead do let a = b = 0
2. In algo, say 'hash map' instead
  -- IE: `'hash map' the input in to simplObj with values being the occurences`
  -- then provide an auxillary function
    - and provide a super high level of what it looks like
    - no need to describe it in detail we know how to do it
3. In algo, we can also say `get unique substrings` in uniques sub function
  -- IE: use the `uniques` algo to transform from
    -> string
    <- array of substrings
    OR
    -> array of integers
    <- nested array of all uniquely paired integers




*/

let a = b = 0;
console.log(a, b)