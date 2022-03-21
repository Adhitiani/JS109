/*

-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

Problem:
input: String
output: string
- sort the input string in alphabetical order where the first letter in group is in uppercase

rules:
- string contains only letters
- uppercase letters are unique, there is only one uppercase for each letter
- lowercase letter can be more than one

Example:
"aAbaBb"
AaaBbb

Data structure
input: String
array to separeted the same letter in one group
sort()
output: string

ALGO:
// sort the string 
   - turn the string to lower case
   - convert the string to an array
   - sort the array

// put the same letter in one group and separated with other letter
   - init 'groupLetters' = [sorted[0]]
   - iterate over the sorted array
     - start at index 1
     - init currChar = characters[i]
     - init prevChar = character[i - 1]
     - if currChar is equal to the prevChar
       - concatenated it to the last element of groupLetters
     - else
       - push the currChar to groupLetters   
   - end iteration

// put the uppercase on the first char in each group
   - iterate over groupLetters
     - take the first char of the string and turn it to uppercase
     - concatenated it to the rest of the characters
     - replace the eleemtn witht he new string
   - end iteration

// join together the group to be one string
   - convert the array to string
   - return the string
*/

function findChildren1(str) {
  let sorted = str.toLowerCase().split('').sort();
  let groupLetters = [sorted[0]];
  
  for (let i = 1; i < sorted.length; i++) {
    let currChar = sorted[i];
    let prevChar = sorted[i - 1];

    if(currChar === prevChar ) {
      groupLetters[groupLetters.length - 1] += currChar;
    } else {
      groupLetters.push(currChar)
    }
  }
  let result = groupLetters.map(str => {
    return str[0].toUpperCase() + str.slice(1);
  })
  return result.join('')
}

console.log(findChildren("beeeEBb")) // "BbbEeee"
console.log(findChildren("uwwWUueEe")) // "EeeUuuWww"

// working only right away on the sorted array

function findChildren(str) {
  let sorted = str.toLowerCase().split('').sort();
  let result = sorted.map((char, idx) => {
    if (idx === 0) return char.toUpperCase();
    if (char !== sorted[idx - 1]) return char.toUpperCase();
    return char;
    })
  return result.join('')
}