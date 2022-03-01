/*Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

A:
- separate the string to an array of words
  - init an empty array 'words'
  - init an empty string 'temp'
  - iterate over the string
  - in each of iteration:
    - if the curr char is a lowercase letter:
      - concatenated temp with currChar
    - if currentChar is upperCase letter:
      - push the 'temp' to the array 'words'
      - reassign 'temp' to an empty string
      - concatenated 'temp' with the current char
- push the remaining 'temp' to 'Words';      
- join the array to string with '-'
return the string
*/

function kebabize(str) {
  let words = [];
  let temp = '';
  
  for (let i = 0; i < str.length; i++) {
    if(str[i] >= 'a' && str[i] <= 'z') {
      temp += str[i];
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      words.push(temp);
      temp = '';
      temp += str[i].toLowerCase();
    }
  }
   words.push(temp);
   if(words.length === 1) return words[0];
   if(words.join('-')[0] ==='-') return words.join('-').slice(1)
   return words.join('-');
}