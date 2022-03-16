/*
Now I Know My ABCs
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters 
from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled 
using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when 
you apply the rules.
*/

//convert all the input to uppercase
// iterate over the input string
   //check if the current element is include in the blocks
     // take out the element from the block
   // else
      // return false
// end iteration
// return true
function isBlockWord2(str) {
  let blocks = [['B','O'],   ['X','K'],   ['D','Q'],   ['C','P'],   ['N','A'],
['G','T'],   ['R','E' ],  ['F','S'],   ['J','W'],  ['H','U'],
['V','I'],  ['L','Y'],  ['Z','M']];
  
  str = str.toUpperCase1();
  for (let i = 0; i < str.length; i++) {
    if(!blocks.flat().includes(str[i])) {
       return false;
    }
    blocks.forEach((arr, idx) => {
      if(arr.includes(str[i])) {
        blocks.splice(idx, 1);
      }
    })
  }
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

function isBlockWord(str) {
  //let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
  //  'VI', 'LY', 'ZM'];
  let blocks = [['B','O'],   ['X','K'],   ['D','Q'],   ['C','P'],   ['N','A'],
['G','T'],   ['R','E' ],  ['F','S'],   ['J','W'],  ['H','U'],
['V','I'],  ['L','Y'],  ['Z','M']];
  
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    let element = blocks.findIndex(block => block.includes(str[i]));
    if(element > -1) {
      blocks.splice(element,1)
    } else {
     return false;
    }
  }
  return true;
}