/*Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

PROBLEM
input: an array (integers between 0 -19)
output: an array (the same integers sorted based on the english word)

Rules:
- return the same integers sorted based on the english word

EXAMPLE:
0, 1, 2 --› zero, one, two --› one, two, zero --› 1, 2, 0

DATA STRUCTURE:
input: array
output: array
intermedierry : object

ALGHORITM:
Input:  an array of number

1. create a const of an array of english word:
   ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   
2. change the number to its equivalent english word
   - iterate over the array of number, for each of element:
     change it to the englih word element with the same index


3. sorted the english word

4. change back to the array of number
   - create an empty array result
   - create an object with key is the string english word, while the value is the equivalent number
   - iterate over the array of string, in each iteration:
     push the value of the object that has the string element as its key to the array    

return: an array of number sorted out

*/


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


function alphabeticNumberSort(array) {
 const arrStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 
 let numToWord = array.map((num, idx) => num = arrStr[idx]);
 let sortWord = numToWord.sort();

 let obj = {};
 arrStr.forEach((word,idx) => obj[word] = idx)
 return sortWord.map(word =>(obj[word]));                
}

//NOTE:
// 1. how to create an object
//   - create an empty object
//   - determine what is the key what is the value
//   - use an iteration method:
//     - in each iteration create a new key and value
//     - obj[key] = value
// 2. Use sort method
 


