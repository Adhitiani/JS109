/*Search Word Part 1

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.


*/



const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';


function searchWord1(word, sentences) {
  return sentences.toLowerCase().split(word).length - 1;
}


function searchWord2(searchWord, sentences) {
  let arrWords = sentences.toLowerCase().split(' ');
  return arrWords.filter(word => word === searchWord).length;
}

function searchWord(searchWord, sentences) {
  let arrWords = sentences.toLowerCase().split(' ');
  let result = [];
  arrWords.forEach(word => {
    if (word === searchWord) {
      result.push(word);
    }
  })
  return result.length;
}
console.log(searchWord('sed', text));      // 3

/*Search Word Part 1

Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

input: a word and a string of text
output: a number of times the word appears in the text

A:
- convert the string to an array of word
- init 'count' to 0
- iterate over the string of word:
- for each of the word
  - if the word.toLowerCase() === search word
  - increment 'count' by one
- return the 'count'  

*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// search word as individual
function searchWord(searchWord, text) {
  let arrWords = text.split(' ');
  let count = 0;
  
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].toLowerCase() === searchWord) {
      count += 1;
    }
  }
  return count;
}

console.log(searchWord('sed', text));      // 3

// search any match char sequences

function searchWord1(searchWord, text) {
  let arrWords = text.split(' ');
  let count = 0;
  
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].toLowerCase().includes(searchWord)) {
      count += 1;
    }
  }
  return count;
}

console.log(searchWord1('qui', text));      // 3