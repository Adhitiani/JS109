/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
/*
PROBLEM
input: an array of number
output: a number; the most frequent in the given input array


rules/question:
- if there is a tie return the largest number

EXAMPLE

DATA STRUCTURE

ALGORITHM
//get the number of occurance of the elements
  - init obj to {}
  - iterate over the array
    - if the current element exist in obj
      - increment the value by occurance
    - else 
      - add new propertiey with the value of 1  
  - end iteration
//get the highest occurance among them
- convert the object to a nested array
- sort the nested array based on the second element in the nested array
- return the first element of the nested array

*/

function highestRank(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  let nestedArr = Object.entries(obj);
  nestedArr.sort((a, b) => b[1] - a[1]);
  console.log(nestedArr[0][1] === nestedArr[1][1]) 
  return nestedArr[0][0];
}

console.log(highestRank([12,10,8,12,7,6,4,10,12,10]))

/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
/*
PROBLEM
input: an array of number
output: number
the most frequent appear in the array

rules/question:
- if it appears the same return the biggest number

EXAMPLE

DATA STRUCTURE

ALGORITHM
// get the number of occurance for each of number
   - init 'obj' to {}
   - iterate over the array
    - if the curr char is exist as properties in the 'obj'
      - increment the value by one
    - else
      - add a new properti with the value of 1  
   - end iteration
// find the most frequent one
   - init 'mostFrequent' to 0
   - init 'result' to 0
   - extract the keys of the 'obj'
   - iterate over the keys
     if the associated value of keys is greater than 'mostFrequent'
       most frequent = associated value
       result = current key         
   - end iteration
   return result
*/


function highestRank(arr){
  let occurance = {};
  arr.forEach(num => {
    occurance[num] = occurance[num] + 1 || 1;
  })
  let keys = Object.keys(occurance);
  keys.sort((a,b) => Number(b) - Number(a));

  let result = 0;
  let frequent = 0;
  keys.forEach(key => {
     if (occurance[key] > frequent) {
       frequent = occurance[key];
       result = Number(key);
     }
  })
  return result;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) //              -->  12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])) //          -->  12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])) //  -->   3