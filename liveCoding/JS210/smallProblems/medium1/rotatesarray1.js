/*Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

Copy Code
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;  // [1, 2, 3, 4]


P:
input: an array
output: a new array

rules:
- return an new array where the first element move to the end of array
- do not modify the original array
- if the input is not array returnd undefiend
- if the input is an empty array return empty array
- 

E:
see above

D:
array --> array

A:
- if the input is not an array return undefined
- if the array length is 0 return an empty array

- slice the first element
- slice the rest of the element start from the second element to the end
- concatenated an emtpy array with the second element to the end  and the first element
- retun the new array

*/

function rotateArray1(arr) {
  if (!Array.isArray(arr)) return 'undefined';
  if (arr.length === 0) return [];
  
  let first = arr.slice(0, 1);
  let restElem = arr.slice(1);
  
  return [].concat(restElem, first);
}

console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
console.log(rotateArray([]));                       // []
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []


const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);  // [1, 2, 3, 4]


///
/*
- copy the input array and assign it to 'newArr'
- take the first char of 'newArr' annd push it
- return the newArr

*/

function rotateArray2(arr) {
  if (!Array.isArray(arr)) return 'undefined';
  if (arr.length === 0) return [];
  
  let newArr = arr.slice();
  
  let first = newArr.shift()
 
  newArr.push(first);
  return newArr;
}

// slice and concat


function rotateArray(arr) {
  if (!Array.isArray(arr)) return ;
  
  return arr.slice(1).concat(arr.slice(0, 1));
};