/* How Many?

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:

Copy Code
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2 

Problem: 
input: an array
output: string with number

Rules:
- word are case sensitive
("suv" !== "SUV")

EXAMPLE:

DATA STRUCTURE:
input: an array
output: string with number
Object

ALGORITM:
1. create an empty object
2. iterate over the array, for each element:
   - check if the element is exist as the key in the object:
     - if so increment the associated value by 1
     - if not add the name of the key is the element with the value 1
3. extract the all the key from the object
4. iterate over the key object and display the string interpolation of the key and associated value     

*/

function countOccurrences(array) {
  let obj = {};

  for (let index = 0; index < array.length; index += 1) {
    if(obj[array[index]]) {
      obj[array[index]] += 1;
    } else {
      obj[array[index]] = 1;
    }
  };
  
  let keys = Object.keys(obj);
  
  keys.forEach(vehicle => {
    console.log(`${vehicle} => ${obj[vehicle]}`)
  })
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// for / in loop and short circuit operator