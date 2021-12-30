/* Odd Lists

Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Problem:
- input: an array
- ouput:  assume it's a new array with the element of every other element of an original array.
   --- the element of the odd index number.


Examples:
[2, 3, 4, 5, 6] --> [2, 4, 6]

Data structure:
input: an array
output: an array

Algort:
1. iterate over the array, check the index of the cureent element, if its's an odd number places it in a new array.

Copy Code */

function oddities(arr) {
let newArr = [];
 arr.forEach((num, idx) => {
   if(idx % 2 === 0) {
     newArr.push(num);
   };
 })

 return newArr;

}

function eveness(arr) {
  return arr.filter((_, idx) => idx % 2);
}


console.log(eveness([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
