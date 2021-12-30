/* <Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.


PROBLEM:
input: an array of numbers
output: an array of numbers ( the running total from the original array)
Rules: if the input is an empty array return empty array;

Examples:
2, 5, 13 ----> 2, 5+2 = 7, 13 + 7 = 20
[14, 11, 7, 15, 20] --> 14, 14 + 11 = 25, 25 + 7 = 32, 32 + 15 = 47, 47 + 20 = 67

Data Structure:
Input: an array
Output: an array

ALgoritm:
1. check if the length of the array is less than 0, if so return the array ( edge case)
2. create a 'result' array --> [];
3. create the initial total number to 0
4. iterate over the array:
   add the current element with the current total number
   push the result to the result array
   reassign the total number with the new result number
5. return the result array   

Copy Code> */

function runningTotal(array) {
  if(array.length === 0) return [];
  
  let result = [];
  let total = 0
    
  array.forEach(num => {
    result.push(total += num);
  })
   return result;
  }



    





console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([]));  // []           
                    
