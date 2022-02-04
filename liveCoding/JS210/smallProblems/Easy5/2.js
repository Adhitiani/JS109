/*Double Char Part 2

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

rules:
- return a string:
  - double only consonant

A:
-create an empty string to hold the result
- iterate over the string
- for each of char:
  - check if it's consonant
    - if it's:
       - double the char
       - concatenated tot he string result
    - if it'd not:
       - concatenated to the string result
- return the string result

to check consonant:
- the char is not included in the aeiuo AND
- the char is letter

*/

function isConsonant(char) {
  return (!'aiueo'.includes(char) && (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'));
 };
 
 function doubleConsonants(str) {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
     if(isConsonant(str[i])) {
      newStr += str[i].repeat(2);
     } else {
       newStr += str[i];
     }
   };
   console.log(newStr);
 }
 
 
 console.log(doubleConsonants('String'));          // "SSttrrinngg"
 doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
 doubleConsonants('July 4th');        // "JJullyy 4tthh"
 doubleConsonants('');   // ""
 
 
 
 