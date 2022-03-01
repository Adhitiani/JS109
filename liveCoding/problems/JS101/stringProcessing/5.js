/* Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

PROBLEM:
input: a string
output: a string

rules:
- return every lowercase letter to uppercase
- return every uppercase letter to lowercase
- leave all other characters unchanged

EXAMPLE
CamelCase --> cAMELcASE

DATA STRUCTURE
string --> string
array

ALGHORITM
1.convert the string to an array of characters
2. iterate over the array. For each of character check:
   if the char is lower case, replace it with Upper case
   if the char is uppercase, replace it with lower case
   do nothing other wise
3. convert back the array to a string
4. return the string   

*/

function swapCase(string) {
  return string.split('')
               .map(char => {
                  if (char === char.toLowerCase()) {
                    return char = char.toUpperCase();
                  } else if (char === char.toUpperCase()) {
                    return char = char.toLowerCase();
                  } else {
                    return char;
                  }; 
                })
                .join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
