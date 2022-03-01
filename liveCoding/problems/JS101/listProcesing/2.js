// // /*Alphabetical Numbers

// // Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// // zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// // PROBLEM
// // input: an array (integers between 0 -19)
// // output: an array (the same integers sorted based on the english word)

// // Rules:
// // - return the same integers sorted based on the english word

// // EXAMPLE:
// // 0, 1, 2 --› zero, one, two --› one, two, zero --› 1, 2, 0

// // DATA STRUCTURE:
// // input: array
// // output: array
// // intermedierry : object

// // ALGHORITM:
// // Input:  an array of number

// // 1. create a const of an array of english word:
// //    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
   
// // 2. change the number to its equivalent english word
// //    - iterate over the array of number, for each of element:
// //      change it to the englih word element with the same index


// // 3. sorted the english word

// // 4. change back to the array of number
// //    - create an empty array result
// //    - create an object with key is the string english word, while the value is the equivalent number
// //    - iterate over the array of string, in each iteration:
// //      push the value of the object that has the string element as its key to the array    

// // return: an array of number sorted out

// // */


// // //console.log(alphabeticNumberSort(
// //   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// // function alphabeticNumberSort(array) {
// //  const arrStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 
// //  let numToWord = array.map((num, idx) => num = arrStr[idx]);
// //  let sortWord = numToWord.sort();

// //  let obj = {};
// //  arrStr.forEach((word,idx) => obj[word] = idx)
// //  return sortWord.map(word =>(obj[word]));                
// // }

// // //NOTE:
// // // 1. how to create an object
// // //   - create an empty object
// // //   - determine what is the key what is the value
// // //   - use an iteration method:
// // //     - in each iteration create a new key and value
// // //     - obj[key] = value
// // // 2. Use sort method

// // // using sort method
// // /*Alphabetical Numbers

// // Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// // zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// // PROBLEM:
// // input: an array
// //        - integers between 0 and 19
// // output: an array
// //        - the sorted integers based on the english word
       
// // EXAMPLE:
// // [0, 1, 2] --> zero, one, two --> one, two, zero ==> [1, 2, 0]

// // DATA STRUCTURE:
// // array --> array
// // sort()

// // ALGORITHM
// // 1. create an array of english word, sorted the same as the number
// // ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
// // 2. create a copy of the array
// // 3. sort the array number based on it's matching word 
// // */
 
// // //console.log(alphabeticNumberSort1(
// //   //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// // function alphabeticNumberSort1(array) {
// //   let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// //   let copyOfArr = array.slice();

// //   copyOfArr.sort((num1, num2) => {
// //     if(words[num1] > words[num2]) return 1;
// //     if(words[num1] < words[num2]) return -1;
// //     if(words[num1] = words[num2]) return 0;
// //   })
  
// //   return copyOfArr;

// // }

// // //random array of Number
// // /*Alphabetical Numbers

// // Write a function that takes an array of integers between 0 and 5 and returns an array of those integers sorted based on the English word for each number:

// // zero, one, two, three, four, five

// // PROBLEM:
// // input: an array
// //        - integers between 0 and 5
// // output: an array
// //        - the sorted integers based on the english word
       
// // EXAMPLE:
// // [0, 1, 2] --> zero, one, two --> one, two, zero ==> [1, 2, 0]

// // DATA STRUCTURE:
// // array --> array
// // sort()

// // ALGORITHM
// // 1. create a copy of the array
// // 2. sorted the copy array of number
// // [2, 5, 4, 3, 1] ---
// // 2. create an array of english word, sorted the same as the number
// // ['zero', 'one', 'two', 'three', 'four', 'five']
// // 4. sort the array number based on it's matching word 
// // */

// // function sortWord(array) {
// //   let sortArr = array.slice().sort((a,b) => a - b);
// //   let words = ['one', 'two', 'three', 'four', 'five'];

// //   sortArr.sort((num1, num2) => {
// //     if(words[num1] > words[num2]) return 1;
// //     if(words[num1] < words[num2]) return -1;
// //     if(words[num1] === words[num2]) return 0;
// //   });

// //   return sortArr;


// // }

// // //sortWord([2, 1, 4, 5, 3]);

// // //more conciese solution with sort

// // function sortWord2(array) {
// //   let words = ['one', 'two', 'three', 'four', 'five'];
// //   let copyOfArr = array.slice().sort((a,b) => a - b);
// //   return copyOfArr.sort((a,b) => words[a] - words[b])
// // };

// // console.log(sortWord2([2, 1, 4, 5, 3]));


// //more conciese with sort

// console.log(alphabeticNumberSort3(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function alphabeticNumberSort3(array) {
//   let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//   let copyOfArr = array.slice();
  
  
//   copyOfArr.sort((a,b) => words[a] < words[b]? -1 : 1);
  
//   return copyOfArr;

// };

// console.log(alphabeticNumberSort3(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// //[8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// // map method

// function alphabeticNumberSort4(originalArray) {
//   let dictionaryNumber = {0: 'zero', 1: 'one', 2: 'two', 
//                           3: 'three', 4: 'four', 5: 'five',
//                           6: 'six', 7: 'seven', 8: 'eight',
//                           9: 'nine', 10: 'ten', 11: 'eleven',
//                           12: 'twelve', 13: 'thirteen', 14: 'fourteen',
//                           15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
//                           18: 'eighteen', 19: 'nineteen'
//   };
//   let sortedWord = originalArray.map(value => dictionaryNumber[String(value)]).sort()

  
//   let sortedStrNum = sortedWord.map(value => Object.keys(dictionaryNumber).find(key => dictionaryNumber[key] === value));

//   let sortedNum = sortedStrNum.map(str => Number(str));

  
//   return sortedNum;
// }

// console.log(alphabeticNumberSort4(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


//   //
//   function alphabeticNumberSort5(arr) {
//     const sortOrder = [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0];
  
//     return arr.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b));
//   };

//   console.log(alphabeticNumberSort5([0, 1, 2, 3, 4, 5, 6, ]));

/* Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:

Copy Code */


// using map and indexOf

function alphabeticNumberSort1(array) {
  let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let sortWords = words.slice().sort();
  
  return sortWords.map(word => {
    return word = words.indexOf(word);
  }); 
};

//using sort directly

function alphabeticNumberSort2(array) {
  let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  return array.slice().sort((num1, num2) => {
    return words[num1] > words[num2]? 1: -1;
  });
  
}

// analisze what do you want to sort the arrays based on what?
// look for the connection between your element that you want to sort with the condition
// - can you replace your element with the condition element?




alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]