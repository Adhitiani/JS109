/* Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Problem:
input: string
output: object (key = the length of the word, value = the number of the word with that hay the key length)

Rules:
- words is any sequence of non-space characters
- if input is an empty string return an empty object.

Example:
'Four score and seven.'
the word length:
Four = 4
score = 5
seven. = 6
and = 3

3: 1, 4 : 1, 5: 1, 6: 1

Data Structure:
input: string
output: object
array

Algoritm:
1. create a result object --> {}
2. check if the string length is less than 1 return result (input is empty string)
3. convert the string to an array of word
'Four score and seven.' --> ['Four', 'score', 'and', 'seven'];
4. Iterate over the array:
   - determine the length of each element
     Check the result object properties:
       - if the key ( the length of the word) is exist then incremeant the value to 1
       - if it's not exist add the key is the length and the value is 1
4. return the result object;
Examples:

Copy Code */

function wordSizes(str) {
  let obj = {};
  if (str.length < 1) return obj;

  let words = str.split(' ');

  words.forEach(word => {
    if(obj[word.length]) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    }
    
  })
  
  /* for (let index = 0; index < words.length; index += 1) {
    let length = words[index].length;
    if(result[length]) {
      result[length] += 1;
    } else {
      result[length] = 1;
    } */
  

  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}