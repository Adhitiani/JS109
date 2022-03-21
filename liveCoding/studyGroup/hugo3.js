/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/
/*
PROBLEM
input: string
output: string

rules/question:
- move the first letter to the end of each word
- add 'ay' to the end of the word
- leave the punctuation mark untouched
- assume that the punctuation is always at the end of the word

EXAMPLE
'Pig latin is cool.'
igPay atinlay siay 

'Pig latin is oolcay. Hello orldway!'

cool.
[c, o, o, l, .]
 
o, o, l, + c + ay .

DATA STRUCTURE
input: string
array to separeted the words

output: string

ALGORITHM
// convert the string to an array of word
// iterate over the array of word
   - for each word
     - convert the string to an array of characters
     - check if the last character is a letter
       - take the first char and concatenated with the rest of characters concatenated with 'ay'
        - replace the string with the new string
     - else 
       - take the first char and concatenated with the rest of characters but not included the last char and concatenated with 'ay' + concatenated with the last char
       - replace the string with the new string
// end iteration
// convert the array of string to string
// return the string 
*/

function pigIt(str) {
  let arrWords = str.split(' ');
  let result = arrWords.map(word => {
    let arrChar = word.split('');

   if(arrChar[arrChar.length - 1].toLowerCase() !== arrChar[arrChar.length - 1].toUpperCase()) {
    return arrChar.slice(1).join('') + arrChar[0] + 'ay';
   } else {
     return arrChar.slice(1,arrChar.length - 1).join('') + arrChar[0] + 'ay' + arrChar[arrChar.length - 1]
   } 
  })
  return result.join(' ');
}


console.log(pigIt('Pig latin is cool.')); // igPay atinlay siay oolcay.
console.log(pigIt('Hello world!'));     // elloHay orldway!

//cay.
//undefined
//way!