/*Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

A:
- init 'sortDone' to false
- do the iteration while there is still swap element (sortDone === false):
  - reassign the 'sortDone' to true
  - iterate over the array:
  - for each of element: compare it with the next element
    - if it's bigger than the next element swap the element
    - reassign 'swapped' = false
- if there is no more swap stp the loop (swapped === true)
- return the array
        
*/

function bubbleSort(array) {
  let sortDone = false;
  
  while(!sortDone) {
    sortDone = true;
    for (let i = 0; i < array.length; i++) { 
      if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          sortDone = false;
          }
    } 
  }
  return array;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]