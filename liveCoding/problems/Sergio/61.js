/*Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""



Problem
input: string
output: string

rules:
- # is bakcspace means it deleted one previous char before the #
- return new string that its charactes has been process / deleted by #

Data structure
string
array
string

Algorithm
- convert the stirng to an array of char
- init copyOfArray to the copy of array of char
- iterate over the copyOfArray start with index 1
  - init curr char to copyOfArray[i]
  - init prevchar to copyOfArray[i - 1]
  - if currChar is #
    - delete the currentChar and the previous one in arrayOfChar
      - find the index of prevChar in arrayOfChar
      - take out the char at that index position in the arrayOfChar
- end iteration
- return arrayOfChay.join('')
*/

function cleanString1(str) {
  let arrChars = str.split('');
  let copyArr = arrChars.slice();

  for (let i = 1; i < copyArr.length; i++) {
    let currChar = copyArr[i];
    let prevChar = arrChars[i -1];
    let idx = arrChars.indexOf(currChar);

    if(currChar === '#') {
        arrChars.splice(idx - 1, 2 );
      }
    if(arrChars[0] === '#') arrChars.shift();  
    }
  return arrChars.join('');
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');

function cleanString(str) {
  const result = []
  for (const char of str) {
    if (char === "#") {
      result.pop()
    } else {
      result.push(char)
    }
  }
  return result.join("")
}
