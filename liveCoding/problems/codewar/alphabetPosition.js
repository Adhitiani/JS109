/*
https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

PROBLEM
input: an array of string
output: an array of number

Rules.
explicit:
- return an array of the number of letters that occupy their position in alphabet
- the char is case insensitive 'a' == 'A


EXAMPLE:

"abode","ABc","xyzD" -->abde =4, 3, 1

DATA STRUCTURE
array --> array
string --> number

ALGO
1. create an array of alphabet with the index position the same as position of char in the alphabet 
2.iterate over the array, for each word:
   - create a count variable intialized it to 0
   - iterate over the word. For each of charactet check:
     - if the character posiition is the same as the character index position in the array of alphabet.
      - if its the same increment the count
   - return the count
3. return the new array
   
*/

function solve(arr) {
  let alpha = new Array(26);
  let alphaInt = alpha.fill(0,0).map((e,i) => i + 65);
  let alphabet = alphaInt.map(num => String.fromCharCode(num));
  
  return arr.map(word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if(word[i] === alphabet[i]) count += 1;
    }
    return count;
  });
  
  
  
};

////

function solve2(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};


console.log(solve(["abode","ABc","xyzD"]))
             //[4,3,1]));
//console.log((solve(["abide","ABc","xyz"])) //[4,3,0]));
//Test.assertDeepEquals(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
//Test.assertDeepEquals(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
//});