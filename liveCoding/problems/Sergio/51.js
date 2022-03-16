/*Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

['asd', 'as'],
  ['nab', 'ab'],
  ['abcdeapbcdef', 'abcde'],
  ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
  ['asdfbyfgiklag', 'fgikl'],
  ['z', 'z'],
  ['zyba', 'z']
*/
/*
PROBLEM
input: string
output: string
the longest substring in alphabetical order.

rules/question:
- The input will only consist of lowercase characters 
- will be at least one letter long.

EXAMPLE
asdfaaaabbbbcttavvfffffdf => aaaabbbbctt
DATA STRUCTURE
input: string
output: string
ALGORITHM
- init 'longest' = ''
- init 'tempSubstring' = ''
- iterate over the string
  - if curr chars is greater or the same as the last char in tempSubstring
    - concatenated the tempSubstring with curr characters
  - else
    - if tempSubstring length is greater than longest legnth
      - longest = tempSubstring
      - tempSubstring = currSubstring 
- end iteration
- return longest

*/

function longest(str) {
  let theLongest = str[0];
  let tempSubstring = str[0];

  for (let i = 1; i < str.length; i++) {
    let currChar = str[i];
    let prevChar = str[i - 1];

    if(currChar >= prevChar) {
      tempSubstring += currChar;
    } else {
      tempSubstring = currChar; 
    }
    if(tempSubstring.length > theLongest.length) {
      theLongest = tempSubstring;
    }
  }
  return theLongest
}

console.log(longest('asd'))
console.log(longest('nab'))
console.log(longest('abcdeapbcdef'))
console.log(longest('asdfaaaabbbbcttavvfffffdf'))
console.log(longest('asdfbyfgiklag'))
console.log(longest('z'))
console.log(longest('zyba'))

