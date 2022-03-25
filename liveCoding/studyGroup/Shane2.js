// Write a function that takes an array of integers for the first argument and an integer(n) as the second argument.  If the value of the second argument(n) is found in the input array exactly n times then return true, if the second argument (n) is not found in the array, return null.

// if the second argument(n) is found in the input array, but not n times, then return an array of the original element values, but with the second parameter value (n) appearing the the correct number of times(n) sorted ascending.


/*
Problem:
input: 
input 1: an array of integers
input 2 : an integer
output:
- return true if input 2 is found in input 1 with the same number as input 2
[1, 2, 2, 3, 4, 5], 2) --> true
 - return null if:
 input 2 is not found in input 1
 [], 4 --> null
 - return input 1 with the correct number of input 2 in ascending order
 [1, 3, 2, 3, 4, 5, 3, 6, 3], 3)); --> [1, 2, 3, 3, 3, 4, 5, 6]
 - if the input two is 0
   - return true if 0 is not found in the input 1
 
DATA.
input : array and number
object to hold the occurance of each element
output: true, null, array

ALG:
// get the occurance of each number --> object
   - init obj to empty object
   - iterate over the array
     - check if the curr number exist in the obj
       - if it's exist then increment the value by 1
       - else
         - add new property with the value of 1
   - end iteration
   

// check if the input two is exist in the object
  - if it doesnt exist return null
  - if it exist check if the occurance is the same as the input 2  --> the value of the properties should be equal to the input 2
    - if it's correct number return true
    - else
      - return the array with the correct number of occurance with input 2 in ascending order.
      - reassign the object property with the correct number
      Helper function:
      - init an empty array
      - iterate over the key of the object
        - push the key to the array n times, where the n is the value of the properties --> while the value is less than or equal with the value push the key into a new array
      
*/



function x(arr, n) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
   if(n === 0 && !obj[n]) return true;
   if(!obj[n]) {
     return null
   } else if(obj[n] === n) {
     return true
   } else {
    obj[n] = n;
    return  objToArray(obj)
   }
}

function objToArray(obj) {
  let array = [];
  
  for(let key in obj) {
    let counter = 1;
    while(counter <= obj[key]) {
      array.push(key)
      counter++;
    }
  }
  return array
}


console.log(x([], 4)); // null
console.log(x([1], 1)); // true
console.log(x([1, 2, 2, 3, 4, 5], 2));  // true
console.log(x([1, 2, 3, 4, 5], -1));  // null
console.log(x([1, 2, 3, 4, 5], 0));  // true
console.log(x([4, 1, 2, 3, 4, 5, 4, 99, 101, 2, 1, 3, 4], 4)); // true
console.log(x([1, 2, 3, 4, 5], 2));  // [1, 2, 2, 3, 4, 5]
console.log(x([1, 3, 2, 3, 4, 5, 3, 6, 3], 3)); // [1, 2, 3, 3, 3, 4, 5, 6]
console.log(x([1, 2, 2, 4, 2, 5, 2, 6, 2, 7, 2], 2));  // [1, 2, 2, 4, 5, 6, 7]


function x(arr, n) {
  if (n === 0 && !arr.includes(0)) return true;
  let count = arr.reduce((obj, val) => {
    obj[val] = obj[val] + 1 || 1;
    return obj;
  }, {});

  if (count[n] === n) {
    return true;
  } else if (count[n]) {
    let output = [];
    output = arr.filter(elm => elm !== n);
    for (let i = 1; i <= n; i += 1) {
      output.push(n);
    }
    return output.sort((a, b) => a - b);
    // a different way to do this could have been to change the value in the object to the n value and then build array from object
  }
  return null;
}
