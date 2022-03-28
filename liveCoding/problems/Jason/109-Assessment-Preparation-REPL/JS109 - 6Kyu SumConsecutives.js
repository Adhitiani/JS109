// https://www.codewars.com/kata/55eeddff3f64c954c2000059
/*
-> ary of itns 
<- ary of ints (summed consecutives)
P:
- summed and pushed to the return array only if integers are the same next to each other
- scope: always array of ints
- edge: no [] or none no argument tests

E: 
[1, 2, 2, 3] -> [1, 4, 3]
[1] -> [1]

D:
->arry
= use a number to store runing summation
= use a temporary number to see if still consecutive
<- arry

A: 
function sumConsecutives
= prevNumber = inputAry[0]
= currentSummation
= returnAry = [];
- iterate through `inputAry` for each number, starting at 0 + 1 element
  - if prevNum === currElm then 
    - summation += 1
  - else 
    - push summation to returnAry
    - summation = 0
    - prevNUmber = currElm

return returnAry

*/

function sumConsecutives(inputAry) {
  let prevNumber = inputAry[0];
  let currentSum = 0;
  let returnAry = [prevNumber];

  for (let i = 1; i < inputAry.length ; i += 1) {
    if ( prevNumber === inputAry[i] ) {
      returnAry[returnAry.length - 1] += prevNumber; // += inputAry[i]
    } else {
      returnAry.push(inputAry[i])
      prevNumber = inputAry[i];
    }
  }

  return returnAry;
}

console.log(sumConsecutives([3,3,3,3,1]))
console.log(sumConsecutives([-5,-5,7,7,12,0]))
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))

/*
Comment: 
1. had to reset algorithm -- I was attempting to use foreach to save on time
2. probably better to use a for loop instead -- makes the algorithm more follow-able
3. 
*/