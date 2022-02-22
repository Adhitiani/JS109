/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

- init the result to an empty array
-
- do the iteration while the length of the number is >= 1
- get the result of the mulitpy all the element
- push the result to an array
- reassign the 

*/

function persistence(num) {
  let result = [];
  
  while (String(num).length > 1) {
    let arr = String(num).split('');
    let multiply = arr.reduce((multi, ele) => multi * ele, 1);
    result.push(multiply);
    num = multiply;
  }
  return result.length;
}

console.log(persistence(39)); 
console.log(persistence(999));
console.log(persistence(4))