/* Reverse It (Part 2)

Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

PROBLEM:
input: a string --> contains one or more words
output: a new string --> words with more than 4 chars should be in reverse order

Rules:
- the argument will consit of only lettr and spaces
- for more than 4 charactes the words should be reverse
- word will be separated bby a single space

EXAMPLE:
'Walk around the block'
Walk = 4 chars --> stay -> Walk
around = 6 chars ---> reverse -> dnuora
the = 3 chars --> stay -> the
block = 5 chars --> revrse -> kcolb
=> "Walk dnuora the kcolb"

DATA STRUCTURE
input: string
output: string
array --> separate words
loop method

ALGORITM:
1. create an empty array to hold the result
2. convert the string to an array of word (divided by space)
3. iterate over the array, for each word:
   - determine the length of the word
     - if it's 5 or more than 5:
             split the word to an array of chars
             reverse the order
             convert back to a string
              push the string to the result array
     - else, push the string to the result array         
4. retrun the array that has been converted back to string              

Reverse the word:
1.split the word to an array of chars
2.reverse the order
3.convert back to a string


Copy Code */



function reverseWords(str) {
  let array = [];
  let arrOfWords = str.split(' ');
  
  arrOfWords.forEach(word => {
    if (word.length >= 5) {
       array.push(reverseWord(word));
    } else {
      array.push(word);
    }
  });
  return array.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}



console.log(reverseWords('Professional') === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");

// map

function reverseWords2(sentence) {
  let words = sentence.split(' ');
   return words.map(word => {
    if(word.length >= 5) {
      return reverseWord(word);
    } else {
      return word
    };
  }).join(' ');
}

console.log(reverseWords2('Professional') === "lanoisseforP");
console.log(reverseWords2('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords2('Launch School') === "hcnuaL loohcS");

// ternary operator

function reverseWords3(sentence) {
  let words = sentence.split(' ');
  
  return words.map(word => {
    return word.length >= 5? reverseWord(word) : word;
  }).join(' ');
};

console.log(reverseWords3('Professional') === "lanoisseforP");
console.log(reverseWords3('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords3('Launch School') === "hcnuaL loohcS");