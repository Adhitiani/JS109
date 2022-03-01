/* Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.


Problem:
- A funciton with 2 arguments:
 -- an array: has 2 or more elements ["John", "Q", "Doe"] --> a person's name 'John Q Doe'
 -- an object: has two keys, title" and "occupation", and the appropriate values. { title: "Master", occupation: "Plumber" } --> 'Master Plumber'
- return a greeting --> a person full name + occupation and tittle

Input: array and object
output: string

Example: 
["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" } --> Hello, John Q Doe! Nice to have a Master Plumber around.

Data Structure
Input: array and object
output: string

Algortim:
1. Convert the array to a string and join them together
2. Extract the value from the object
3. return them in a string

Copy Code */

/* function greetings(arr, obj) {
 let fullName = arr.join(' ');
 let arrOcc = Object.values(obj);
 let occupation = arrOcc.join(' ');

 return `Hello, ${fullName}! Nice to have a ${occupation} around.`

} */

function greetings(arr, obj) {
  return `Hello, ${arr.join(' ')}! Nice to have a ${obj['title']} ${obj['occupation']} around.`

}


 console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
