/* https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:

top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

input: a string
ouput: an array of top 3 most occuring words

rules:
- A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
-Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
-Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

A:
- create an empty object to hold the number of occurance 
- convert the string to an array of words
- get only the word with only letter and apostrapy
- count the occurance of the word and placed them in the object
- sort the object based on the value
- return the key with the top three biggest values place them in the array


get only the word and apostropy:
  - create an empty array to hold the result
  - convert the string to an array of word
  - iterate over the the array of word. 
  - for each of the word:
    - convert it to an array of char
    - iterate over the array of char and place the char with only a letter of apostropy to a new array
    - convert the array back to string word
    - push the string word to the array result
    

count the occurance of the word:
    - create an empty object
    - check if the word is exist as the the object property
    - increment the value if it's exist
    - add a new property with the value of 1 if it doesnt
    
sort the object in ascending value



*/

function onlyLetter(str) {
  let result = []
  let arrOfWord = str.split(' ')
  
  arrOfWord.forEach(word => {
  
    if (word !== '') {
       let arrChar = word.split('').filter(char => {
      return ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || char === "'")
    }).join('');
    result.push(arrChar.toLowerCase());
    }
   
  })
  
  return result;
}

function occurance(arr) {
  let obj = {};
  
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] || 0;
    obj[arr[i]] += 1   
       
  }
 return obj
}



function topThreeWord(str) {
  if(str.trim() === "'") return [];
  let cleanWords = onlyLetter(str);
  let objOccurance = occurance(cleanWords);
  
  let arr = Object.entries(objOccurance);
  let sorted = arr.sort((a, b) => b[1] - a[1]);
  
  let result = [];
  
  if(sorted.length > 3) {
    for (let i = 0; i < 3; i++) {
      result.push(sorted[i][0])
    }
  } else {
    for(let i = 0; i < sorted.length; i++) {
      if(sorted[i][0] !== '') {
        result.push(sorted[i][0])
      }
      
    }
  }
  
  return result;
}

console.log(topThreeWord1("a a a  b  c c  d d d d  e e e e e"));

// refactoring the sorted object

function topThreeWord1(str) {
  if(str.trim() === "'") return [];
  let cleanWords = onlyLetter(str);
  let objOccurance = occurance(cleanWords);
  
  let keys = Object.keys(objOccurance)
  keys.sort((a, b) => objOccurance[b] - objOccurance[a]);
  
  return keys.slice(0, 3);

  
}


