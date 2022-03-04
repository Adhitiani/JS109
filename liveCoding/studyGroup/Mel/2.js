// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

/*
Problem
input: string
output: string; 

Rules:
- replace the char with '(' if appears ONLY once
- replace the char with ')' if appears MORE than one
- case insenstiive, uppercase is the same as lowercase
- input can be other chars than letter

E:

D:
input: string
array
output: string

Algo:
- convert the string to lowercase
- convert the string to an array
- iterate over the array
  - if the current char is unique replace by '('
  - else
    - replace by ')'
- end of iteration
- convert the array to string
- return the string
*/

function duplicateEncode(str) {
  let arrChar = str.toLowerCase().split('');
  
  let resultArr = arrChar.map(char => {
    if(arrChar.indexOf(char) === arrChar.lastIndexOf(char)) {
      return '(';
    } else {
      return ')';
    }
  })
  
  return resultArr.join('');
}

console.log(duplicateEncode("din")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
console.log(duplicateEncode("Success")); //,")())())","should ignore case");
console.log(duplicateEncode("(( @")); //,"))((");
 