/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

/*
PROBLEM
input: string
output: string
- if the char is unique convert it to "("
- if the char has duplicates convert it to ")"

rules/question:
- Ignore capitalization when determining if a character is a duplicate

EXAMPLE
"recede"   =>  "()()()"

DATA STRUCTURE
input: string
ooutput: string

ALGORITHM
- iterate over the string
  - if the char is unique return "("
  - else 
    - return ")"
- end iteration

*/

function duplicateEncode(str) {
  let result = '';
  for (let char of str) {
    if(str.indexOf(char) === str.lastIndexOf(char)) {
      result += "(" ;
    } else {
      result += ")" ;
    }
  }
  return result;
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");