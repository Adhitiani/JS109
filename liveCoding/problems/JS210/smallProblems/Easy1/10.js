/*UTF-16 String Value

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples:

Copy Code
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

Problem:
input: a string
output: number

rules
explicit
- return the sum of the UTF-16 values of each char in the string
- use charCodeAt();

implicit
- return 0 if the input is empty string
- assume empty space is a cahracter

EXAMPLE
a --> 97

DATA STRUCTURE
string --> array -->number

ALGO
- convert the string to an array of character
- create a 'result' and initialized it to 0
- if the input is an empty string return the result.
- iterate over the array
  - for each of character:
    - find the UTF values
    - add the UTF value to the result char
- return the result  

*/

function utf16Value(str) {
  let arrChar = str.split('');
  let result = 0;
  if (str === '') return result;
   
  arrChar.forEach(char => {
    result += char.charCodeAt();
  }) 
    return result;
   
 }
 
 console.log(utf16Value('Four score'))          // 984
 console.log(utf16Value('Launch School'))
 console.log(utf16Value('a'))
 console.log(utf16Value(''))
 
 const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
 utf16Value(OMEGA);                  // 937
 utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
 console.log(utf16Value(OMEGA));
 console.log(utf16Value(OMEGA + OMEGA + OMEGA))
 
 ///
 
 function utf16Value1(str) {
   return str.split('')
             .map(char => char.charCodeAt())
             .reduce((sum,num) => sum + num, 0);
 }
 
 console.log(utf16Value1('Four score'))          // 984
 console.log(utf16Value1('Launch School'))
 console.log(utf16Value1('a'))
 console.log(utf16Value1(''))
 
 const OMEGA1 = "\u03A9";             // UTF-16 character 'Ω' (omega)
 utf16Value1(OMEGA1);                  // 937
 utf16Value1(OMEGA1 + OMEGA1 + OMEGA1);  // 2811
 console.log(utf16Value1(OMEGA1));
 console.log(utf16Value1(OMEGA1 + OMEGA1 + OMEGA1))
 
 
 