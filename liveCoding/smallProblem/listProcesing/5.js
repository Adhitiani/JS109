/* /* All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

PROBLEM:
input: a string
output: an array

Rules:
- returned alist of all substring
- order the retuned by the first char index
- sort the substring at the given index in ascending

EXAMPLE:
'abcde' --> [
  a, ab, abc, abcd, abcde,
  b, bc, bcd, bcde,

]

DATA STRUCTURE:
input: string
output: an array

ALGORITM:
1.create a result array and initialized it to an empty array
2. iterate over the string:
   for each element:
   get the possible substring:
   - create a result array of an empty array
   - create a temporary string of an empty string
   - iterate over the string,
     for each element:
     - concatenate the element with the temporary string
     - push the temp string to an empty array
   - push the possible string to an array result
   - remove the first element of the string and reassign the string to the new string
 3 retun the result array  

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */

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

  function substrings(str) {
    let resultSub = [];
    for (let index = 0; index < str.length; index ++) {
      let newStr = str.slice(index)
      resultSub.push(...leadingSubstrings(newStr));
    }
     return resultSub;
  }

  //console.log(substrings('abcde'));

/* All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

PROBLEM:
input: a string
output: an array

Rules:
- the returned array has the substring sort by the index of the first character of the substring
- returned the substring from the shortest to the longest

EXAMPLE:
'abc' --> 'a', 'ab', 'abc', 'b', 'bc', 'c

Data Structure:
string --> array

Alghoritm:
1. create an empty array to hold the result
2. iterate over the string, for each iteration:
   - get the possible substring start with the current element.
     - get substring:
       - create an empty array
       - iterate over the string, in each iteration
       - push the current character concatenated with the previous character
   - push the array to the result array    
     
3. return the result array        


Copy Code */

function substrings1(string) {
  let result = [];
  
  for (let index = 0; index < string.length; index ++) {
    let subStr = string.slice(index);
    let arrSubString = getSubString(subStr);
    result.push(...arrSubString);
  };

  return result

};

function getSubString(str) {
  let result = [];
  for (let index = 0; index < str.length; index ++) {
    result.push(str.slice(0, index + 1))
  };
  return result
}



console.log(substrings1('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]