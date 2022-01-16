/*Rotation (Part 1)

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

PROBLEM:
input: an array
output: a new array

Rules:
- move the first element to the end of the array
- input is not array return undefined
- input is an empty array, return an empty array

EXAMPLE:
[7, 3, 5, 2, 9, 1] --> [ 3, 5, 2, 9, 1, 7]
['a', 'b', 'c'] --> [ 'b', 'c', 'a']

DATA STRUCTURE
input: an array
output: a new array

ALGORITHM:
guard clause:
- if input is not array return undefined
- if input is an empty array, return an empty array

1. create a copy of the input array
2. extract the first element of the array
3. push the first element to the end of the array
4. return the array


*/

function rotateArray(array) {
  if(!Array.isArray(array)) return undefined;
  if(array.length === 0) return array;
  
  let copyOfArr = array.slice();
  copyOfArr.push(copyOfArr.shift());
  
  return copyOfArr;
 
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]