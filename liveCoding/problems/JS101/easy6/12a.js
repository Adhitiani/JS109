/*Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l"

You can expect that the string will include only positive numbers.


//Test cases:

Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:

Copy Code
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).

- get all the parentheses
-iterate over the parenthesis
- find the index of '('
- find the index of ')'
- if index of '(' less than index of ')'
  - take out the parenthesis from the array
- Else
  - return false 
- end iteration
- return true    
*/

function isBalanced(str1) {
  let parentheses = str.split('').filter(char => char === '(' || char === ')');
  
  if (parentheses.length === 1) return false;
  if (parentheses.length === 0) return true;
  if (parentheses.length % 2 !== 0) return false;

  for (let i = 1; i > 0; i++) {
    if(parentheses.indexOf('(') < parentheses.indexOf(')')) {
      parentheses.splice(parentheses.indexOf('('), 1);
      parentheses.splice(parentheses.indexOf(')'), 1);
      if(parentheses.length === 0) return true;
    } else {
      return false;
    }
  }
  return true
}//
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced2(str) {
  let parentheses = str.split('').filter(char => char === '(' || char === ')');
  
  if (parentheses.length === 1) return false;
  if (parentheses.length === 0) return true;
  if (parentheses.length % 2 !== 0) return false;

  for (let i = 1; i > 0; i++) {
    if(parentheses.indexOf('(') < parentheses.indexOf(')')) {
      parentheses.splice(parentheses.indexOf('('), 1);
      parentheses.splice(parentheses.indexOf(')'), 1);
    } else {
      break
    }
  }
  return parentheses.length === 0

}

function isBalanced(str) {
  if (str.indexOf('(') === -1 && str.indexOf(')') === -1) return true;  
  if (str.indexOf(')') < str.indexOf('(')) return false; 
  if (str.lastIndexOf('(') > str.lastIndexOf(')')) return false; 

  /*
  let leftBracketCount = 0
  let rightBracketCount = 0

  str.split('').forEach((char) => {
    if (char === '(') {
      leftBracketCount += 1
    } 

    if (char === ')') {
      rightBracketCount += 1
    } 
  });

  return leftBracketCount === rightBracketCount;
  */
}

