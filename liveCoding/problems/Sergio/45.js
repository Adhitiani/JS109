/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

A:
-convert the string to an array of words
- iterate over the array
  - for each of word
  - if the length is greater or equal to 5
    - convert the string to an array, reverse the array, convert back to string
  - else 
    - do nothing  
- end iteration
- convert the array to string
- return the string
*/

function spinWords(string) {
  let arrWords = string.split(' ');
  arrWords = arrWords.map(word => {
    if(word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })
  return arrWords.join(' ');
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
