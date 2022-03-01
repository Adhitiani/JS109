/*You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples

[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

P:
input: an array (an array of integers) 'arr'
output: a number ( the number of all pairs exist in the array)

rules:
- the input array can be empty, return 0
- if the input array contain only one valu return 0
- if there are more poirs of certain number, count each pair only once

E:
[1, 2, 5, 6, 5, 2] -> 22 , 55 -> 2
[1, 2, 2, 20, 6, 20, 2, 6, 2] -> 22, 22, 2020, 66 -> 4

D:
input: an array
- object -> number of occurance
- an array -> value of occurance
output: a number


A:
//compute the number of occurance for each of the number
  - init 'obj' to {}
  - iterate over 'arr'
    - if the curr element of 'arr' exist as property in 'obj'
      - increment the property value by 1
    - else
      - add new property
  - end of iteration

// check if the number of occurance is divideble by 2
   - extract the value of 'obj' and assign it to 'occurance'
   - iterate over the 'ocurance'
     - divide the curr element with 2 and round it down the value
   - end of iteration

// sum the number of occurance that is divideble by 2
   - init 'countPair' to 0
   - iterate over 'occurance'
     - if the current element is more than 1 add it up to 'countPair'
   - end of iteration
// return the 'countPair'
*/

function duplicates(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  
  let occurance = Object.values(obj);
  occurance = occurance.map(num => Math.floor(num /2));
  
  let countPair = 0;
  occurance.forEach(num => {
    if(num > 0) countPair += num;
  })
  return countPair;
}

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])) // 2

// using sort
/*
- init 'count' to 0
- sort 'arr'
- iterate over the 'sortedArr'
  - start at index 0 to less than 'sortedArr' length
  - if the curr char is equal to the next char
    - increment count by 1
    - increment index by 1
- end of iteration
- return the 'count'

*/

function duplicates(arr) {
  let sortedArr = arr.sort((a,b) => a - b);
  //console.log(sortedArr);
  let count = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    let currChar = sortedArr[i];
    let nextChar = sortedArr[i + 1];
    
    if (currChar === nextChar) {
      count += 1;
      i += 1;
    }
  }
  return count;
}