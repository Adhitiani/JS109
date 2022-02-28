/* let b = 1;

//Snippet 1

let a = 1;        

function logA() {
  console.log(a);  // 1
   return a += 1;   // 2       
}

logA(); // 2
console.log(a); // 2 => it's re-assigned on line 9   


// The key concept: Inner scope can access the variable in outer scope and when we re-assigned the variable in inner scope the change also happen in the variable in outer scope. 

//the variable `a` on line 9 is the global variable `a` on line 5. This is why when we re-assigned it inside the function the the change is visible in the outer scope variable.


//Snippet 2

let a = 1;        

function logA(a) {
  console.log(a);  // undefined
   return a += 1;          
}

logA(); // NAN
console.log(a); // 1

// The key concept: Variable shadowing. The parameter `a` shadowing the global variable `a` on line 22. It prevents the inner scope to access the variable on outer scope.

// The variable `a` that we reference in line 24 is not the global variable `a` on line 22

// When we invoke `logA()` without passing any argument to it, the parameter `a`'s implicit value is `undefined`. on line 26 then return `undefined += 1` which is `NaN`


// Snippet 3
let a = 1;        

function logA(a) {
  console.log(a);  // 1
   return a += 1;        
}

logA(a); // 2
console.log(a); // 1

// The key concept: 
//Pass by value => The value we passed as argument on line 47 is the value of the global variable `a`. Since `1` is a primitive value it's its copy that pass to the function. Whatever we do in the function won't effect the original variable `a`.

//Variable shadowing => The parameter `a` shadows the global variable `a` in outer scope. 



//function logA(a) { 
//  console.log(a)       
//}

//logA(c); // reference error

// The key concept: We can't use any variable without declaration or inner scope variable can't be accessed from outer scope(?)
//We declare `a` as a parameter (a local variable to the function) when we declare `logA` function (?)


// When we invoke `logA` with the value of variable `a` passed to it as an argument, the function can't find variable `a` in the outer scope. It throws an error.
// Does it means the variable `a` we reference on line 62 is not the same as the `a` parameter? is this variable shadowing?

// Do we replace a parameter when we passed the value of any variable in the function invocation?
// Why does the function look for variable `a` in outer scope not inside the function itself? When we use parameter in the function declaration we tell the function that we will supply a value(argument) from the outside of function. 

/*
let b = ['Hello'];

function changeValue(b) {
  console.log(b)
  console.log(b[0])
  b[0] = 'Goodbye';
}

changeValue(`hi`);
console.log(b);
*/


/*
function funcA() {
  let a = 'hello';
  console.log(a);
}



funcA();

*/
///

/*
What does this code log to the console, and what concepts does this demonstrate?
*/
/*
const checkEmpty = object => {
  return object == false;
}

console.log(checkEmpty(''));  // => true    
console.log(checkEmpty('hi'));   // => false

console.log(checkEmpty([])); // false     
console.log(checkEmpty([1]));   // false

console.log(checkEmpty({}));  // false  

console.log(checkEmpty()); // not true.  `undefined` only equals true to `null`

// This is not a good question, because it's testing your knowledge on how JS does type coercion when the two types are not the same. 

// You don't have to memorize this because you never want to do in this in your code basically. 

// Line we define a variable (a constant) and initialize to an arrow function. 
// This function takes a parameter object, and then return the return value of comparing two operands (one being the object) with value false using loose equality operator (==). 

// Line 8, comparing string and false
// What is the return value? => true

// What are the falsy values in JS? 
// - false 
// - undefined
// - empty string
// - 0
// - null
// - NaN

//Another situation occurs when comparing undefined and null. The == operator considers them equal:

//> undefined == null
//true

/*
The functions halfSlice and halfSubstring are supposed to return the
second-half of a string. But it looks like something got mixed up
while Elaine was learning JavaScript!

1) Explain why halfSlice logs an empty string '', and explain why
halfSubstring logs 'mal'

2) Explain what revisions should be done to both functions in order
to improve their clarity

*/

function halfSlice(string) {
  let midpoint = string.length / 2;
  let endpoint = string.length

  return string.slice(midpoint, endpoint); // 'animal'.slice(6, 3)
}

function halfSubstring(string) {
  let midpoint = string.length / 2;
  let endpoint = string.length

  return string.substring(endpoint, midpoint); // 'animal.substring(6,3) => swap the argument: 'animal'.substring(3, 6)
}

console.log(halfSlice('animal'));      // logs ''
console.log(halfSubstring('animal'));  // logs mal

// slice method extract the string starting from the index at the first argument until the second argument but not up to the character on that end index.
// starting point: endpoint => animal.length // 6
// end point : 'animal'.length / 2 // 3

// Description
// substring() extracts characters from indexStart up to but not including indexEnd. In particular:

// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// - If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; See example below.
// Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.

// Any argument value that is NaN is treated as if it were 0.

//// What is `a` and `b` at the end of this code? Explain why (what concept does it demonstrate)? 
// `a` will output ...... 'b' will output ...... Explain why it outputs those values. 

// How can you fix the code so that it outputs .....  instead of  ...... .  


function fix(value) {
  value.push('xyz'); // 
  value = value.concat("abc");
  return value
}

let a = ['hello', 'world']
let b = fix(a)

console.log(a);
console.log(b);




// Advice 
// - Don't explain function definition (unless you have to), instead explain function invocation. 

// Start at line 13, 14, invoke function , 7 - 11, 16, 17 to explain the output value. 

// Start with function definition
// Start at line 7 - 11, 13, 14, invoke function, 7 - 11, 16, 17 - repeating yourself and higher possibility of making mistakes. 

// We declare variable named `a` and assigned it to an array on line 13

// On line 14 we declare a variable named `b` and assigned it to the return value of invoking `fix` function with the value of `a` passed to it as an argument
// When we invoke `fix` we pass the value of a which is `['hello', 'world']`. 

// At this point `b` and `value` are both pointing to this same array. 

// Within the funciton body, on line 8 we call the push method on `['hello', 'world']` with xyz passed as an argument. `push` is a destructive method that appends `xyz` to the array that variable value is pointing at. At this point, `value` and `b` are both pointing at `['hello', 'world', 'xyz]`. 

// It appends the argument to the array and returns `['hello', 'world', 'xyz].



//  2 options - 
// a) you mention that return value and say we don't do anything with this return value. mention the fact that is is a destructive that changes the value that the variable is pointing at. 
// b) you don't mention the return value at all because it's not relevant to the question. mention the fact that is is a destructive that changes the value that the variable is pointing at. 




// on line 9 we reassigned the variable value to the return value of calling concat method on variable `value` and passed 'abc' as an argument. The variable value now is reassigned to  `['hello', 'world', 'xyz', 'abc']. This is the value that returned on line 10. (concat is not a destructive method. It doesn't change the value being pointed at by `value` and it returns a new array which is then re-assigned to `value`. )

// on line 17 when we called `console.log' with the vallue of variable `b` passed as its argument, it logs `['hello', 'world', 'xyz', 'abc'].

// on line 16 when we called `console.log' with the vallue of variable `a` passed as its argument, it logs `['hello', 'world', 'xyz]. because on line 8 push method mutate the array.

// This code demonstrates the concept of variables as pointers and how destructive methods can mutate arguments that is passed into a function as explained above. This is why a logs `['hello', 'world', 'xyz']` and `['hello', 'world', 'xyz', 'abc']`

//// What is `names` at the end of this code? Explain what concept does it demonstrate? 

function addName(arr, name) {
   arr.push(name);
}

let names = ['anne', 'bella'];
addName(names, 'cathy')
console.log(names);

// On line 7 we declare a variable named `names` and assigned it to an array.
// On line 8 we invoke function `addName` and passed two arguments, a  the value of names and a string `cathy`.


// When we invoke the function,


// At this point, arr and names are pointing to the same array. and `name` is pointing to the string `cathy`.


// within the funciton body we call push method on the array `names` with string `cathy` passed as it's argument. Push method is a destructive method, it appends the argument to the array it's called on. At this point, the value of variable names is ['anne', 'bella', 'cathy']; Since the function doesn't explicitly return something, it returns undefined on line 8.

// on line 9 console.log is called with the value of variable names as the argument, it logs ['anne', 'bella', 'cathy']. It's because the push method is destructive method.
//This code describe the variable as pointer and the method destruction.



// This code logs 3, why doesn't it log 0. Explain the concept behind this code. 

let a = 0;

function log(a) {
  console.log(a)
}

log(3); 

let c = console.log(a) 
let d = 'hello world'

if (c) {
  console.log("I am truthy")
} else {
  console.log("I am output instead.")
}

*/

