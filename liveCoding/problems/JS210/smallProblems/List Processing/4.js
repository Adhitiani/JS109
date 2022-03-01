/*Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

P:
input: an array of numbers
output: a number

return: 
- the sum of the sums of each leading subsequence in that array

E:
[1, 2, 3, 4, 5]
1 
12 4
123 10
1234 20
12345 35

D:
an array --> a number 

A:
- get all the possible leading subsequnece and place it in an array called 'subArray':
  - init 'subArray' with an empty array
  - iterate over the input array
  - for each of iterattion
    - slice the element with index 0 to current index + 1
    - push the sliced element to 'subArray'
  

- get all the sum of each of the 'subArray' element and place it in 'sumSubArr'
  - init 'sumSubArr' to []
  - iterate over the 'subArray
  - init 'sum' to 0
  - in each of iteration:
    - add the sum with the current element
  - push the sum to 'sumSubArr'  
    

- get the sum of all the 'sumSubArr' elements and place it in 'result'
  - init 'sum' with 0
  - iterate over the 'sumSubArr':
  - in each iteartion add 'sum' with the current element
  - assign the final sum to 'result'
  
- return the 'result'

*/

function sumOfSums(arr) {
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    subArray.push(arr.slice(0, i + 1));
  }
  
  let sumSubArr = [];
  for (let i = 0; i < subArray.length; i++) {
    sumSubArr.push(subArray[i].reduce((sum, ele) => sum + ele, 0));
   
   
  }
  
  return sumSubArr.reduce((sum, ele) => sum + ele, 0)
      
  
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// more conciese code

/*
- get all the possible leading combination and their sum and placed it in 'subArrSum'
  - init 'subArrSum' to an empty array
  - iterate over the input array
  - in each iteration
    - slice the element start from 0 to the current index + 1 and placed it in 'currSubArray'
    - compute the sum of 'currSubArray' and push it to the 'subArrSum'


- return the sum of all the sum of leading combination
  - init 'sum' to 0
  - iterate over the 'subArrSum'
  - in each iteration:
    - add the current 'sum' with the curr element
  - return the sum  
 
*/

function sumOfSums1(array) {
  let subArrSum = [];
  
  for (let i = 0; i < array.length; i++) {
    let currSubArray = array.slice(0, i + 1);
    subArrSum.push(currSubArray.reduce((sum, acc) => sum + acc, 0));
  }
  return subArrSum.reduce((sum, acc) => sum + acc, 0);
}

/// using map
function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}


