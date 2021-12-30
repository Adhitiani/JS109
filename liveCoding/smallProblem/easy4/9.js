/* Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

1. create a result object --> {}
2. check if the string length is less than 1 return result (input is empty string)
3. convert the string to an array of word
'Four score and seven.' --> ['Four', 'score', 'and', 'seven'];
4. clean the array element from the non-letter char
   - iterate over the array:
   - for each of element iterate over the character
   -  check if the current letter is letter, if so push it to a new string

5. Iterate over the array:
   - determine the length of each element
     Check the result object properties:
       - if the key ( the length of the word) is exist then incremeant the value to 1
       - if it's not exist add the key is the length and the value is 1
4. return the result object;

Copy Code */

function wordSizes(str) {
  let obj = {};
  if(!str.length) return obj;

  let words = str.split(' ');
  let cleanWords = [];
  

  for (let index = 0; index < words.length; index += 1) {
    let currentWord = words[index]
    let letters = '';
    for (let index2 = 0; index2 < currentWord.length; index2 += 1) {
      if(currentWord[index2].toLowerCase() >= 'a' && currentWord[index2].toLowerCase()) {
        letters += currentWord[index2];
      }
    }
     cleanWords.push(letters);
  }

  cleanWords.forEach(word => {
    if(obj[word.length]) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    };
  });

    return obj;
  
}




wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
