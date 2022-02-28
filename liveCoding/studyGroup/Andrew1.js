/*Write a function that will take an input string and rearrange it in alphabetical order with the capitalized characters as the first character in its group. 

P:
input: a string
output: a string

Rules:
- return the string and rearrange it in alphabetical order
- capitalized the first char in the group
- an empty string returns an empty string
- assume that there is only one capitalized letter for each letter in the input

E:
 abBA
aAbB
AaBb

AaaaaZazzz
AaaaaaZzzz

D:
string --> string
array?

A:
// grouped the same letter in one group
  - init 'letterArr' to an empty array
  - init 'tempLetter' to  the first char in the string
  - convert the string to a lowercase
  - sort the lowercase string and assign it to 'sortletter'
  - iterate over the string
    - if the curr char is the same as the last char in 'tempLetter' concatenated it with the current char
    - else
      - push the 'tempLetter' to 'letterArr'
      - reassign 'tempLetter' to an empty string
  - end of iteration

// sort them alphabetically
   - sort the 'letterArr' in ascending order

// the first char of the group in the same letter is capitalized
  - init 'capitalizedArr' to an empty array
  - iterate over the 'letterArr'
    - take the first char of the element convert it to uppercase
    - concatenated it with the rest of the char
    - push it 'capitalizedArr'
  - end of iteration

 - convert the 'capitalizedArr' to string
- return the string
*/

function orderString(str) {
  if (str === '') return '';
  let letterArr = [];
  let lowercase = str.toLowerCase();
  let sortletter = lowercase.split('').sort();
  //console.log(sortletter);
  let tempLetter = sortletter[0];

  
  //console.log(lowercase);
  for (let i = 1; i < sortletter.length; i++) {
    let currChar = sortletter[i];
    if(currChar === tempLetter[tempLetter.length -1]) {
      tempLetter += currChar
    } else {
      letterArr.push(tempLetter);
      tempLetter = '';
      tempLetter += currChar;
    }
  }
   letterArr.push(tempLetter);
   let capitalizedArr = [];

   letterArr.forEach(ele => {
     let capEle = ele[0].toUpperCase() + ele.slice(1)
     capitalizedArr.push(capEle)
   })
  return capitalizedArr.join('');
} 

console.log(orderString("abBA") === "AaBb");
console.log(orderString("AaaaaZazzz") === "AaaaaaZzzz");
console.log(orderString("CbcBcbaA") === "AaBbbCcc");
console.log(orderString("xXfuUuuF") === "FfUuuuXx");
console.log(orderString("") === "");



