/*Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Do not mutate the argument.

Example:

Copy Code
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

P:
input: an array of integers between 0 - 19
output: an array of sorted integers based on the english word

rules:
- do not mutate the argument

E:

[0, 1, 2, 3]
zero, one, two, three
one, three, two, zero
[1, 3, 2, 0]


D:
an array --> object --> an array

A:
- create 'word' and init to an array of numerical english word

- create an object where the keys is the number and and the value is the word and assign it to 'obj'
    - init an empty object, 'obj'
    - iterate over 'word'
    - in each iteration add the obj[idx] = word[idx]
- make a copy of the argumnet and assign it to 'copyArr'
- sort the 'copyArr' based on the value of the object:
   if obj[a] > obj[b] return 1
   if obj[a] < obj[b] return - 1

*/

function alphabeticNumberSort(arr) {
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']


  let obj = {};
  for (let i = 0; i < WORD.length; i++) {
    obj[i] = WORD[i];
  }
  //console.log(obj);
   let copyArr = arr.slice();
    return copyArr.sort((a, b) => {
      if(obj[a] > obj[b]) return 1;
      if(obj[a] < obj[b]) return - 1;
    }
                       )
   //console.log(sort);
  
};

console.log(alphabeticNumberSort2(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Without using object:

// A
/*
- declare variable 'WORD' and init to an array of english words
- iterate over the input array
  - for each of the number element replace it with the element of WORD in the same index position
- sort the new array of word based on the englich word
- iterate over the englsih word of array
  - in each of iteration:
    - replace the element with the index position of the englsih word in the 'WORD'


*/

function alphabeticNumberSort1(array) {
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let newArr = array.map((num) => num = WORD[num])
  let sortedWord = newArr.sort();
  return sortedWord.map(str => WORD.indexOf(str));
}

// sorted right away

function alphabeticNumberSort2(array) {
    const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  return array.slice().sort((a,b) => {
    if(WORD[a] > WORD[b]) return 1;
    if(WORD[a] < WORD[b]) return -1;
  })
}

// without using sort
function alphabeticNumberSort(numbers) {
  const NUMBER_TEXT = [
    'zero','one','two','three','four',
    'five','six','seven','eight','nine', 
    'ten','eleven','twelve','thirteen', 'fourteen',
    'fifteen','sixteen', 'seventeen','eighteen','nineteen'
  ];

  const NUMBER_TEXT_SORTED = [...NUMBER_TEXT].sort();

  let sortedNumbers = [];

  numbers.forEach( number => {
    let sortedIndex = NUMBER_TEXT_SORTED.indexOf(NUMBER_TEXT[number]);
    sortedNumbers[sortedIndex] = number;
  });

  return sortedNumbers;
}