/*You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/

/*
PROBLEM
input:an array of number
output: an array

rules/question:
- return the array with the sum of elements that are the same and consecutive 
- the input won't be empty
- the input element always be an integer


EXAMPLE

DATA STRUCTURE
input:an array of number
number
output: an array

ALGORITHM
- init 'result' = [];
- iterate over the input array
  - if the current element is equal to next element
    - adding up the last element of the array with the curr element
  - else
    - push the current element to result
- end iteration

*/

function sumConsecutives1(arr) {
  let result = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    let currEle = arr[i];
    let prevEle = arr[i - 1]
    if (currEle === prevEle) {
     result[result.length -1] += currEle;
    } else {
      result.push(currEle)
    }
  }
  return result;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
//,[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(sumConsecutives([1,1,7,7,3]))
//,[2,14,3], "on list [1,1,7,7,3] you get ")
console.log(sumConsecutives([-5,-5,7,7,12,0]))
//,[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
console.log(sumConsecutives([3,3,3,3,1]))
//,[12, 1], "on list [3,3,3,3,1] you get " )

/*
init sum = [];
init tempSum = 0
iterate over the arr
  add the current element to sum
  if the current element is not the same as the next element
    push the tempt sum to sum
    tempsum = 0
end iteration
return sum

*/

function sumConsecutives(arr) {
  let sum = [];
  let tempSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (arr[i] !== arr[i + 1]) {
      sum.push(tempSum);
      tempSum = 0;
    }
  }
  return sum;
}

function sumConsecutives2(arr) {
  let sum = [];
  let tempSum = '';
  
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (arr[i] !== arr[i + 1]) {
      sum.push(tempSum);
      tempSum = '';
    }
  }
  return sum;
}

console.log(sumConsecutives2('aaabcddghjjkl'))