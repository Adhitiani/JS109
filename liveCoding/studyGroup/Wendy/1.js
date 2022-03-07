// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

// maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// //-- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum. Note that the empty array is also a valid arg array.

/*
Problem:
  - If elements are all negative, return 0
  - If elements are all positive, return all elements summed toether
  - If array is empty , return 0
  - Identify the sequence of ints that when summed together, make up the largest possible sum possible in the array

Data Structure:
  Input: array 
  Output: number, the highest sum possible from the array
  
Algorithm:
  - If array is empty, return 0
  
  - Initialize allPositiveToggle to true;
  - Initialize allNegativeToggle to true;
  - Initialize highestSum variable = 0
  - Initialize sum variable = 0;
  
  - Iterate through the array
    - Check sign of number
    - If the number is negative, switch allPositive to false;
    - If the number is positive, swith allNegative to false;
  - end iteration
  - If allPositive is true, then sum all elements in teh array & return
  - If allNegative is true, then return 0
  
  - Iterate through the array
    - Add current element to sum
    - If highestSum < sum
      - highestSum = sum
    - Otherwise, continue
    - If sum is less than 0, continue to next iteration & number. 
      - Reset to sum to 0
  - End iteration
  - return highest sum
*/

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

// maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// //-- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum. Note that the empty array is also a valid arg array.

function maxSequence1(arr) {
  if (!arr.length) return 0;
  
  let allPositiveToggle = true;
  let allNegativeToggle = true;
  let highestSum = 0;
  let currentSum = 0;
  
  arr.forEach(num => {
    let sign = Math.sign(num);
    if (sign > 0) allNegativeToggle = false;
    if (sign < 0) allPositiveToggle = false;
  });
  if (allPositiveToggle) return arr.reduce((a, b) => a + b);
  if (allNegativeToggle) return 0;
  
  arr.forEach(num => {
    currentSum += num;
    if (currentSum > highestSum) highestSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  });
  return highestSum;
}

console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true;

function maxSequence(arr) {
  if(arr.length === 0) return 0;
  if(arr.every(num => num < 0)) return 0;
  if(arr.every(num => num < 0)) return arr.reduce((a,b) => a + b);
     
  
  let highestSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let currSequence = arr.slice(i, j);
      let currSum = currSequence.reduce((a, b) => a + b)
      if(currSum > highestSum) highestSum = currSum;
    }
  }
  return highestSum;
}


