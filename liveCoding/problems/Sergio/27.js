/*Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
  let arrChar = str.split('');
  let duplicate = arrChar.filter(char => arrChar.indexOf(char) !== arrChar.lastIndexOf(char));
  return duplicate.join('');
}