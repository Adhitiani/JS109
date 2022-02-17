/*Grocery List

Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

P:
input: a nested array
output: an array

rules:
- the subarray input contain a fruit name and a number
- return an array of the fruit name that appears the same number as its associated  number

D: 
nested array --> array

A:
- init 'result' to an empty array
- convert the nested array to one dimension array
['apple', 3, 'orange', 1, 'banana', 2]
- iterate over the array
- in each iteration
  - if the element is string:
    - push the element 'n' number of times, while 'n' is the element in the current idx + 1
- return the result    


*/

function buyFruit(arr) {
  let result = [];
  let newArray = arr.flat();
  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === 'string') {
      let n = newArray[i + 1]
      while ( n > 0) {
        result.push(newArray[i])
        n -= 1;
      }
    }
  }
  return result;
}
console.log(buyFruit1([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// using map
/*
- iterate over the array
 - for each of subarray:
   - replace the element with 'n' number of the first element in the subarray
   - the 'n' is the second element in the subarray
   - assign the new array to 'fruitList':
     - init 'fruit' to an empty array
     - do iteration subarray[1] times
     - in each iteration push subarray[0] to 'fruit'
     - return 'fruit'
- flaten the 'fruitlist' to one dimension of array
- return the o'fruitlist'

*/

 function buyFruit(list) {
   let fruitList = list.map(subArray => {
     let fruit = [];
     for (let i = 0; i < subArray[1]; i++) {
       fruit.push(subArray[0]);
     }
    return fruit;
   })
   
   return fruitList.join().split(',');
 }

// using helper function
/*
repeat function:
- init 'fruit' to an empty array
- iterate n times (n is the array[1])
- in each iterataion push the array[0] to 'fruit'
- return 'fruit


*/

function buyFruit1(list) {
  return list.map(repeat).flat();
};

function repeat(arr) {
  let fruit = [];
  for (let i = 0; i < arr[1]; i++) {
    fruit.push(arr[0]);
  }
  return fruit;
}