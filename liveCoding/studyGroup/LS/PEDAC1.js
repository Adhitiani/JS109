// The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]

console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

/* Problem
  Input: An unsorted, flat array of unique, positive integer numbers
  Output: A nested array of number pairs
  
  Questions: 
  
  - Can we assume that the input will ONLY contain numbers?
  - Are there negative numbers?
  - Can we assume 'integers only'? (no floats or other number weirdness)
  - If we're sorting pairs, is it the pairs that should be sorted?  or the array of pairs? and on which values? - Maybe not important if numbers are 'unique'
  
  Rules/Assumptions:
  
  - Input is order-independent
  - Numbers will be unique (input & output)
  - Output Sort order is numerically ascending (order dependent)
  -numbers that don't have a difference of two with any other number from the input array are ignored
  -if no numbers have a difference of two, return an empty array
  -each pair should be sorted as well as the outer output array
  -a number might appear in two pairs
  
  Data structures:
    -array
    -maybe `sort` to sort the array
    -`reduce`
    -`slice`

ALGORITHM - HyoSung
- input array of integers
- initialize `result` to an empty array
- sort the input array in ascending order
- iterate through sorted array
  - iterate through elements
    - if element at higher index position minus the element at adjacent lower index position equals 2, push both elements to `result` array
- return nested arrays of paired numbers 

ALGORITHM - Jeff
- Create a results array
- Start by sorting the input array of numbers in acending order to allow us to determine whether adjacent numbers are 2 apart.
- For each element of the array
  - Iterate over the array and compare the currentElement to each element of the array
    - If (innerElement - currentElement == 2)
      - Add both elements to an array
      - Add the array to a results array
- Return the results array

Brian
1. Declare an empty array litteral variable
  - Will be used to create new sub arrays
2. Iterate through the array
  - For each of the elements, we want to compare with every other element
    - Valid if the difference between the two current elements = 2
3. If difference from current pair is 2, push the 2 numbers (from a copy of the input array to the empty array created on step 1)
4. Re assign the array from step 1 to be an empty array again
5. After iteration is complete with repeated steps of 2-4, sort the array based off either index 0 or 1 numerically



Gianni:
- Set function differenceOfTwo(inputArr)
  - set resultArr = []
  - set sortedArr = shallowcopy of inputArr, sorted.
  - for each element of sortedArr
    - for each larger element in sortedArr
      - if element2 - element1 is equal to 2
        - add [element1, element2] as a new element to the resultArr
  - return resultArr

  
  
    Algorithm:
  -declare a `result` array
  -sort the input array
  -for each number in the array
    -loop over the rest of the array
      -if the difference between that number and the current number is 2
        -create an array of the two numbers and push it in `result`



function differenceOfTwo(nums) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let result = [];

  sortedNums.forEach((num, idx) => {
    sortedNums.slice(idx).forEach(nextNum => {
      if (nextNum - num === 2) result.push([num, nextNum]);
    });
  });

  return result;
}

function differenceOfTwo(array) {
  let result = [];
  let sortedArray = array.sort((a, b) => a - b);
  for (let idx = 0; idx < sortedArray.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= sortedArray.length; jdx += 1) {
      if (sortedArray[jdx] - sortedArray[idx] === 2) {
        result.push([sortedArray[idx], sortedArray[jdx]])
      }
    }
  }
  return result;
}

  
Adhit:

1. create a 'result' array --> []
2. sort the array
  [4, 1, 2, 3] --> [1, 2, 3, 4]
3. iterate over the array:
   - for each of the element, loop over the rest of the element.
    - if the difference between the element with the current number is 2
      - create an array of the two number and push it in the empty array

   [1, 2, 3, 4]
   []
   first element: 1
    1st 2 - 1 = 1
    2nd 3 - 1 = 2 --> [1, 3]
    3rd 4 - 1 = 3 
   second element: 2
    1st 3 - 2 = 1
    2nd 4 - 2 = 2 --> [2, 4] 
  
4. retrun the result array      
   
  */



function differenceOfTwo(array) {
  let result = [];
  let sortedArray = array.slice().sort((a,b) => a -b);
  
  
  for (let index = 0; index < sortedArray.length; index += 1) {
    let currentElement = sortedArray[index];
      for(let index2 = 1; index2 < sortedArray.length; index2 += 1) {
        let nextElement = sortedArray[index2]
       if(nextElement - currentElement === 2) {
         result.push([currentElement, nextElement]);
       }
     }
  }

  return result;

};







