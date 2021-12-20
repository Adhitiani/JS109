/* UTF-16 String Value

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples:

Problem:
- return the sum of the utf-16 string value of every characters.
- input: string
- output: number (the sum of utf-16)

example:
a --> 97
ab --> 97 + 98

Data structure
input: string
output: number

maybe an array in between

Algorithm:
1. determine the string value of a character one by one
2. sum all the string value
3. return the sum

Copy Code */

function utf16Value(str) {
let total = 0;

for (let index = 0; index < str.length; index += 1) {
  total += str.charCodeAt(index)
 
};
 return total;

}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
const OMEGA = "\u03A9";  
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));

/* 
;         // 984
;      // 1251
;                  // 97
;                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
           // UTF-16 character 'Ω' (omega)
;                  // 937
;  // 2811 */
