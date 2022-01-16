/* Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

PROBLEM:
input: 2 string
      - a word
      - a text
output: a number

Rules:
- return the number of times the word appears in the text
- arguments will be always provided
- all word break are spaces
- word with the non char is the same word? bob === bob, ? assume that word is not case sensitive but if it has the non char it is not the same

EXAMPLE:
'bob text'
let text = 'bob come home to bob, bob, home'

Alghoritm
1. create a counter and initialized it to 0
2. convert the text string to an array of word
3. iterate over the array, for each word check:
   - if it's the same as the given string argument
     - increment the counter by 1
4. return the counter     

Copy Code */

function searchWord(searchWord, textWord) {
  let counter = 0;
  textWord.split(' ').forEach(word => {
    if(word.toLowerCase() === searchWord) counter += 1;
  });
  return counter;
};

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3


// with filter

console.log(searchWord1('sed', text));      // 3

function searchWord1(searchWord, textString) {
  let words = textString.split(' ');
  let word = words.filter(word => {
    return word.toLowerCase() === searchWord;
  });
  return word.length
}