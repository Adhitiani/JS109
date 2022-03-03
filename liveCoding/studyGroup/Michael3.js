/*PROBLEM DESCRIPTION

The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2. 

The result array should be sorted in ascending order of values. 
Assume there are no duplicate numbers in the array. 
The order of the numbers in the input array should not matter. 

  PROBLEM:  
    intput: array;
    output: nested array; each pair that has a difference of 2.

  rules:
    Assume there are no duplicate numbers in the array.
    Return each pair of nums in ascending order;
    return each pair in its own array

  Example:
   [1, 2, 3, 4] =>  [[1, 3], [2, 4]]
   [4, 1, 2, 3] =>  [[1, 3], [2, 4]]
   [1, 23, 3, 4, 7] => [[1, 3]] 
  [1, 4, 7, 10, 13] => []

  DATA STRUCTURE:
  input: array
  sort the elements asscending
  init result
  iterate through first original index pos
    iterate through next index pos
  output: nested array; each pair that has a difference of 2; asscending

  ALGO:
  define differenceOfTwo with para array
  init result to empty array
   init sortedArr = sort the elements in asscending order;
  iterate through sortedArr with original index position
    iterate through sortedArr with the increased index position
      if the original index position and increased index position have dif of 2
        push elements in result []
          return result  
*/

function differenceOfTwo(array){
  let sortedArr = array.sort((a,b) => a - b);
  let result = [];

  sortedArr = sortedArr.filter((ele,index,array) => array.indexOf(ele) === index)

  for(let idx = 0; idx < sortedArr.length; idx++){
    for(let jdx = idx + 1; jdx < sortedArr.length; jdx++){
      if(sortedArr[idx] + Number(2) === sortedArr[jdx]){
        result.push([sortedArr[idx],sortedArr[jdx]])
      }
    }
  }
  return result
}

console.log(differenceOfTwo([1, 1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []