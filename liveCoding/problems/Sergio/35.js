/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

A:
- filter the array with only the odd numbers
- sort the array in ascending order
- iterate over the original array
  - if the current number is even
    - add the current number to the sorted array in the same index
- end iteration
- return the sorted array
*/
function sortArray(array) {
  let odd = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      odd.splice(i, 0, array[i])
    }
  }
  console.log(odd);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]) === [1, 3, 2, 8, 5, 4])

// filter the array to only left with the odd number
// iterate over the input array
// add the even number to the sorted odd array based on its index

function sortArray(array) {
  let odd = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      odd.splice(i, 0, array[i])
    }
  }
  console.log(odd);
}

function sortArray(array) {
  let odd = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  return array.map(num => {
    if (num % 2 !== 0) {
      return odd.shift();
    } else {
      return num;
    }
  })
  
  }