/* Are arrays equal?
// snippet 1
[1, 2, 3] === [1, 2, 3] // return false

JS treats two arrays are are equal when they occupy the same space in the memory.
The example above shows they are two different array that happen to have the same elements. They both occupy different space in memory.

//Snippet 2
let a = [1, 2, 3];
let b = a;

b === a // true

The code aboves returns true because when we assign a variable that store an array to another variable, we make the new variable refers to the same array. Both variable a and b point to the same array [1, 2, 3].

If we want to chek if two arrays have the same element we can create a function that compare the element in one array with other element in the other:

A:
//compare if the two arrays have the same length
- if the length of arr1 and arr2 are not the same return false


// compare each other element:
- sort both of the array
- iterate over one of the array
- for each of element:
  - compare it with the element in the other array at the same index position
  - return false if they are not equal
- return true  

*/

function arrayEquals(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  
  let sorted1 = arr1.slice().sort();
  let sorted2 = arr2.slice().sort();
  
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }
  return true;
}

console.log(arrayEquals([1, 2, 3], [1, 3]));

console.log(arrayEquals([1, 2, 3, 6, 5, 4], [4, 5, 6, 3, 2, 1]));

// compare usign string
function arrayEquals(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  
  let sorted1 = arr1.slice().sort().join('');
  let sorted2 = arr2.slice().sort().join('');

  return sorted1 === sorted2;
}

console.log(arrayEquals([1, 2, 3], [1, 3, 5]));
console.log(arrayEquals([1, 2, 3, 6, 5, 4], [4, 5, 6, 3, 2, 1]));