/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

// convert the string to an array of words
// iterate over the array
   - for each word
     - convert the word to an array of character
     - iterate over the array
       - change the uppercase to lowecase
       - change lowercase to Uppercase
     - end iteration
     - joinback the array to string
// end iteration
// reverse the new array
// convert the array to string
// return the string
*/

function upperLowerCase(word) {
  let arrChar = word.split('');
  let newArr = arrChar.map(char => {
    if(char === char.toLowerCase()){
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  })
 return newArr.join('');
}

function stringTransformer(str) {
  let arrWords = str.split(' ');
  let arrTransformer = arrWords.map(word => upperLowerCase(word));
  return arrTransformer.reverse().join(' ');
}

console.log(stringTransformer('Example iNPUT'));