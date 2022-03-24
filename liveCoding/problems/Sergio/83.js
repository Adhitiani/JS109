/*Complete the solution so that the function will break up camel casing, using a space between words.

input: string ('str')
output: a new string

rules:
-breakup camel casing
- camel casing?
  - newWord indentified with capitalized letter
  - breaking the string when the char is in capitalized

E: 

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

D:
string
 - an array
string

A:
init 'result' to [str[0]];
iterate over 'str'
- start the iteration from i = 1
- init'currChar' to str[i]
- if 'currChar' is not uppercase
  - concatenated the 'result' with 'currchar'
- else
  - push 'currChar' to 'result'
end of iteration

return result
*/

function solution1(str) {
  let result = [str[0]];
  console.log(result)
  
  for (let i = 1; i < str.length; i++) {
    let currChar = str[i];
    if (currChar !== currChar.toUpperCase()) {
      result[result.length - 1] += currChar;
     
    } else {
      result.push(currChar)
    }
  }
  return result.join(' ');
}

console.log(solution('camelCasing'))

// original solution

function solution(str) {
  let result = [];
  let tempString = ''
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
     tempString += str[i];
    } else {
     result.push(tempString)
     tempString = '';
     tempString += str[i]; 
    }
  }
  result.push(tempString);
  return result.join(' ')
}

/*Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

//convert the string into array
- iterate over the array
  - if the currChar is Uppercase then insert the empty space at that index
- end iteration
- convert back the array to string
return the string
*/

function solution(str) {
  let arrChar = str.split('');
  for (let i = 0; i < arrChar.length; i++) {
    if(arrChar[i].toUpperCase() === arrChar[i]) {
      arrChar[i] = ' ' + arrChar[i];
    }
  }
return arrChar.join('');
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result');

//Using Splice

function solution(string) {
  let arrChar = string.split('')
  for (let i = 0; i < arrChar.length; i++) {
    if (arrChar[i] === arrChar[i].toUpperCase()) {
      arrChar.splice(i, 0, ' ')
      i++
    }
  }
  return arrChar.join('')
}