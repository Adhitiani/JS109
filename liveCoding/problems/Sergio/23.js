/*The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
*/

/*
PROBLEM
input: an array of number
output: a nested array

rules/question:
- return all pairs of integers that have a difference of 2.
- the result array should be sorted in ascending order values
- there are no duplicate in hte array
- the order integers should not matter

EXAMPLE


DATA STRUCTURE

ALGORITHM
- sort the input array in ascending order
- init 'result' to [];
//get all the combination of two number 
- iterate over the array with index i
  - iterate over the array with index i + 1
  - compare current number with index i with the current index j
    - if the difference is 2
      - push the the two num in an array to 'result'
  - end iteration
- end iteration
- return result

*/

function twosDifference(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sorted.length; i++) {
    for(let j = i + 1; j < sorted.length; j++) {
     if (sorted[j] - sorted[i] === 2) {
       result.push([sorted[i],sorted[j] ])
     }
    }
  }
  return result;
}

console.log(twosDifference([1, 2, 3, 4]))  //should return [[1, 3], [2, 4]]

console.log(twosDifference([4, 1, 2, 3])) //should also return [[1, 3], [2, 4]]

console.log(twosDifference([1, 23, 3, 4, 7])) //should return [[1, 3]]

console.log(twosDifference([4, 3, 1, 5, 6])) //should return [[1, 3], [3, 5], [4, 6]]