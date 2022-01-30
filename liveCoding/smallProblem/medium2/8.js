/*Longest Sentence

Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

Example:

Copy Code
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

PROBLEM:
input: string
output: string

PROBLEM
Explicit
- log the longest sentence and the word length
  - the longest sentence
  - "The longest sentence has 6 words"
- sentence end with ! or . or ?
- any sequence char that is not sentence ending or space are words
- preserve the punctuation from the end of the sentence.
- every detail about the string matters

Implicit

EXAMPLE
"To be or not to be! Is that the question?"
To be or not to be!
The longest sentence has 6 words.

DATA STRUCTURE
string --> array --> string

ALGO
- create a result array and initialized it to an empty array
- create an empty array to hold the temporary string
- create a 'wordNumber' and initialized it with 0

get all the sentences in the strings
- convert the string to an array of words --> "[, be, or, not, to, be!, Is, that, the, question?]
- iterate over the array of words, for each of word:
  - push the word to the temp array
  - check if the ending is !, ., or ?
    - if it's:     
      - if the temp length is greater than the array result, reassign the array result to the temp array.
      - compare the result array length to the word number
        - if its greater than the word number length, reassign the word nummber with  the array length.
      - reassign the temp array to an empty array
- convert the array to a string
- log the string
- log the word number
    
*/

function longestSentence(str) {
 let sentenceArr = [];
 let temp = [];
 let wordNumber = 0;
  
 let wordsArr = str.split(' ');
  
  wordsArr.forEach(word => {
    temp.push(word)
    
    if(word.endsWith('!') || word.endsWith('?') || word.endsWith('.')) {
       if (temp.length > sentenceArr.length) sentenceArr = temp;
       if(sentenceArr.length > wordNumber) wordNumber = sentenceArr.length;
       temp = [];
       };
       
  });
  console.log(sentenceArr.join(' '));
  console.log(`The longest sentence has ${wordNumber} words`);            
}

console.log(longestSentence("To be or not to be! Is that the question?"))

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));
console.log(longestSentence(longerText));