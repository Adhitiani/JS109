/*
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You wil return true if you find a substring that appears in both strings, or false if you do not. We only care about substring that are longer than one letter long.
*/

/*
Problem:
input: two strings
output: boolean
- true if there is a substring that appears in both strings
- false otherwise

rules:
- susbtring should be longer than one letter long
- if either of the inputs is '' return false
- chars are insensitive 'B' === 'b'

Example:
'Home'
slice (0, 1)
H
0, 2
ho

Ho
hom
home
om
ome
me


D:
input: two strings
output: boolean

ALGO:
// if the str1.length === 0 or str1.length === 0 return false
// get all the substring from the str2
   - iterate over the str2 with index i
     - iteration over the str2 with index j = i + 1
        - init 'currSubstring' = slice the str 2 from i toj
        - if currSubstring length is > 1
          - if currSubstring includes in str1
            - return true
     - end iteration
   - end iteration
- return false
*/

function substringTest(str1, str2) {
  if(str1.length === 0 || str2.length === 0) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    for (let j = i + 1; j <= str2.length; j++) {
      let currSubstring = str2.slice(i, j);
      if (currSubstring.length > 1 ) {
        if(str1.includes(currSubstring)) return true;
      };
    }
  }
  return false;
}

console.log(substringTest('something', 'Fun') === false);
console.log(substringTest('something', 'Home') === true);
console.log(substringTest('something', '') === false);
console.log(substringTest('', 'something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);