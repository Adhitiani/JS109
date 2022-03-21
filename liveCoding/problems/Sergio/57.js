/*
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output

[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer

*/

/*
PROBLEM
input:integer
output: integer
- the maximum number we can get by deleting one digit of the given number

rules/question:

EXAMPLE
152

DATA STRUCTURE
input: number
string to separate the digit
array delete the digit
output: number

ALGORITHM
- convert the number to string
- turn the string to an array of char
- init 'max' = 0;
- iterate over the array of char
  - create the copy of array of char
  - take out one digit start from the index 1
  - join back the array to string
  - convert it to number
  - compare the number to 'max'
    - if the number is greater than 'max'
      - max = number
- end iteration
- return max

*/
// using splice and array
function deleteDigit(num) {
  let arrChar = String(num).split('');
  let max = 0;

  for( let i = 0; i < arrChar.length; i++) {
    let copyArrChar = arrChar.slice();
    copyArrChar.splice(i, 1);
    let newNumber = Number(copyArrChar.join(''))
    
    if(newNumber > max) max = newNumber;
  }
  return max;
}

console.log(deleteDigit(152) === 52)

console.log(deleteDigit(1001) === 101)

console.log(deleteDigit(10)=== 1)

// using slice and string
function deleteDigit(num) {
  let str = String(num);
  let max = 0;

  for( let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    let newNumber = Number(newStr)
    if(newNumber > max) max = newNumber;
  }
  return max;
}