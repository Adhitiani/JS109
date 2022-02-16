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




