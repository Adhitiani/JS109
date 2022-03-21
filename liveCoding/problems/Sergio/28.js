/*In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true

A:
- if the string ends with number return false
- if the string start with letter return false
// separate the number with the words
   - init arrStr to [str[0]]
   - iterate over the string
     - init prevchar to str[i - 1];
     - init currChar to str[i]
     - init prevCharBool to if it's number
     - init currCharBool to if it's number
     - if the currchar Bool === prevCharBool
       - concatenated the currChar to the last element of arrStr
     - else
       - push the currChar to arrStr   
   - end iteration

// check if the number is equal with the length of the word
  - iterate over the arrStr
    - if the curr char in number is not equal to the next char return false
  - end iteration
  - return true;
  */

  function isAValidMessage(message) {
    if(message === '') return true;
    let digits = '1234567890';
    if (digits.includes(message[message.length - 1])) return false;
    if (!digits.includes(message[0])) return false;

    let numWord = [message[0]];
    for (let i = 1; i < message.length; i ++) {
      let prevChar = message[i - 1];
      let currChar = message[i];
      let prevCharBool = digits.includes(prevChar);
      let currCharBool = digits.includes(currChar)
      
      if(prevCharBool === currCharBool) {
        numWord[numWord.length - 1] += currChar;
      } else {
        numWord.push(currChar);
      }
    }
    for (let i = 1; i < numWord.length; i += 2) {
      if(Number(numWord[i - 1]) !== numWord[i].length) return false;
    }
    return true;
  }

console.log(isAValidMessage("3hey5hello2hi") === true); 
console.log(isAValidMessage("4code13hellocodewars") === true);
console.log(isAValidMessage("3hey5hello2hi5") === false); 
console.log(isAValidMessage("code4hello5") === false);
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee") === true);
console.log(isAValidMessage("") === true);

/*In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.


Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
ALGORITHMS
*/

/*
PROBLEM
input: string
output: boolean
- return TRUE if the message is valid
- valid?
the length of the chars should be the same as the number before the chars

- return FALSE if the message is invalid
- invalid
- the length of the chars is not equal to the number before it
- the number appear after the chars
- the number is at the end of the string
- the first character is not number 

rules/question:
- empty string return true
- the input should be only letter and digitst
- Numbers may have multiple digits
4code13hellocodewars" --> 4, 13

EXAMPLE
1a2bb3ccc4dddd5eeeee"
1a2bb3ccc4dddd5eeee" 

DATA STRUCTURE
input: string
array to separeated the number and the words
output: boolean

ALGORITHM

//- declare and init digits = '1234567890'
  - init 'result' to the first char of the string
  - iterate over the string start the index at 1
  - init currchar = string[i]
  - init prevChar = string[i - 1]
  - if the prevChar is number && the curr number
     - concatenated the last char in the result with the currChar
  -  if the prevChar is letter && the currchar is letter
     -  concatenated the last char in the result with the currChar
  - else
     - push the currchar tho the array   
  - end iteration


// Check if the number is equal with the lenth of the word after it

Alternative A:
edgecase:
- if the first character is not number return false
- if the last characs in the string is number return false
- if the input is empty string return true

// separated the number with the words
 - init number = []
 - init words = [] 
 - declare and init digits = '1234567890'
 - ini tempNumber = 'string[0]'
 - init tempString = ''

 -iterate over the string start index 1
  - if the currChar is letter
    - concatenated the temp string with currChar
    - push the tempNumber to an number
    - tempNumber = ''
  - else
    - push tempString to words
    - tempString ''
    - tempNumber += currChar
 - end iteration

"4code13hellocodewars"
- init number = [4, 13]
 - init words = [code] 
- ini tempNumber = 
 -init tempString = h
*/
function isAValidMessage(str) {
  let number = [];
  let word = [];
  let digits = '1234567890'
  let tempNumber = str[0]
  let tempString = ''

  if(str.length < 1) return true;
  if(!digits.includes(str[0])) return false
  if(digits.includes(str[str.length - 1])) return false
  

  for(let i = 1; i < str.length; i++) {
    let currChar = str[i];

    if(!digits.includes(currChar)) {
      tempString += currChar;
      if(tempNumber !== '') number.push(tempNumber);
      tempNumber = ''
      console.log(tempString)
    } else {
      word.push(tempString);
      tempString = '';
      tempNumber += currChar;
      console.log(tempString)
    }
  }
  console.log(number);
  console.log(word);
  word.push(tempString)

  for (let i = 0; i < number.length; i++) {
    if(Number(number[i]) !== word[i].length) return false
  }
  return true;
}

//console.log(isAValidMessage("3hey5hello2hi")); // true
console.log(isAValidMessage("4code13hellocodewars")); // true
//console.log(isAValidMessage("3hey5hello2hi5")); // false
//console.log(isAValidMessage("code4hello5")); // false
//console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee")); //true
//console.log(isAValidMessage("")); // true

/*
A:
- if the string ends with number return false
- if the string start with letter return false

// separate the number with the words
   - init arrStr to [str[0]]
   - iterate over the string
     - init prevchar to str[i - 1];
     - init currChar to str[i]
     - init prevCharBool to if it's number
     - init currCharBool to if it's number
     - if the currchar Bool === prevCharBool
       - concatenated the currChar to the last element of arrStr
     - else
       - push the currChar to arrStr   
   - end iteration

// check if the number is equal with the length of the word
  - iterate over the arrStr
    - if the curr char in number is not equal to the next char return false
  - end iteration
  - return true;
  */

  function isAValidMessage(message) {
    if(message === '') return true;
    let digits = '1234567890';
    if (digits.includes(message[message.length - 1])) return false;
    if (!digits.includes(message[0])) return false;

    let numWord = [message[0]];
    for (let i = 1; i < message.length; i ++) {
      let prevChar = message[i - 1];
      let currChar = message[i];
      let prevCharBool = digits.includes(prevChar);
      let currCharBool = digits.includes(currChar)
      
      if(prevCharBool === currCharBool) {
        numWord[numWord.length - 1] += currChar;
      } else {
        numWord.push(currChar);
      }
    }
    for (let i = 1; i < numWord.length; i += 2) {
      if(Number(numWord[i - 1]) !== numWord[i].length) return false;
    }
    return true;
  }
/*
edgecase:
- if the first character is not number return false
- if the last characs in the string is number return false
- if the input is empty string return true

  - declare and init digits = '1234567890'
  - init 'result' to the first char of the string
  - iterate over the string start the index at 1
    - init currchar = string[i]
    - init prevChar = string[i - 1]
    - if the prevChar is number && the currchar number
      - concatenated the last char in the result with the currChar
    -  if the prevChar is letter && the currchar is letter
      -  concatenated the last char in the result with the currChar
    - else
      - push the currchar to the array   
  - end iteration

  */

  function isAValidMessage(str) {
    let digits = '1234567890'
    if(str.length < 1) return true;
    if(!digits.includes(str[0])) return false
    if(digits.includes(str[str.length - 1])) return false
    
    
    for(let i = 1; i < str.length; i++) {
      let currChar = str[i];
      let prevChar = str[i -1]
    }
  
   
    return true;
  }
  
  /*
Edge cases:
- if the first character is not number return false
- if the last characs in the string is number return false
- if the input is empty string return true

//separated the number with the word
  - declare and init digits = '1234567890'
  - init 'numWords' to the first char of the string
  - iterate over the string start at the index 1
    - init currchar = string[i]
    - init prevChar = string[i - 1]
    - if the prevChar is number && the currchar is number
      - concatenated the last char in the 'numWords' with the currChar
    -  if the prevChar is letter && the currchar is letter
      -  concatenated the last char in the 'numWords' with the currChar
    - else (prevchar and currChar are not the same type)
      - push the currchar to the 'numWords' (add a new element)
  - end iteration

// check if the number is equal with the length of the word
  - iterate over the numWords
  - start at index 1
  -  increment index by 2 in each iteration
    - if the prev char in number is not equal with the curr char 
      - return false
  - end iteration
  - return true;

  */

  function isAValidMessage(str) {
    let digits = '1234567890'
    if(str.length < 1) return true;
    if(!digits.includes(str[0])) return false
    if(digits.includes(str[str.length - 1])) return false
    
    let numWords = [str[0]];
    for(let i = 1; i < str.length; i++) {
      let currChar = str[i];
      let prevChar = str[i -1];

      if(digits.includes(currChar) && digits.includes(prevChar)) {
        numWords[numWords.length - 1] += currChar;
      } else if (!digits.includes(currChar) && !digits.includes(prevChar)) {
        numWords[numWords.length - 1] += currChar;
      } else {
        numWords.push(currChar);
      }
    }
   
    for (let i = 1; i < numWords.length; i += 2) {
      let currEle = numWords[i];
      let prevEle = numWords[i - 1]
      if(Number([prevEle]) !== currEle.length) return false;
    }
    return true;
  }
  
console.log(isAValidMessage("3hey5hello2hi") === true); 
console.log(isAValidMessage("4code13hellocodewars") === true);
console.log(isAValidMessage("3hey5hello2hi5") === false); 
console.log(isAValidMessage("code4hello5") === false);
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee") === true);
console.log(isAValidMessage("") === true);