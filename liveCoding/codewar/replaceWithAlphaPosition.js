/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

- create an array of alphabet
- convert the string to an array of char
- iterate over the char
- for each of char:
  - if it's alphabet, find the index of the char
  - push the index + 1 to the result array
- convert back the array to the string  
*/

function alphabetPosition(text) {
  let result = [];
  let alpha ='abcdefghijklmnopqrstuvwxyz'
  
 for (let i = 0; i < text.length; i++) {
   result.push(alpha.indexOf(text[i].toLowerCase()));
 }
  let onlyLetter = result.filter(num => num !== -1).map(num => num + 1);
  return onlyLetter.join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.")

// using the UTF-16 chr code

/*
- create a 'result' and init to an empty string
- iterate over the string
- for each of char:
  - find it's char code in its uppercase form
  - if the chad code is between 65 - 91 (A -Z)  concatenated the result with the 64 - char code
- return the string  


*/


function alphabetPosition1(text) {
  let result = '';
  let code = 0;
  
  
 for (let i = 0; i < text.length; i++) {
   code = text.toUpperCase().charCodeAt(i);
   if (code > 64 && code < 91) result += code - 64 + ' ';
 }
  return result;
}

alphabetPosition1("The sunset sets at twelve o' clock.")


//NOTE:
// _ read about charcodeAt
//- fromCharCode
// codePointAt