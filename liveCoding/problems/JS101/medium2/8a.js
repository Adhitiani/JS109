/*
Longest Sentence
Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

input: string
ouput: 2 string
- the longest sentence
- the number of the words in the sentence --> The longest sentence has 30 words

rules:
- sentence end with punctuation --> (.),(!),(?)

Example:

"Where do you think you're going? 
 What's up, Doc?"

Data:
input string
array 
output: string


 ["What's", "up.", "Doc?" ]
 start inex = 0
 iterate over the word
 - check if the word has punctuation
 - at index 1 --> up
 - slice 0 - the index of the word + 1
 - start index = index 1
 

A:
// split up the sentence to an array of words

// slice the array based on the words that has punctuation at the end
   - init punctuation to (all the puncutation )
   - init start index = 0
   - iterate over the array of word
     - check if the word has the punctuatuin
     - slice it start from start index to the inedx of the word with punctuation 
     - reassing the start index to the index of the word with punctuation + 1
     - push the slice array to a new array
   - end iteration 
// put the sentence in a new array
nested array of a sentence

iterate over the element in the array
- initial the longest to 0
- for each element:
  - count the element in the array
  - if the element is greater than 0 then reassing longest to element length

// return the longest the element in string form  and the he longest sentence has length of words.
// 

*/

function longestSentence(text) {
  let arrWord = text.split(' ');
  let punc = '.!?';
  let start = 0;
  let arrSentence = [];
  
  arrWord.forEach((word, idx) => {
    if(word.endsWith('!') || word.endsWith('.') || word.endsWith('?')) {
      arrSentence.push(arrWord.slice(start, idx + 1));
      start = idx + 1;
    }
  })
  
  let longest = 0;
  let longestSentence = ''
  arrSentence.forEach(sentence => {
    if(sentence.length > longest) {
     longest = sentence.length;
     longestSentence = sentence;
    }
  })
  console.log(longestSentence.join(' '))
  console.log(`The longest sentence has ${longest} words.`)
}


function longestSentence(text) {
  let textArr = text.split(' ');
  let sentenceArr = []
  let nestedArr = [];

  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i].includes('.') || textArr[i].includes('?') || textArr[i].includes('!')) {
      sentenceArr.push(textArr[i]);
      nestedArr.push(sentenceArr);
      // console.log(sentenceArr);
      sentenceArr = [];
      continue;
    }
    sentenceArr.push(textArr[i]);
  }
  // console.log(nestedArr);
  
  let lengthArr = nestedArr.map(sentence => sentence.length);
  let highestLength = Math.max(...lengthArr);
  let index = lengthArr.indexOf(highestLength);
  console.log(nestedArr[index].join(' '));
  console.log(`The longest sentence has ${highestLength} words.`);
}


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