/*Letter Counter Part 1

Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

P:
input: a string
output: an object

rules
Ex:
- the string input consist of one or more space separated words
- return an object that shows the number of words of diffrent sizes
- words consist of any sequence of non-space chars

im:
- input empty string return an empty object
- the key is the length of the word and the value is the number of occurance

E:
"What's up doc?"
 What's  -->  6n : 1
 up --> 2 : 1
 doc? -- > 4 : 1

D:
string --> array --> object

A:
- create an empty object for the result
- convert the string to an array of words
- iterate over the array.
- for each of the word:
  - find the length of the word
  - check in the object if there is key-value pair that has the same key as the length of the word:
    - if so, increment the value by one
    - if there is NO, add the new key value pair with the value is 1;
- return the object    
  
*/

function wordSizes(str) {
  let obj = {};
  if(str === '') return obj;
  let arrWords = str.split(' ');
  //console.log(arrWords);
  
  arrWords.forEach(word => {
   let length = word.length;
    if (obj[length]) {
      obj[length] += 1;
    } else {
      obj[length] = 1;
    };
    
  });
  
  return obj;
} 

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

