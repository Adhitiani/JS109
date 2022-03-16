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

/*
P:
input: string
output: boolean
- true when the word can be spelled using the blocks
- false otherwise

rules:
- you can only use one letter in the blocks
- you can onl yuse each block once
- the letters is case insensitive

Data S:
input: string
array
output: boolean


'BATCH'
B
[[B,O],   [X,K],   [D,Q],   [C,P],   [N,A],
[G,T],   [R,E ],  [F,S],   [J,W],  [H,U],
[V,I],  [L,Y],  [Z,M]]

A:
- create 'blocks' = [[B,O],   [X,K],   [D,Q],   [C,P],   [N,A],
[G,T],   [R,E ],  [F,S],   [J,W],  [H,U],
[V,I],  [L,Y],  [Z,M]]
- convert the input to Uppercase
- iterate over the input string
  - init currChar = inputstring [current index]
  - iterate over blocks
    - if currChar includes in the curr elemnt
      - take out the currelement from the array
    - else
      return false
  - end iteration
- end iteration
- return true
*/

function isBlockWord(str) {
  let blocks = [['B','O'],   ['X','K'],   ['D','Q'],   ['C','P'],   ['N','A'],
['G','T'],   ['R','E' ],  ['F','S'],   ['J','W'],  ['H','U'],
['V','I'],  ['L','Y'],  ['Z','M']];
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    for (let i = 0; i < blocks.length; i++) {
      let currBlock = blocks[i];
      if(currBlock.includes(currChar)) {
        blocks[i] = [];
      }
  
  }
  }
  let emptyArr = blocks.filter(arr => arr.length === 0);
  return emptyArr.length === str.length;
}

function isBlockWord(str) {
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toUpperCase();
    // console.log(currentChar)
    if (!blocks.flat().includes(currentChar)) {
      return false;
    } else {
      for (let j = 0; j < blocks.length; j++) {
        // console.log(blocks[j]);
        if (blocks[j].includes(currentChar)) blocks[j] = [];
      }
    }
  }
  return true;
}
 


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true