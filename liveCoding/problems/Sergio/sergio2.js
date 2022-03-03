/*
Problem Description
Given the string of chars alphabetic characters limited to a-z, do as in the sample cases.
Each character in the string argument should appear in the returned string.
The original character should be repeated as many times as its original position in the string argument.  (index 0 being position 1, index 1 being position 2...)
The repeated sequences of a character should be separated by a hyphen in the returned string.
In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

//Test Cases
console.log(accum("abcd"))    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"))    // "C-Ww-Aaa-Tttt"
*/  


// 6. A written work composed of words chosen to avoid the use of one or more letters. You may hail F. Scott Fitzgerald's Gatsby as great, but in 1939 Ernest Vincent Wright produced the phenomenal Gadsby: A Story of Over 50,000 Words Without Using the letter "E," a scarcely believable achievement considering that "E" is the most common letter in English. Imagine an entire novel without he, she, the, or the past tense marker —ed.

// Create a function that takes two strings as  arguments and return a boolean value if the first string contains all of the letters of alphabet except the one that is the second argument. For example:


// isLipogram('abcdefghijklmnopqrstuvwxy', 'z'); //true
// isLipogram('abc', 'd'); //false




/*
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get a valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

------
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
------
*/

console.log(findMissingLetter(['a','b','c','d','f'])); //
console.log(findMissingLetter(["O","Q","R","S"]));     //

console.log(findMissingLetter(["a","b","c","d","f"]));
console.log(findMissingLetter(["O","Q","R","S"]));
