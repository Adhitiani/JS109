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

