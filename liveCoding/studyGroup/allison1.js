// PROBLEM - 01
/*  Detect Pangram
  A pangram is a sentence that contains every single letter of the alphabet at least once. Case is irrelevant.

  Create a function that returns a boolean based on whether a given string is a pangram. 
  
P:
input: a string
output: a boolean

rules:
- returns true if the string is a pangram
- return false otherwise
- pangram: a sentence that contains every single letter of the alphbet
- case is irrelevant 

Example:
see below

D:
string --> boollean
array?

A:
// check if all the alphabet includes in the string
  - init 'alphabet' to a string of alphabet
  - Iterate over the  'alphabet'
  - in each iteration:
    - check if the 'alphabet' char is include in the string
      - if it's not including return false
  - return true     
*/

function isPangram(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   for ( let i = 0; i < alphabet.length; i++) {
       if (!str.includes(alphabet[i])) {
        return false;
       }
   }
   return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("The quick br!own fox jum%ps over, th(e lazy dog.") === true);
console.log(isPangram("This thing is not a pangram.") === false);

// PROBLEM - 01
/*  Detect Pangram
  A pangram is a sentence that contains every single letter of the alphabet at least once. Case is irrelevant.

  Create a function that returns a boolean based on whether a given string is a pangram. 
  
P:
input: a string
output: a boolean

rules:
- returns true if the string is a pangram
- return false otherwise
- pangram: a sentence that contains every single letter of the alphbet
- case is irrelevant 

Example:
see below

D:
string --> boollean
array?

A:
// check if all the alphabet includes in the string
  - init 'alphabet' to a string of alphabet
  - Iterate over the  'alphabet'
  - in each iteration:
    - check if the 'alphabet' char is include in the string
      - if it's not including return false
  - return true     
*/

function isPangram(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   for ( let i = 0; i < alphabet.length; i++) {
       if (!str.includes(alphabet[i])) {
        return false;
       }
   }
   return true;
}


function isPangram2(str) {
  const characters = {};

  str = str.replace(/[^A-Z]/gi, '').toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (!characters.hasOwnProperty(str[i])) {
      characters[str[i]] = 1;
    }
  }

  if (Object.keys(characters).length === 26) return true;
  return false;
}


// Without regex:
function isPangram3(str) {
  str = str.toLowerCase();
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;
  const characters = {};

  for (let i = 0; i < str.length; i++) {
    if (!alphabet.includes(str[i])) continue;
    if (!characters.hasOwnProperty(str[i])) {
      characters[str[i]] = 1;
    }
  }

  console.log(characters);
  if (Object.keys(characters).length === 26) return true;
  return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.") === true);
console.log(isPangram("The quick br!own fox jum%ps over, th(e lazy dog.") === true);
console.log(isPangram("This thing is not a pangram.") === false);


// -----------------------------------

// PROBLEM - 02
/*
  Write a function that will take an input string and rearrange it in alphabetical order with the capitalized characters as the first character in its group. 
 P:
 input: a string
 output: a string
 
 rules:
 - return the string in alphabetical order with the capitalized chars as the first char in the group
- empty string returns empty string
- there is only one capital letter for each of chars

E:
abBA -->AbBb

D:
string --> string
array --> sort


- I think two things that will really help you out:
- 1. Identify when your current path is getting too complicated.
- 2. Learn how to clear your head of the current solution idea and start over. 
    - a. Start with your goal (['Aaaaaa', 'Zzzzz']) and work backwards. 

- (If your thought process for the current sub-problem seems to be getitng out of hand and difficult to mentally track:
  - identify the structure that you ultimatly want to reach. 
  - Switch gears and try to come up with an alternate way.
  - How else can I pull that structure out of my input or other data?
)

A: ALGORITHM: remove duplicate entries from array
// separeted the char based on the letter (uppercase and lowercse together) store it in an array as an array of string
  - init a 'arrLetter' to an empty array
  - iterate over the string
  - in each iteration:
  - (So if your first solution is to change the data over which you are iteration as you are performing the iteration, see if you can find another way first.)
  "abBA"
  a -- aA
  b -- bB
  B -- bB
  A -- aA
  
  "CbcBcbaA"
  C -- Ccc
  b -- bBb
  c -- Ccc
  B -- bBb
  c -- Ccc
  b -- bBb
  a -- aA
  A -- aA
  
  - (Can I get rid of the duplicates?)
  - (What you're not aware of yet - are there hidden complications beyond this particular sub-problem?)
  
    - filter all the char that are equal to the current char
    
    
    - push the result of the filter to 'arrLetter'

// convert everything in in the 'arrLetter' as lower case
// iterate over the array of 'arrLetter''
  - in each iteration:
    - capitalized the first char of the substring
    [Aaaaaa,  Zzzz]
    - sort the array of substring
- join together the element as a string
- return the string   
  
  
  
A: ALGORITHM: working backwards
// "AaaaaZazzz" is my input


- delcare `charGroups` and init to empty array
- declare `startingIndex` and init to 0
- declare `endingIndex` and init to 0

- Three things that I identified: 
  - All the letters in my target are lowercase
  - All the letters in my target are separated by 'differet' characters
  - It's possible that the separated character sets will not be in alphabetical order.
  
  - lowercase my input
  - sort the input by default 'sort' behavior. 'aaaaaazzzz'
  - (separate by 'different' characters)
    - iterate over sorted input
      - if the current character is not the same as the next character
        - set my `endingIndex` to one greater than the current index.
        - split off the previous group using `startingIndex` and `endingIndex` and push it into `charGroups`.
        - (char groups on first iteration: ['aaaaaa'])
        - reassign `startingIndex` to `endingIndex`.
    - end iteration

  - in each iteration:
    ['aaaaaa', 'zzzz']
    - capitalized the first char of the substring 
    [Aaaaaa,  Zzzz]
- sort the array of substring
- join together the element as a string
- return the string   
*/

function orderString(str) {
  let arrLetter = {};
  
  for (let i = 0; i < str.length; i++) {
    if (!arrLetter.hasOwnProperty(str[i])) {
      arrLetter[str[i]] = 1;
    } else {
      arrLetter[str[i]] += 1;
    }
  }
  
  const keys = Object.keys(arrLetter);
  const sortedKeys = keys.sort((char1, char2) => {
    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);
    if (char1.toUpperCase() === char1) {
      return char1 < char2;
    } else {
      return char1 < char2;
    }
  });
  
  console.log(sortedKeys);
}

console.log(orderString("abBA") === "AaBb");
// console.log(orderString("AaaaaZazzz") === "AaaaaaZzzz");
// console.log(orderString("CbcBcbaA") === "AaBbbCcc");
// console.log(orderString("xXfuUuuF") === "FfUuuuXx");
// console.log(orderString("") === "");