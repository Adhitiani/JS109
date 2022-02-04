/*How Many

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

P
input: an array
output: a string

rules:
- count the number of occurrences of each element in the array
- log each element witht he number of occurances


E:

see above

D:
array --> object --> string

A
- create an empty object 
- iterate over the input array
  - for each of character:
    - if the key value pair associated with the element is exist, increment the value by one
    - if it doesn't exist add the current key value pairs to the object with the initial value of one
- iterate over the object and in each iteration log the vehicles and the associated value    
*/

function countOccurrences(list) {
  let obj = {};
  
  for (let i = 0; i < list.length; i++) {
    if (obj[list[i]]) {
      obj[list[i]] += 1;
    } else {
      obj[list[i]] = 1;
    };
  }
  for (let vehic in obj) {
    console.log(vehic + ' => ' + obj[vehic])
  };
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);