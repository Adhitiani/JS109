/* Reversed Arrays

Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().

PROBLEM:
input: an array
output: the same array with reverse element

Rules:
- reverse its element in place
- mutate the array and return the same array

EXAMPLE
[1, 2, 3, 4] --> [4,3,2,1]
1 idx 0 -> idx 4
arr[0] = arr[arr.length -1], arr[arr.length -1] = arr[0] --> [4, 2, 3, 1]
arr[1] = arr[arr.length -2] , arr[arr.length -2] = arr[1] = arr[arr.length -2] --> [4, 3, 2, 1]

[1, 2, 3, 4] === [4,3,2,1] true

ALGORITM
1. divide the arr iterate over the array, in each iteration
- remove the last element and assign it to the first index + 0 element
pop 4 --> arr[0]
pop 3 --> arr[1]
pop 2 --> arr[2]
pop 1 --> arr[3] length -1 stop

1,2,3,4









Copy Code
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true */

function reverse(arr) {
  let copyOfArr = arr.slice();
  
  for (let index = 0; index < arr.length; index ++) {
    let newIndex = copyOfArr.length - 1 - index;
    arr[index] = copyOfArr[newIndex];
    
  }

  return arr;

}
 



/* EXAMPLE
[1, 2, 3, 4] --> [4,3,2,1]
1 idx 0 -> idx 4
arr[0] = arr[arr.length -1], arr[arr.length -1] = arr[0] --> [4, 2, 3, 1]
arr[1] = arr[arr.length -2] , arr[arr.length -2] = arr[1] = arr[arr.length -2] --> [4, 3, 2, 1]

[1, 2, 3, 4] === [4,3,2,1] true

ALGORITM 
1. determine the length of the array, if it's even
   - determine the left arr = arr.slice(0, arrLength /2)
   - determine the right arr = arr.slice(arrLength / 2)
2. if the length of the array is odd , arr.length-1 1 / 2
3. iterate over the half of the array, in each iteration
   reassign the arr[0] = arr[arr.length -1 - idx]
4. return the array   


*/

console.log(reverse2([1, 2, 3, 4]));
console.log(reverse2([1, 2, 3, 4, 5]));

function reverse2(arr) {
  let arrayLength = arr.length;
  arrayLength % 2 === 0? arrayLength : arrayLength = arrayLength - 1;
  
  let leftArray = arr.slice(0, arrayLength / 2);
  let rightArray = arr.slice(arrayLength/2);

  for (let index = 0; index < arr.length / 2; index ++) {
    arr[index] = rightArray[rightArray.length - 1 - index];
    arr[arr.length - 1 - index] = leftArray[index];
  };

  return arr;

  };

