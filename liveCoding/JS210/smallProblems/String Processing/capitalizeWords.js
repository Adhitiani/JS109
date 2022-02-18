/*Capitalize Words

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

P:
input: a string
output: a string ( the first char of word capitalized)

rules:
- word is any sequence of non-whitespaced

A:
- convert the string to an array word 
- iterate over the word:
- for each of the word:
- if the first char is letter:
  - separate the first char and the rest of char
  - convert the first char to upperCase and concat it with the rest of the char
  - replace the word with the new form word
- else leave the word as it is
- convert back the array to a string separated by space
- return the string
  
*/
console.log(wordCap('four score and seven') === "Four Score And Seven")
console.log(wordCap('the javaScript language') === "The Javascript Language")
console.log(wordCap('this is a "quoted" word') ===  'This Is A "quoted" Word')

function wordCap1(str) {
  //console.log(arrOfWords);
  let arrOfWords = str.split(' ').map(word => {
    if(word[0].toUpperCase() !== word[0].toLowerCase()) {
      let first = word[0];
      let restChar = word.slice(1);
      return first.toUpperCase() + restChar.toLowerCase();
    } else {
      return word;
    }
  })
 return arrOfWords.join(' ');
}

// toLowerCase and to uppercase doesn't work on the string other than the alphabet. Either way the result will be the same

/*

*/

function wordCap(str) {
  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}