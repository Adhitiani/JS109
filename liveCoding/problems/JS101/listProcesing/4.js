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

// console.log(leadingSubstrings('abc')) // ["a", "ab", "abc"]);
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


function leadingSubstrings(string) {
  let result = [];
  let temp = '';
  
   for (let index = 0; index < string.length; index++) {
    let currChar = string[index];
    temp += currChar;
    result.push(temp);
  }; 

  return result;
};

// Leading Substrings

// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

// Examples:

// Copy Code
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


/* 
Problem:
input: a string
output: an array

Rules:
- returns a list of substrings
- each substring should begin with the first letter of the word
- sorted in ascending length

Example:
'abc' --> [a, ab, abc]

Data structure
string --> array

Algorithm:
1. create a result array, an empty array
2. create an empty string to hold the temp substring
3. iterate over the string, in each iteration:
   - concatenated the temp substring with the current char
   - push the temp substring to the result array
4. return the result array   
*/

function leadingSubstrings1(string) {
  let arrSubs = [];
  let tempSubs = '';

  for (let index = 0; index < string.length; index ++) {
    tempSubs += string[index];
    arrSubs.push(tempSubs);
  };
  return arrSubs;
}

// console.log(leadingSubstrings1('abc'));      // ["a", "ab", "abc"]
// console.log( leadingSubstrings1('a'));        // ["a"]
// console.log(leadingSubstrings1('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// using slice method
/* Algorithm:
1. create a result array, an empty array
2. use loop to continuosly do:
   - extract the characters from the first char
   - increment the char that was extracted by 1
  until the loop iterate over all char in the string
3. return the result array  
*/

function leadingSubstrings2(string) {
  let result = [];
  for (let i = 1; i <= string.length; i++) {
    result.push(string.slice(0,i));
  }
  return result
};

// console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings2('a'));        // ["a"]
// console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// using map
/* 
1. convert the string to an array of char
2. iterate over the array, in each iteration:
   - concatenated the curr char with the previous char and replace the curr char with the new chars
3. return the array with the new chars   
*/

function leadingSubstrings3(string) {
  let charArr = string.split('');
  
  return charArr.map((_, idx) => {
    return string.slice(0, idx + 1)
  })
};

// console.log(leadingSubstrings3('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings3('a'));        // ["a"]
// console.log(leadingSubstrings3('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// using map
/* 
1. convert the string to an array of char
2. replace the char with the result of concatenating the char with the previous char.
3. return the array with the new element
*/

function leadingSubstrings4(str) {
  let arrChar = str.split('');
  return arrChar.reduce((currChar, prevChar) => {
    returnprevChar += currChar;
  }, []);
}

// console.log(leadingSubstrings4('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings4('a'));        // ["a"]
// console.log(leadingSubstrings4('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//Each next substring is just the previously computed substring + the current character being processed.
/* 
1. create an empty array to hold the result
2.  the result array has the same length as the string
3. The first element of array is the same as the first element of the string
4. iterate over the string, that start from the second char.
   - in each iteration, assign the elemnt of array with the result of concatenating the previous element with the current char
return the result array
*/

function leadingSubstrings5(string) {
  let resultArr = new Array(string.length);
  resultArr[0] = string[0];
  for (let index = 1; index < string.length; index++) {
    resultArr[index] = resultArr[index - 1] + string[index];
  };
  console.log(resultArr);
}


console.log(leadingSubstrings5('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings5('a'));        // ["a"]
console.log(leadingSubstrings5('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
