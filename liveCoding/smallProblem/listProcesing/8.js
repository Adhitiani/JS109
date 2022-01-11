// Grocery List

// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/* 
Problem:
input: a nested array
      - the sub array is consist of a string (the fruit name) and a number (quantity)
output: array

Rules:
- the returned array is contain each fruit name appears the same number as quantity

EXAMPLE:
see below

Data Structure
nested array --> array

ALghoritm:
1. create an empty array
2. iterate over the array
   - for each subarray:
     - push the first element to the result array
     - while the second element is bigger than 0
     - decreament the number by 1
3. return the result array
*/

function buyFruit(array) {
  let result = [];
  array.forEach(subArray => {
    while(subArray[1] > 0) {
      result.push(subArray[0]);
      subArray[1] -= 1;
    };
  });
  
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
