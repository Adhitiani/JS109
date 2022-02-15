/*

// Understand what type of quetstions that will be asked - difficulity level.
// Substrings; looping or nested loops and string methods. 
// How to use the testing environment to get a really good idea of what code is doing from line-to-line. 
// Where when and how to test. 


// 12.06 - 
// PROBLEM - 01
// Count Letters 
// Return an object whose keys are each letter in a given string and the letter's count as each key's value. 
// Assume that the input will only be a string.
// Assume that all characters are important.
// Assume that an empty string or missing input will return an empty object. 



Problem:
  input: string
  Output: object
  
Algorithm:
  define `countLetters()` with the parameter `string`
    declare `resultObect` and initialize it to `{}`
    split `sring` into an `arrayOfChars`
    iterate thorugh `arrayOfChars`
      if `char` is a protpert in the `resultObject`
        property value += 1
      else 
        add the property value as 1
        
    return resultObject
    
    P
    E
    D
    A
    C
    
    
  PROBLEM
    Input is a string.
    Output is an object that represents the letter count of the input string.
    assume that all characters are important.
    empty or missing inputs will return an empty object
    
  ALGORITHM
    create a variable `letters` and init it to an empty object.

    iterate over the input string 
      grab the current character.
      if the character is a key in `letters`, 
        increment the value
        log the new value
      else add the character as a key in `letters` and initialize the value to `1`.
    end iteration

    return `letters`


function countLetters(string) {

  let resultObject = {};
  
  if (!string) return resultObject;
  
  string.split('').forEach(element => {
    // if (resultObject[element] === undefined) {
    //   resultObject[element] = 1;
    // } else {
    //   resultObject[element] += 1;
    // }
    resultObject[element] = resultObject[element] + 1 || 1;
  })
  
  return resultObject;
}



// Tests
console.log(countLetters());    // {}
console.log(countLetters(''));  // {}
console.log(countLetters('aaA')); // {a: 1, A: 1}
console.log(countLetters("It's a bear!")); 
// Returns { I: 1, t: 1, "'": 1, s: 1, ' ': 2, a: 2, b: 1, e: 1, r: 1, '!': 1 }


//Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

//Words consist of any sequence of non-space characters.


// function wordSizes(words) {
//   const wordsArray = words.split(' ');
//   const count = {};

//   for (let i = 0; i < wordsArray.length; i += 1) {
//     let wordSize = wordsArray[i].length;
//     if (wordSize === 0) {
//       continue;
//     }

//     // Index 4; char is a ' ' and it doesn't exist on `count` yet. 
//     // Index 6; char is a ' ' and it does exist on `count`
//     count[wordSize] = count[wordSize] || 0; 
//     // { ' ': 1 }
    
//     // Relying on the short-circuiting behaviors of the logical operators. 
//     // && and || 
//     // count[wordSize] = some value 
//     // 0 = evaluates to some value
//     // || Look for the first truthy evaluation of an operand.
//     // It'll stop evaluating at the first truthy value. 
//     // It'll actually return the last evaluation that occurred.
    
    
//     count[wordSize] += 1;
//     // { ' ': 2 }
//   }

//   return count;
// }

function countSubstring(str, sub) {
  let subArr = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if(str.slice(i, j) === sub) {
        subArr.push(str.slice(i,j));
      }
    }
  }
  
  console.log(subArr);
};

console.log(countSubstring2('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring2('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring2('', 'abbb') === 0);
console.log(countSubstring2('aaaaa', '') === -1);
console.log(countSubstring2('aaaaa') === -1);
console.log(countSubstring2('bbAaaaA', 'Aa') === 1);


// Understand what type of quetstions that will be asked - difficulity level.
// Substrings; looping or nested loops and string methods. 
// How to use the testing environment to get a really good idea of what code is doing from line-to-line. 
// Where when and how to test. 


// 12.06 - 
// PROBLEM - 01
// Count Letters 
// Return an object whose keys are each letter in a given string and the letter's count as each key's value. 
// Assume that the input will only be a string.
// Assume that all characters are important.
// Assume that an empty string or missing input will return an empty object. 

/*

Problem:
  input: string
  Output: object
  
Algorithm:
  define `countLetters()` with the parameter `string`
    declare `resultObect` and initialize it to `{}`
    split `sring` into an `arrayOfChars`
    iterate thorugh `arrayOfChars`
      if `char` is a protpert in the `resultObject`
        property value += 1
      else 
        add the property value as 1
        
    return resultObject
    
    P
    E
    D
    A
    C
    
    
  PROBLEM
    Input is a string.
    Output is an object that represents the letter count of the input string.
    assume that all characters are important.
    empty or missing inputs will return an empty object
    
  ALGORITHM
    create a variable `letters` and init it to an empty object.

    iterate over the input string 
      grab the current character.
      if the character is a key in `letters`, 
        increment the value
        log the new value
      else add the character as a key in `letters` and initialize the value to `1`.
    end iteration

    return `letters`



function countLetters(string) {

  let resultObject = {};
  
  if (!string) return resultObject;
  
  string.split('').forEach(element => {
    // if (resultObject[element] === undefined) {
    //   resultObject[element] = 1;
    // } else {
    //   resultObject[element] += 1;
    // }
    resultObject[element] = resultObject[element] + 1 || 1;
  })
  
  return resultObject;
}



// Tests
// console.log(countLetters());    // {}
// console.log(countLetters(''));  // {}
// console.log(countLetters('aaA')); // {a: 1, A: 1}
// console.log(countLetters("It's a bear!")); 
// Returns { I: 1, t: 1, "'": 1, s: 1, ' ': 2, a: 2, b: 1, e: 1, r: 1, '!': 1 }


//Write a function that takes a string consisting of one or more space separated words and returns an object that shows the number of words of different sizes.

//Words consist of any sequence of non-space characters.


// function wordSizes(words) {
//   const wordsArray = words.split(' ');
//   const count = {};

//   for (let i = 0; i < wordsArray.length; i += 1) {
//     let wordSize = wordsArray[i].length;
//     if (wordSize === 0) {
//       continue;
//     }

//     // Index 4; char is a ' ' and it doesn't exist on `count` yet. 
//     // Index 6; char is a ' ' and it does exist on `count`
//     count[wordSize] = count[wordSize] || 0; 
//     // { ' ': 1 }
    
//     // Relying on the short-circuiting behaviors of the logical operators. 
//     // && and || 
//     // count[wordSize] = some value 
//     // 0 = evaluates to some value
//     // || Look for the first truthy evaluation of an operand.
//     // It'll stop evaluating at the first truthy value. 
//     // It'll actually return the last evaluation that occurred.
    
    
//     count[wordSize] += 1;
//     // { ' ': 2 }
//   }

//   return count;
// }


// PROBLEM - 02
// Substring Instance Count
// Return the number of times a search-string is found within the given searchable string. 
// Assume that both inputs will only be strings.
// Assume that all characters are important.
// Assume the searchable string will always be provided as an argument.
// Return `-1` if the search-string is empty or missing. 
// Solve without using Regex.


/* Problem
- input string and a substring
- output number of times substring occurs in input string

Rules
- return instance count of substrings found in string
- if string is an empty string return 0
- if substring is an empty string return -1
- if either argument is missing return -1

ALGORITHM
- input string and a substring
- initialize `result` to `[]`
- iterate through string
  - split string at substring
  - push substring into `result`
- return length of `result` array


ALTERNATE ALGORITHM
  - input string and a substring
  - initialize `result` to `[]`
  // what's my goal? 
  // - I have to find the first instantance of my substring and ignore everyting else. 
  // - How do I pull that substring out of the string? 
  // Just find a match for the first characters of both strings
  
  iterate over string // a a _ b b _ 
    grab the current character of string stored in `char`. 
    if `char` is equal to the first character of the substring 
      // does string match the rest of the substring at this point? 
      create variable `matchFound` and init to `true`
      iterate through substring starting from the second character
        grab the current character of substring and store in `subChar`
        grab the next character of string 
        if the two characters are not equal 
          reassign `matchFound` to `false`
          break
      // Did we find a match? 
      if `matchFound` is `true` 
        (push the substring onto array or increment counter)
        increment i by the length of the substring.
      end iteration
  end iteration
  
  return result.length
  
  
  ALTERNATE ALGORITHM - without regular expressions
    if the search-string is an empty string or `undefined`, return -1.
    if the searchable string is an empty string, return 0.

    declare a variable `foundStrings` and init to an empty array.

    iterate over the searchable string // aa_bb_cc_dd_bb_e_b    // aaabbbcccc
    // i === 7
      isolate the remainder of the string
      const remainder = text.split(i);
      // c
      if the search string is part of the rest of the searchable string, 
        push the search string onto `foundStrings`
        jump to 'first found index' + the search-string's length iterations - 1.
        aaabbbcccc
        i = 0 + 6 + 3 - 1 = 8
    end iteration

    return `foundStrings` length
    
    
    - find every substring in an array from input string
    - filter based on given substring 



function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;  
}

// Tests
console.log(countSubstring2('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
console.log(countSubstring2('aaabbbcccc', 'ccc') === 1);
console.log(countSubstring2('', 'abbb') === 0);
console.log(countSubstring2('aaaaa', '') === -1);
console.log(countSubstring2('aaaaa') === -1);
console.log(countSubstring2('bbAaaaA', 'Aa') === 1);

*/

function countSubstring1(text, search) {
  if (search === undefined || search.length === 0) return -1;
  if (text.length === 0) return 0;

  const foundStrings = [];

  for (let i = 0; i < text.length; i++) {
    const remainder = text.slice(i);
    console.log(remainder);
    if (remainder.includes(search)) {
      foundStrings.push(search);
      const index = remainder.indexOf(search[0]);
      i += index + search.length - 1;
    }
  }

  return foundStrings.length;
}


// With regex
function countSubstring3(text, search) {
  if (search === undefined || search.length === 0) return -1;
  if (text.length === 0) return 0;

  const regex = new RegExp(search, 'g');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}


// It's a combonation of JS101 - Small Problems - String and Text Processing - Problem 9 
// Code Wars problem number 3 in that one ruby document. 
// https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5eef3b71-3bc7-457c-8c5b-db7e2b0e9ca5/RB109_Live_Assessment__Codewars_Practice_Problems.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T142232Z&X-Amz-Expires=86400&X-Amz-Signature=8ba6ef7336bf1e341b1bb77a99be8b12fc89226fdaf3fa117c6f62faf7ecaf83&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22RB109%2520Live%2520Assessment_%2520Codewars%2520Practice%2520Problems.pdf%22&x-id=GetObject



/*Complete the solution so that it returns the number of times the search_text is found within the full_text.

input: a string
output: a string

rules:
- return the number of times the substring is found within the string

E:

A:
- create a 'count' and init to 0
- creat a 'temp' and init to an empty string
- iterate over the array
- in each iteration:
  - concatenated the char to the temp
  - if the temp contain the search-text, increment the count by 1
  - update the 'temp' to ''
- return counter  

*/

function solution(text, search) {
  let count = 0;
  
  let subString = '';
  
  for (let i = 0; i < text.length; i++) {
    subString += text[i];
    if(subString.includes(search)) {
       count += 1;
       subString ='';
       }
  }
   return count;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb')) //# should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'ccc')) //# should return 1

const solution1 = (text, search) => console.log(text.split(search)) // - 1;

console.log(solution1('aa_bb_cc_dd_bb_e', 'bb')) //# should return 2 since bb shows up twice
console.log(solution1('aaabbbcccc', 'ccc')) //# should return 1

//2
// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'], 
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.

/*
P:
input: an array of strings
output: a boolean

rules:
- return true if at least three of the elements in the array have digits whose sum is divisible by 3
- the input arggument will obly array of string digit 0 -9

E:
// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true

D:
array -> string --> number --> array --> bolean

A:
edge cases:
- return false if the length of the input array is less than 3

- find the sum of all digit string
  - create a 'result' and init to an empty array
  - iterate over the array
  - for each of element:
    - convert the string to an array of string element
    - convert the string element to number
    - get the sum of all the element
- find only the sum that divisible by 3:    
    - if the sum divisible by 3 push it to a new array
  
- return true if the result length are greater or equal to 3
- return false otherwise 

*/

function threeByThree(array) {
  let result = [];
  array.forEach(str => {
    let currSum = str.split('').map(Number).reduce((acc, ele) => acc + ele, 0);
    if (currSum % 3 === 0) {
      result.push(currSum);
    }
  });
  return result.length >= 3;
}

// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true