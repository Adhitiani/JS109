/*Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/
/*
PROBLEM
input: string
output: string

rules/question:
- change the Uppercsae to lowercase
- in the transation of lowercase and uppercase insert '-'
- return string contain only contain lowercase 

EXAMPLE
'camelsHaveThreeHumps'
'camels-have-three-Humps'

DATA STRUCTURE
input: string
- array
output: string

ALGORITHM
//filter the string only to letters
  - convert the string to an array of letters
  - select only letter and assign to 'onlyLetter'
//replace the uppercase with '-' + lowercase
  - iteare over the 'onlyLetter'
    - if the curr char is uppercase replace it with '-' + lowercase
  - end iteration
-convert the array to string
- return string  
*/

function kebabize(str) {
  let onlyLetter = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());
  let result = onlyLetter.map(char => {
    if(char === char.toUpperCase()) {
    return (char = '-' + char.toLowerCase())
    } else {
      return char;
    }
  })
  let string = result.join('');

  if(string[0] === '-') return string.slice(1);
  return string;
}

console.log(kebabize('myCamelCasedString') === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps') === 'my-camel-has-humps');