/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

Problem:
input: a nested array
- the nested array is an array of number 0 and 1
output: an array
- the location of 1
  - the first element of the array is the row (the position of nested element in the array)
  - the second elemnt of the array is the element position in the nested array
  
rules:
- all the nested array will be square
-there will be only '1' in the nested array
- the input array always will be a nested array 

Example:

[ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] [1,1]
[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] [2,1]

Data S:
input: a nested array
output: an array

A:
// iterate over the array
  // iterate over each of subarray
    - find the element that is equal to 1
      - return an array of two element
        - first element is the index of the subarray
        - the second element is the index of the current element in the subArray
  // end iteration
// end iteration
*/

// function mineLocation(arr) {
//   let result = [];
//   arr.forEach((subArray, idx) => {
//     for (let i = 0; i < subArray.length; i++) {
//       if(subArray[i] === 1) result = [idx, i];
//     }
//   })
//    return result;
// }

function mineLocation(field) {
  let mine = 1;
  let bombLocation = [];
  let rowLocation = 0;
  let column = 0;
  let rowToSearch = [];
  field.forEach((row, idx) => {
    if (row.includes(mine)) {
      rowLocation += idx;
      rowToSearch = row;
      bombLocation.push(rowLocation);
    }
  });
  rowToSearch.forEach((val, idx) => {
    if (val === mine) {
      column += idx;
      bombLocation.push(column);
    }
  });
  return bombLocation;
}

console.log(mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] )) //=> returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) //  => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) //  => returns [2, 1]
