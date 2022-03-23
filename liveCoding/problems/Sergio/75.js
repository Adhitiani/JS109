/*You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

*/
/*
PROBLEM
input: string
- there are no special characters
- only letters and spaces
output: string

rules/question:
return a new string where:
- the second and the last letter is switched
- the first lettr is replaced by its character code
- assume that the letter is case sensitive

EXAMPLE
'72olle 103doo 100ya'
72 e ll 0 - 103 o o d - 100 a y

DATA STRUCTURE
input: string
array to separate between number and chars
output: string

ALGORITHM
// separated the number and the letter for each word
- init result to [];

- convert the string to an array of words --> 'arrWords'
// separated the letter with the word function
- init digits to '1234567890'
- iterate over 'arrWords'
  - for each word:
    - init tempArr = [the first chars of the word]
    - init tempStr = 
    - iterate over the word
      - init prev char to chars with idx - 1
      - init curr char to char with idx
      - if prevCar is number and currchar is number concatenated it to 
       the last char in the tempArr
       - else 
        - push the currChar to the tempArr
    - end iteration
// helper function to depichiper word
    - iterate over tempArr
      - replace the first char with its associated letter
      - exchange the second element with the last element, vice versa
    - end iteration
    - push the tempArr in string form to 
- end iteration
- return result in stringform
*/

function letterNum(str) {
  let digits = '1234567890'
  let arr = [str[0]]
  for (let i = 1; i < str.length; i++) {
    let currChar = str[i];
    let prevChar = str[i - 1];

    if(digits.includes(currChar) && digits.includes(prevChar)) {
      arr[arr.length - 1] += currChar;
    
    } else {
      arr.push(currChar)
    }
  }
  return arr
}

function depichiper(arr) {
  arr[0] = String.fromCharCode(arr[0]);
  [arr[1],arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]]
  return arr.join('')
}

function decipherThis(str) {
  let arrWords = str.split(' ');
  let separated = arrWords.map(word => letterNum(word));
  let result = separated.map( arrElem => depichiper(arrElem));
 return result.join(' ')
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'