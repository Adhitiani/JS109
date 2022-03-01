/*Double Char Part 1

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

A:
- create an emtpy string to hold the result
- iterate over the string
- for each of char:
  - concatenated the result string with the char twice
- return the new string  
*/

function repeater(str) {
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  };
  
  return newStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// with reduce

function repeater1(str) {
  return [...str].reduce((newStr, char) => newStr + char + char, '');
};

console.log(repeater1('Hello'));        // "HHeelllloo"
console.log(repeater1('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater1(''));             // ""
