/* Double Char (Part 1)

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

PROBLEM:
input: a string
output: a string with double characters

Rules:
empty string returns an empty string
- all character are doubled including space

EXAMPLE:
'Good job!' --> GGoooodd  jjoobb!!

DATA STRUCTURE:
input: string
output: string
array

ALGHORITM
1. create a result variable of an empty string
2. iterate over the string, for each element
   - double the element and concatenated it with the result string
3. retrun the result string   

Copy Code */

// string

function repeater(str) {
  let doubleString = '';
  for (let index = 0; index < str.length; index += 1) {
    doubleString += str[index] + str[index];
  };
  return doubleString;
}


console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') ===  "GGoooodd  jjoobb!!");
console.log(repeater('') === "");

// array forEach

function repeater2(str) {
  let doubleString = "";

  str.split("").forEach(char => doubleString += char.repeat(2));
  return doubleString; 

}

console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') ===  "GGoooodd  jjoobb!!");
console.log(repeater('') === "");

// array map
function repeater3(str) {
  return str.split('').map(char => char + char).join('');
}

console.log(repeater3('Hello') === "HHeelllloo");
console.log(repeater3('Good job!') ===  "GGoooodd  jjoobb!!");
console.log(repeater3('') === "");

// array reduce

function repeater4(str) {
  return str.split('').reduce((acc, curr) => acc + curr + curr, '');
}

console.log(repeater4('Hello') === "HHeelllloo");
console.log(repeater4('Good job!') ===  "GGoooodd  jjoobb!!");
console.log(repeater4('') === "");