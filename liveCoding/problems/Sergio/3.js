/*Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
solve(["abide","ABc","xyz"]),[4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]

P:
input: an array of string ('arr')
output: an array of number ('result')

rules:
- return an array of number which represent the number of letters that has the same position in the alphabet

A:

- init 'result' to an empty array
- iterate over 'arr'
  //compute how many letter in the string element match with their position in the alphabet
  - push the number to 'result'
- end of iteration
-return 'result'

//compute how many letter in the string element match with their position in the alphabet
- init 'alpha' to 'abcdefghijklmnopqrstuvwxyz'
- init 'count' to 0
- iterate over the string
  - if the char in the current index is the same as the char in the same index
    - increment 'count' by 1
- end of iteration
- return 'count'

*/

function countAlphabet(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let count = 0
  
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === alpha[i]) count += 1;
  }
  return count;
}

function solve1(arr) {
  let result = [];
  
  arr.forEach(str => {
  result.push(countAlphabet(str))
  });
  
  return result;
}


console.log(solve(["abode","ABc","xyzD"]));
console.log(solve(["abide","ABc","xyz"]));
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));

//solve(["abide","ABc","xyz"]),[4,3,0]
//solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]

// using map:

function solve(arr) {
  return arr.map(str => countAlphabet(str))
}