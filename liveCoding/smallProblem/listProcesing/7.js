/* Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

PROBLEM:
input: an array of number
output: a number

Rules:
- return the sum of the sums of each leading subsequences
- the input array always contains at least one number

EXAMPLE:
[3, 5, 2] => (3) + (3 + 5) + (3 + 5 + 2) --> 21

DATA STRUCTURE:
array -> number

ALghoritm:
1. create a base number initialized it with 0;
2. iterate over the array, in each iteration
   - replace the current number with the sum of add the previous number with current number
3. iterate over the new array and in each iteration add the base number with the current element;
4. return the number    


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35 */

function sumOfSums(array) {
  let sum = 0;
  let newArr = new Array(array.length);
  newArr[0] = array[0];
  
  for (let index = 1; index < array.length; index ++) {
    newArr[index] = array[index] + newArr[index -1];
  };
  
  newArr.forEach(num => sum += num);
  return sum;
}

// console.log(sumOfSums([3, 5, 2]));
// console.log(sumOfSums([1, 5, 7, 3]));
// console.log(sumOfSums([4]));
// console.log(sumOfSums([1, 2, 3, 4, 5]));

// using map

function sumOfSums1(array) {
  let sum = 0
  let temp = 0;

   array.forEach(num => {
    temp += num;
    sum += temp;
  })
3 
tempt = 3 + 0;
sum = 0 + 3;
5
tempt = (3 + 5)
sum = 3 + (3 + 5);
2
temp = (8 + 2)
sum = 11 + ((8 + 2))
 

  return sum;
  
}

console.log(sumOfSums1([3, 5, 2]));

/// with push

function sumOfSums2(array) {
  let newArr = [];
  for (let index = 0; index < array.length; index ++) {
    newArr.push(array.slice(0, index + 1));
  };
  return newArr.flat().reduce((acc, curr) => acc + curr);
};

console.log(sumOfSums2([3, 5, 2]));

// with reduce

function sumOfSums3(array) {
  let sum = 0;
  array.forEach((_, idx) => {
    sum += array.slice(0, idx + 1).reduce((acc, curr) => acc + curr);
  })
  return sum;
}