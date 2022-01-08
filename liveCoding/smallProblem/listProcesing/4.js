/*Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

PROBLEM:
input: a string
ouput: an array

Rules:
- return a list of substring 
- each substring should begin with the first letter of the word
- the list sorted in ascending
- input is a single char return the char

EXAMPLE:
'abc' --> a, ab, abc
xyzzy --> x, xy, xyz, xyzz, xyzzy

DATA STRUCTURE
input: a string
output: an array 


[]
''
'abc'

1. a -> a + '' -> [a]
2. b -> b + 'a' -> [a, ab]
3. c -> c + 'ab' -> [a, ab, abc]



ALGORITHM:
input: a string

1. create a result array of an empty array
2. create a temporary string of an empty string
3. iterate over the string,
   for each element:
   - concatenate the element with the temporary string
   - push the temp string to an empty array
4. return the result array   


output: an array 


*/

console.log(leadingSubstrings('abc')) // ["a", "ab", "abc"]);
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


function leadingSubstrings(string) {
  let result = [];
  let temp = '';
  
  for (let index = 0; index < string.length; index++) {
    let currChar = string[index];
    temp += currChar;
    result.push(temp);
  };
  
  return result;
}

