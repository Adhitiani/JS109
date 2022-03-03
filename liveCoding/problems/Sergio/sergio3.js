/*
Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:


P
- input: multiple arguments (strings or numbers)
- output: boolean
         - return true if it contains duplicate argument
         - return false otherwise

rules:
- no definite arguments passed (can be any number);
- if there is no argument passed in, return false
- what is duplicate?
  assume that duplicate means same type and value
  '2' is not equal with 2

E:
see below
D:
input: multiple arguments (strings or numbers)
array to store all the argument
output: boolean

A:
//store the arguments into an array; 'arr'
// check if there are any duplicate elements in the 'arr'
  - sort the 'arr'
  - iterate over the 'arr'
    - if the current element is equal to the next element
      - init 'currElem' to the  element in the current idx
      - init 'nextElem' curr element idx + 1
      - return true
  - end of iteration
  - return false 



 // return true if this method is called with duplicate argument values 
 // console.log([...arguments]); 
 // console.log(Array.from(arguments)); 
  // console.log(arr)
*/

function solution(...arr) {
 let sorted = arr.sort();
//console.log(sorted);
 for (let i = 0; i < sorted.length; i++) {
   let currElem = sorted[i];
   let nextElem = sorted[i + 1];

   if(currElem === nextElem) return true;
 } 
  return false;
}




console.log(solution(1, 2, 3));             // -->  false
console.log(solution(1, 2, 3, 2));          // -->  true
console.log(solution('1', '2', '3', '2'));  // -->  true
console.log(solution('1', '2', '3', 2));    // -->  false 
console.log(solution());                    // -->  false

