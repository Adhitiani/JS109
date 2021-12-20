//Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(str) {
  str = str.slice(0, str.length - 1);
  console.log(str);
}
