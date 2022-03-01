/*Letter Counter Part 2

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

A:



-clean up the words from non letter
- convert the string to an array of words
  - create an empty array
  - iterate over the words
  - for each of words:
    - check if all the char is letter:
      - convert the words to an array of character
      - chek if all char is letter
    - if it is push the word to the array
    - if it's not:
      - create an emtpy string
      - iterate over the array of char
        - if hte char is letter push it to an emtpy string
        - if it's not do nothin
      - push the string to an array
  - return the array   

- count the length of the words
- create an empty object
  - iterate over the array of words
  - check if that lenth is an existing property in the object
        - if it is increment the value by one
        - if it's not add new key value pair with the value is 1
- return the object


//


*/

function onlyLetter(str) {
  let arrWords = [];
  let arr = str.split(' ');
  
  arr.forEach(word => {
    if(word.split('').every(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) {
     arrWords.push(word);
    } else {
      let cleanWord = '';
      word.split('').forEach(char => {
       if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
         cleanWord += char;
       };
      });
      
      arrWords.push(cleanWord);
    }
  });
  return arrWords;
}

function wordSizes(str) {
  let obj = {};
  
  if (str === '') return obj;
  
  onlyLetter(str).forEach( word => {
    if(obj[word.length]) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    };
  });
  return obj
}


console.log(wordSizes('Four score and seven.')) // ;                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));   // {}


function removeNonLetters(string)  {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) { return char >= 'a' && char <= 'z' }

console.log(removeNonLetters('Four! Late'));

/// simplified remove char

/*
- remove non letter
  - create an emtpy string
  - iterate over the string
  - for each of the char:
    - if the char is a letter concatenated to the result string
  - return the result string  

*/

function removeNonLetter(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      result += str[i];
    }   
  };
  
  return result;
};

function wordSizes1(str) {
 let obj = {};
 if(str === '') return obj; 
 let wordsArr = str.split(' ');
 
 wordsArr.forEach(word => {
 let length = removeNonLetter(word).length;
 obj[length]?  obj[length] += 1 : obj[length] = 1;
 }); 
  
  return obj;
}

console.log(wordSizes1('Four score and seven.')) // ;                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes1('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes1("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes1(''));   // {}