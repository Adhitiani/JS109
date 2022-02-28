// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

/*
In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
*/

/*
Input: numAndWords (string)
- you have an input string and you should check whether it is a valid< message
  - What is valid?
    - A message consists of numbers and letters.
    - Number always preceeeds words 
      - '5Jason' - valid because 5 is length of 'Jason'
      - '5Jason8Aricheta' - valid 8 is second word 'Aricheta'
Output: isCorrect (boolean)
- true if is valid, false otherwise
Questions: 
- What if '' -> true
-> 

E: 
See example at input: 
Generic Cases
'5Jason'
'5Jason8Aricheta'
'1A2BB3CC' -> true
'1A2BB3CC4DD' -> false


'1A2BB3CC4DD55' -> false

'0' -> false

Edge Cases
'' -> true

D: 
Input: numAndWords (string)
- Array of 'split' strings. 
  - [n0, n1, ...] -> n0, n2, n4 have to be numbers (even), n1, n3, n5 have to be numbers (odd) are strings
Output: isCorrect (boolean)

A: 
Input: numAndWords (string)
  - if numAndWords last character is NaN (after coerce to int) return false
  - Split numAndWords in to an array to follow the even/odd datastructure.
    - Where numbers are at even index, words are at odd index 
    -> Subfunction splitNumAndWords(numAndWords) outputs array = aryNumAndWords
  - decl and init currNumber = 0 
  - decl and init currWord = 0 
  - iterate over aryNumAndWords, ind = 0 += 1 up to length of aryNumAndWords
    - if ind is even (ind%2 === 0)
      - currNumber = Number coerce aryNumAndWords[ind]
    - if ind is odd (ind%2 === 1)
      - currWord = aryNumAndWords[ind]
      - // where comaparison happens
      - if currNumber !== currWord.length return false
    - let loop finish
  - return true;
Output: isCorrect (boolean)

A:(splitNumAndWords)
Input: numAndWords (string)
- let numStr = '0123456789';
- decl init returnAry [numAndWords[0]]

- iterate over string ind = 1, ind += 1 upto numAndWords.length
  - decl and init prevChar = numAndWords[ind - 1]
  - decl and init currChar = numAndWords[ind]
  - let prevCharBool = numStr.includes(prevChar); // true if number, false if not
  - let currCharBool = numStr.includes(currChar); // true if number, false if not
  - // what is a transition, if the prev and current characters have different character classes (Alphabet 'A-Za-z', Number'0-9')
  - if prevCharBool !== currCharBool
    - // there is a transition
    - returnAry.push(currChar);
  - else 
    - // no transition
    - returnAry[returnAry.length - 1] += currChar;
  return returnAry;
Output: aryNumAndWords (array)
*/

function messageValidator(numAndWords) {
  if (numAndWords.length === 0) return true; // empty string
  let numStr = '0123456789';
  let lastChar = numAndWords[numAndWords.length - 1];
  if (numStr.includes(lastChar)) {
    return false
  }

  let aryNumAndWords = splitNumAndWords(numAndWords);

  for (let ind = 0; ind < aryNumAndWords.length; ind += 1) {
    if (ind%2 === 1) {
      let prevElm = Number(aryNumAndWords[ind - 1]);
      let currElm = aryNumAndWords[ind];
      if (prevElm !== currElm.length) return false;
    }
  }
  return true;
}


function splitNumAndWords(numAndWords) {
  let numStr = '0123456789';
  let returnAry = [numAndWords[0]];

  for (let ind = 1; ind < numAndWords.length; ind += 1) {
    let prevChar = numAndWords[ind - 1];
    let currChar = numAndWords[ind];
    let prevCharBool = numStr.includes(prevChar);
    let currCharBool = numStr.includes(currChar);

    if (prevCharBool !== currCharBool) {
      returnAry.push(currChar);
    } else {
      returnAry[returnAry.length - 1] += currChar;
    }
  }
  return returnAry;
}

// console.log(messageValidator())



console.log(messageValidator('5Jason5Adhit'))
console.log(messageValidator('3Jason5Adhit'))
console.log(messageValidator('03Jason5Adhit'))
console.log(messageValidator('05Jason5Adhit'))
console.log(messageValidator('05Jason5Adhit0'))
console.log(messageValidator(''))
console.log(messageValidator('5Jason5Adhit564654'))
// console.log(messageValidator())
// console.log(messageValidator())
// console.log(messageValidator())
// console.log(messageValidator())

// console.log(splitNumAndWords('55Jason66Adhit'));

/*
'55Jason66Adhit'

'55Jason66Adhit'
 -+
First iterate
- = '5' -> true
+ = '5' -> true

'55Jason66Adhit'
  -+

- = '5' -> true
+ = 'J' -> false

'55Jason66Adhit'
   -+

- = 'J' -> false
+ = 'a' -> false
 
...
'55Jason66Adhit'
       -+
- = 'n' -> false
+ = '6' -> true

['55', 'Jason', '66', 'Adhit'];
*/


