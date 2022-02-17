// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

// maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// //-- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum. Note that the empty array is also a valid arg array.

// Test Cases

/*
P:
input: an array of numbers
ouput:  a number

rules:
- all the element are positive the max is the sum of all the elements
- if the element is only negative return 0
- empty array return 0

E:
[-2, 1, -3, 4, -1, 2, 1, -5, 4]
-2 
-2 1
-2 1 -3

A:

edgecase:
- if all the element is positve return the sum of all element
- if the element is only negative return 0
- empty array return 0

- find the possible sub array from the array
  - init `subarrays` to empty array
  - iterate over the array in an outer loop
      - iterate over the array in an inner loop
        - slice the array from idx, jdx
        - append slice to `subarrays`
  - return `subarrays`

- init `maxSum` to 0

- iterate over subarrays
- find the sum of all the subarrays
  - init `currentSum` to subarrays at the idx
  - if currentSum is greater than the maxSum
    - reassign maxSum to `currentSum`
- return the max sum


*/

function maxSequence (array) {

  if (array.every(num => num > 0)) return array.reduce((sum, num) => sum + num, 0);
  if (array.every(num => num < 0)) return 0;
  if (array.length === 0) return 0;
  
  let subarrays = getSubarrays(array);
  console.log(subarrays)
  
  let maxSum = 0;
  
  for (let idx = 0; idx < subarrays.length; idx += 1) {
    let currentSum = subarrays[idx].reduce((sum, num) => sum + num, 0);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  
  return maxSum;
}

function getSubarrays(array) {
  let subarrays = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
      subarrays.push(array.slice(idx, jdx));
    }
  }
  
  return subarrays;
}


// console.log(maxSequence([]) === 0); // true 
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
//console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

// Find the length of the longest substring in the given string that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

/*
  PROBLEM:
    input: string
    output: the length of the longest substring === substring reversed
    
    rules:
      -if the string is an empty string return 0;
      
  DATA STRUCTURE:
    input: string
    array of substring
    all reversed substrings
    output: the length; longesst substring === substring reversed;
    
  ALGO:
    define function para string
    -init arrayOfSubRev
    -init arrayOfSubs to empty array
    -iterate through the string with an i index to be 0
    -iterate through the string with an j index = i + 1
      push all substrings into arrayOfSubs
    -iterate through arrayOfSubs
      - if the substirng.split('').join('') ==== substring.reversed.split('').join('');
     push substring into arrayOfSubRev
      sort arrayOfSubRev length biggest to smallest
        return the first element arrayOfSubRev and length
*/
  
  function longestPalindrome(string) {
    let arrayOfSubRev = [];
    let arrayOfSubs = [];
    
    for (let idx = 0; idx <= string.length; idx += 1) {
      
      for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
        arrayOfSubs.push(string.slice(idx, jdx));
      }
    }
    
     for (let idx = 0; idx < arrayOfSubs.length; idx += 1) {
        
       if (arrayOfSubs[idx] === arrayOfSubs[idx].split('').reverse().join('')) {
          arrayOfSubRev.push(arrayOfSubs[idx]);
        }
    
    }
    
  return arrayOfSubRev.sort((a, b) => b.length - a.length)[0].length;
    
  }

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

// Find the length of the longest substring in the given string that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

/*
  PROBLEM:
    input: string
    output: the length of the longest substring === substring reversed
    
    rules:
      -if the string is an empty string return 0;
      
  DATA STRUCTURE:
    input: string
    array of substring
    all reversed substrings
    output: the length; longesst substring === substring reversed;
    
  ALGO:
    define function para string
    -init arrayOfSubRev
    -init arrayOfSubs to empty array
    -iterate through the string with an i index to be 0
    -iterate through the string with an j index = i + 1
      push all substrings into arrayOfSubs
    -iterate through arrayOfSubs
      - if the substirng.split('').join('') ==== substring.reversed.split('').join('');
     push substring into arrayOfSubRev
      sort arrayOfSubRev length biggest to smallest
        return the first element arrayOfSubRev and length
*/
  
function longestPalindrome(string) {
  let arrayOfSubRev = [];
  let arrayOfSubs = [];
  
  for (let idx = 0; idx <= string.length; idx += 1) {
    
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      arrayOfSubs.push(string.slice(idx, jdx));
    }
  }
  
   for (let idx = 0; idx < arrayOfSubs.length; idx += 1) {
      
     if (arrayOfSubs[idx] === arrayOfSubs[idx].split('').reverse().join('')) {
        arrayOfSubRev.push(arrayOfSubs[idx]);
      }
  
  }
  
return arrayOfSubRev.sort((a, b) => b.length - a.length)[0].length;
  
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

// Find the length of the longest substring in the given string that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

/*
P:
input: a string
output: a number (the length of the longest palindrome substring )

rules:
- if the input length is 0 return 0
- one char is count as substring

A:
//get all the possible substrings and assign it to an array, 'substrings'
  - init 'substrings' to an empty array
  - iterate over the outer loop
  - iterate over the inner loop
    - for each of iteration:
      - slice the string from the current index of outerloop to the index of innerloop (outerloop idx + 1)
      - push the sliced substring to 'substrings'


//get all the palindrome from the 'substrings' and assign it to an array 'palindromes'
  -  init 'palindromes' to an empty array
  - iterate over 'substrings'
  - for each of substring
    - check if it's palindrome --> if substring === reverse substring
      get reverse substring -->convert the string to an array of char
                               reverse the ordeer of the char
                               convert back to string
    - if it's palindrome push it to 'palindromes'                           
 
//return the longest length of the palindrome substring
  - sort the 'palindromes' based on the length in descending order
  - return the first element of the sorted 'palindromes'
*/

function isPalindrome(str) {
  return str === str.split(''). reverse().join('');
}



function longestPalindrome(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
 let palindromes = substrings.filter(isPalindrome);
 return palindromes.filter(str => str.length % 2 === 0).length
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

/*// Find the length of the longest substring in the given string that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.

// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

P:
input: a string
output: a number ( the longest length of substring that is palindrome)

rules:
- palindrome is a string that is the same in reverse
- if hte input string length is 0 return 0

A:
//get all the possible substrings 
//assign them to an array 'substring' :
  - init 'substring' to an empty array
  - iterate over the string in outer loop
  - iterate over the string in inner loop
  - for each of iteration:
    - slice the string from the outer loop idx to inner loop idx (outerloop idx + 1)
    - assign the substring to 'currentSubstring'
    - if the 'currentSubstring' is palindrome push 'currentSubstring' to 'substring'
   
// check if the substring is Palindrome:
   - convert the substingr to an array of string
   - reverse the array
   - convert back to string
   - if the string === reversed string return true
   - else return false
  
//return the longest length from the palindrome substring
  - sort the 'substring' in descending order based on the length of substrings
  - return the first element length from the sorted substrings

*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
};

function longestPalindrome(str) {
  let substring = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let currentSubstring = str.slice(i, j);
      if(isPalindrome(currentSubstring)) {
        substring.push(currentSubstring);
      }
    }
  }
  
  return substring.sort((a,b) => b.length - a.length)[0].length;
}

console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

// maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// //-- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum. Note that the empty array is also a valid arg array.

// Test Cases
// console.log(maxSequence([]) === 0); // true 
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
//console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/*
input: an array of integers
output: a number (the biggest sum of the subarray)

rules:
- if every element is positive return the sum of all element
- if every element is negative return 0
- if input is an empty array return 0

E:
[1, -5, 7]
1
1 -5 -- -4
1 -5 7 -- 3
-5 
-5 7 2
7 7

D:
an array --> number

A:
// get all the possible subarrays
// compute the sum of each the subarrays
// assign them to an array, 'subarrays':
   - init 'subarrays' to an emtpy array
   - iterate over the array in outer loop
   - iterate over the array in inner loop
   - in each of iteration:
     - slice the array from the outerloop current index to innerloopcurrent index (outerloop idx + 1)
     - assign the current subarray to 'currSubarray'
     - compute the sum of the 'currSubarray'
     - push the sum of 'currSubarray' to 'subarrays'


// return the biggest sum among the sum of the subarrays
   sort the 'subarrays' in descending order
    return the first element of the sorted 'subarrays'
*/

function maxSequence(arr) {
  if (arr.every(num => num > 0)) return arr.reduce((sum, curr) => sum + curr, 0);
  if (arr.length === 0) return 0;
  if (arr.every(num => num < 0)) return 0;
  
  
  let subarrays = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let currSubarray = arr.slice(i, j);
      subarrays.push(currSubarray.reduce((sum, curr) => sum + curr, 0))
    }
  }
   return subarrays.sort((a, b) => b - a)[0]
}

console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true