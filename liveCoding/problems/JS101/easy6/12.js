/* Matching Parentheses?

Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.
Problem:
input: string
output: boolean

Rules:
- return true if all parentheses in the string are properly balanced
  - to be properly balanced, parentheses must occur in matching '()' pairs
- return false otherwise

example:
"What (is) this?" --> str[5] = str[8] --> true
"What is) this?" --> str[8] --> false

DATA STRUCTURE
input: string
output: boolean
array

ALgorrithm
1. convert the string to an array
2. create tow empty array to hold the index of '(' and ')'
3. iterate over the array, in each iteration
   - check if the character is '(', push the index to the appropriate array
   - check if the character is ')', push the index to the appropriate array
4. chec if the the length of the arrays are the same, if it's not return false
5. if the the length are the same iterate over the first array and check if the element of the first array is less than array 2, if not return false
6. return true   

  
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).

Copy Code
 */
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);




function isBalanced(str) {
  let arrayOfChar = str.split('');
  let rightParent = [];
  let leftParent = [];

  for (let index = 0; index < arrayOfChar.length; index ++) {
    if (arrayOfChar[index] === "(") {
      leftParent.push(index);
    };
    if (arrayOfChar[index] === ")") {
      rightParent.push(index)
    };
  }
  
  if (rightParent.length !== leftParent.length) return false;

  for (let index = 0; index < leftParent.length; index ++) {
    if (rightParent[index] < leftParent[index]) return false;
  };

  return true;

}