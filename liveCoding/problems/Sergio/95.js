/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// compute the occurance of each char
// find the occurance that is odd

*/

function findOdd(arr) {
  let occurance = {};
  for(let num of arr) {
    occurance[num] = occurance[num] + 1 || 1;
  }
 
  for (let key in occurance) {
    if(occurance[key] % 2 !== 0) return Number(key);
  }
  //let key = Object.keys(occurance)
  //for(let i = 0; i < key.length; i++) {
  //  if(occurance[key[i]] % 2 !== 0) return key[i]; 
  //}
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10], 1));