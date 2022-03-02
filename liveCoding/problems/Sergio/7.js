/*You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

Examples:

All elements valid:

The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

An invalid element at index 2:

The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

An invalid empty string at index 2:

The array {"ab","bc","","cd"}

should return ("ab","bc")

All invalid empty string at index 0:

The array {"","bc","","cd"}

should return An Empty List

P:
input: an array of string
output: an array of string

rules:
-return a list that contains every valid string until the mistake. 
- valid strings?
  - a string that start with the last letter of previous string
  - is not empty string
- if the first element of the input array is '' return ''.  
  
A:
// if 'arr[0]' equal to '' return [];
-init the 'result' to [];
- iterate over 'arr'
  - check if last letter in the current string is the same as hte first char in next sring
    - init currChar to arr[i]
    - init prevChar to arr[i + 1]
    - if currChar[currChar.length - 1] is equal to prevChar[0]
      - push 'currChar' to 'result'
    - else if  first char of the last element is equal to the last char at the last element in the 'result
      - push the last element to the result
      - break
- end of iteration

- return result

*/

function shiritori(words) {
  if(words[0] === '') return [];
  
  let result = [words[0]];
  console.log(result)
  for(let i = 1; i < words.length; i++) {
    let currWord = words[i];
    let prevWord = words[i - 1];
    let lastChar = prevWord[prevWord.length - 1]
    
    if(lastChar === currWord[0]) {
      result.push(currWord);
    } else {
      break;
    }
    
  }

  return result
}

console.log(shiritori(["","bc","","cd"]));
console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]));