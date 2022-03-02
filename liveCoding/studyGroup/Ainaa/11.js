/*[Kata Stats: Are they the "same"? \| Codewars](https://www.codewars.com/kata/550498447451fbbd7600041c)
6 kyu


Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

P:
input: two arrays
output: boolean (true or false)

rules:
- return true if both array are the same.
The same means:
  - the element in the second array are the elements in the first array squared
  - first array 'arr1' = original number
  - 'arr2' is the squared number of the 'arr1' elements
- the order is not important
- if the lenght of the two array are not the same return false
- if one or both of the array is an empty array return false


E:
a = [121, 144, 19, 161, 19, 144, 19, 11]
  = [14641,20736, 361, 25921, 361,20736,361, 121  ]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

D:
input: two arrays
output: boolean (true or false)

A:
// if 'arr1 leng' is not equal with 'arr2' lenght return false
// if 'arr1' === [] or arr2 === [] return false

// commpute all the squared in arr1 and assgin it to 'squared1'
   - iterate over the 'arr1'
     - multiply the element with itself
   -end of iteration
   
// check if the element in'squared1' is match with 'arr2' 
   - sort 'squared1 in ascending order, assgin it to 'sort1'
   - sort 'arr2' in ascending order, assign it to 'sort2'
   
   - iterate over sort1
    - if the curr element in sort 1 is not equal to the element in sort2 at the same index posiiton return false
   - end of iteration
- return true   
   


Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays
If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
If a or b are nil (or null or None), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.

Description could improve 
This example:
comp([2, 2, 3], [4, 9, 9]) // false 
because we can't pair the second 9 with any number. 
because we can't pair 2 to any 4

comp([2, 2, 3], [4, 4, 9]) // true

"This input should not expect True because cardinalities do not match.

A 2 from array1 can be paired with 4 from array2.
A 3 from array1 can be paired with 9 from array2.

The remaining 2 from array1 cannot be paired with any remaining element from array2."

=end
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) == true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11] , [132, 14641, 20736, 361, 25921, 361, 20736, 361])) == false
console.log(comp(null, [1, 2, 3])) == false
console.log(comp([1, 2], [])) == false
console.log(comp([1, 2], [1, 4, 4])) == false

A:
// if 'arr1 leng' is not equal with 'arr2' lenght return false
// if 'arr1' === [] or arr2 === [] return false

// compute all the squared in arr1 and assgin it to 'squared1'
   - iterate over the 'arr1'
     - multiply the element with itself
   -end of iteration
   
// check if the element in'squared1' is match with 'arr2' 
   - sort 'squared1 in ascending order, assgin it to 'sort1'
   - sort 'arr2' in ascending order, assign it to 'sort2'
   
   - iterate over sort1
    - if the curr element in sort 1 is not equal to the element in sort2 at the same index posiiton return false
   - end of iteration
- return true   

*/

function comp(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if( arr1.length === 0 || arr2.length === 0) return false;
  
  let squared1 = arr1.map(num => num * num);
  //console.log(squared1);
  let sort1 = squared1.sort((a, b) => a -b);
  let sort2 = arr2.sort((a, b) => a -b);
  
 for (let i = 0; i < sort1.length; i++) {
   if(sort1[i] !== sort2[i]) return false;
 }
  return true;
}

// without using sort 

// iterate through one array, 
// - find the index for that element in the second array. 
// - if index is not -1, splice out the current number 
// - if index is -1, then return false;
// if we reach the end and all numbers are splcied, the array is empty
// return true; 

// scrambled
// word, ord // true
// pineapple , apple // true
// ineaple, apple // false

// split the 'ineaple' into an array of characters
// we iterate through apple, for each letter 
//  - find the index for the current letter in the array of characters
//    - if index is -1, return false
//    - if the index exists, splice out the character from the array of characters 
// - we reach the end, all letters spliced, therefore reutrn true;

// count the letter
// we have the count the letters in apple 
/*
a = 1
p = 2
l = 1
e = 1

ineaple
i = 1
n = 1
e = 2
a = 1
p = 1
l = 1

for each count in the character, they must have a matching pair or more in the other object

let obj1
keys1 = Object.keys(obj)
keys.every(key,  => {
  let char = key;
  let count = obj1[key];

  // if it exists, it will run the next line of code, if not, it return undefined, therefore else is executed. 
  if (obj2[key]) {
    obj2[key] > obj1[key]; // true or false
  } else {
    return false
  }
  // iterate over the second array 
  // check if the char exists in the second object && the count in the second objects higher than count in first object
}
let todoList  = ['eat', 'buy groceris', ........., 'read book']
i finished buy groceries

*/

console.log(comp([1, 2], [1, 4, 4])) //== false;
console.log(comp([1, 2], [])) //== false;
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])) //== true
console.log(comp([1, 2], [])) // == false
console.log(comp([1, 2], [1, 4, 4])) // == false // true?
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11] , [132, 14641, 20736, 361, 25921, 361, 20736, 361])) //== false