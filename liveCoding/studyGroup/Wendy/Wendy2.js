/*
Given an array of strings made only from lowercase letters, return an array of all charactes that show up in all strings within the given array(including duplicates). for example, if a character occurs 3 times in all strings but not 4 times, you need to includes that characters three times in the final answer

Problem:
  - Given an array of strings as an argument, return an array of all characters
  - Can assume only lowercase letters in arg
  - If there are no duplicate chracters, return empty array
  - Duplicate characters should appear in all elements in the array arg
  - If there are repeated letters in a string that are duplicated in all elements, 
    include those repeated letters, they still count
Data Structure:
  Input: array of strings
  Output: array of strings
  Other: strings
Algorithm:
  - Initialize an empty string called commonChars
  - Sort the arg array by string length in asc order
  - Initialize shortestWord = array[0]
  - Loop through the shortestWord
    - Set currentChar to current index of shortest word
    - Step into the array (loop), index set to 1 and stop at array.length - 1
        - See if currentChar is included in the other elements of the array
        - If true, add currentChar to commonChars
          - Find index of common char in string element. Create new substring to replace that element in the array without the commonchar to not double count any letters
  - End loop
  - Return commonChars & convert to an array
*/

function commonChars(arr) {
  let commonCharacters = '';
  arr.sort((a, b) => a.length - b.length);
  let shortestWord = arr[0];

  for (let i = 0; i < shortestWord.length; i++) {
    let currentChar = shortestWord[i];
    let inAllWords = true;
    
    for (let arrayIndex = 1; arrayIndex <= arr.length - 1; arrayIndex++) {
      // console.log(`CurrentChar: ${currentChar}`)
      // console.log(`Element: ${arr[arrayIndex]}`);
      if (!arr[arrayIndex].includes(currentChar)) {
        inAllWords = false;
        break;
      }
      let currentCharIndex = arr[arrayIndex].indexOf(currentChar);
      let replaceStr = arr[arrayIndex].slice(0, currentCharIndex) + 
        arr[arrayIndex].slice(currentCharIndex + 1)
      arr[arrayIndex] = replaceStr;
    }
    if (inAllWords) commonCharacters += currentChar;
  }
  return commonCharacters.split('');
}

console.log(commonChars(['a', 'b'])) // []
console.log(commonChars(['ab', 'bc'])) // ['b'];
console.log(commonChars(['bella', 'label','roller'])) // ['e','l', 'l'];
console.log(commonChars(['cool', 'lock','cook'])) // ['c', 'o'];
console.log(commonChars(['hello', 'goodbye','booya','random'])) // ['o'];
console.log(commonChars(['aabbaaaa', 'ccddddd','eeffee','ggrrrrr', 'yyyzzz'])) // [];

function commonChars(arr) {
  arr.sort((a,b) => a.length - b.length);
  let shortestStr = arr[0];
  let commonChar = [];

  for (let i = 0; i < shortestStr.length; i++) {
    let currChar = shortestStr[i];
    if(arr.every(str => str.includes(currChar))) {
      commonChar.push(currChar);
      toDelete(arr,currChar);
    }
  }
  return commonChar;
}

function toDelete(arr, char) {
  for(let i = 0; i < arr.length; i++) {
    let arrChar = arr[i].split('');
    arrChar.splice(arr[i].indexOf(char), 1);
    arr[i] = arrChar.join('')
  }
  return arr;
}