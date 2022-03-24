/*You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

Examples of meshed words:

"apply" and "plywood"

"apple" and "each"

"behemoth" and "mother"

Examples of words that do not mesh:

"apply" and "playground"

"apple" and "peggy"

"behemoth" and "mathematics"

If all the words in the given array mesh together, then your code should return the meshed letters in a string. You should return the longest common substring. You won't know how many letters the meshed words have in common, but it will be at least one.

If any pair of consecutive words fails to mesh, your code should return "failed to mesh".

Input: An array of strings. There will always be at least two words in the input array.

Output: Either a string of letters that mesh the words together or the string "failed to mesh".

Examples

#1:

["allow", "lowering", "ringmaster", "terror"] --> "lowringter"
because:

the letters "low" in the first two words mesh together
the letters "ring" in the second and third word mesh together
the letters "ter" in the third and fourth words mesh together.
#2:

["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"
*/
/*
Problem
input: an array of string / words
- at least two words in the input array
output: stirng
- substring that mesh togehter between the current string and the next string
- mesh?
  - one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array.
- if there are any word that mesh return "failed to mesh"
  
rules:
- return the longest common substring
- at least one letter mesh together
- return "failed to mesh", If any pair of consecutive words fails to mesh, 
- assume that all letters are in lowercase


EXAMPLE
"allow", "lowering", "ringmaster", "terror"
-->lowringter

beacon","condominium","umbilical","california"
beacon  condominium
con    con

alolow","lowering
lolow
low


conumcal

D:
input: array
output: string

A:
- init result = '';
- iterate over the input array
  //check if the chars ending in the current word is the same as the chars at the begining of the next word
    - find the first char of the next word in the current word
    - check if that char is unique or duplicates in the current word
    
    - if it's unique
      - get the index of that char in the current word
      - slice the currentword start from that char --> substring
      - check if the next word is start with that substring
        - if it true
          - concatenated with the result
        - else
          - return 'failed to mesh'
          
    - if it has duplicate 
      - find the index of each chars
      - slice the word start with that index
      - substring 1
      - substring 2
      - check witht the longest substring if the next word is start with the substring
        - if its true
          - concatenated with the result
        else
          - check with the shorter substring if the next word start with the substring
          - if it's true
            - concatenated with the result
          - else
            - return 'failed to mesh'
  
  
- end iteration
- return the result


Algorithm 
- How do I solve this problem? How do I know that my answer is correct? 

Condition
- for the array, for each word
  - make sure that each word is mesheable with the word next to eat 
  
- get the results from checking the above
 - if any one of the words is not meshable - return failed to mesh 
 - if all words are meshable 
  - get the combined substring of all the mesable words 


*/

function isMeshable(wordA, wordB) {
  // check if two wrods are mesh
  
  // return true if word A and wordB are meshable 
  
  // allowland lowering
  // how do we figure out if these two are mashable? 
  
  // common algorithm 
    commonAlgorithm()
}

//  Test
isMeshable('apply', 'ply') // false 
isMeshable("kingdomwand", "dominator") // true I want to find dom in the second an d dom in the first

Find all substrsings 
word1 = [..substrings,  'dom'] 
word2 = [...subtrings, 'dom']
matching the beginning of word2 and the ending of word1

js Functions that we can use. 
endWith
startWith

Iterate through the second string, and find the substring from the first, checking letter by letter. 




isMeshable("kingdomskjhdkjsad", "dominator") 
isMeshable("", "dominator") // false
isMeshable(0, "dominator") // n

isMeshable("kingdom", "dominator") // true - return "dom"
isMeshable('low', 'allow') // false


function wordmesh(array) {
  // check if all words are meshable 
  // keep the results of whether each pair of words are meshable in an array
  let results = [];
  
  // skip the last word
  array.slice(0, array.length - 1).forEach((word, index)) => {
    let word1 = word
    let word2 = array[index + 1] 
    
    results.push(isMeshable(word1, word2)) // I'm expecting true or false 
  }
  
  
  // I can check results, once I implment isMeshable. 
  
  // if array is all true, 
    // get the combined substring 
  // else
    // return failed to mesh 
}

function commonAlgorithm() {
  //jklasjdkasjdlska
}
 
function getCombinedSubstring(arr) {
  // get the combined meshable words from all the substring 
  
  // common algorithm 
  commonAlgorithm()
}




function wordMesh(arr) {
  let result = '';
  
  for (let i = 0;  i < arr.length - 1; i++) {
    let currentWord = arr[i];
    let nextWord = arr[i + 1];
    
    console.log(currentWord.indexOf(nextWord[0]) === currentWord.lastIndexOf(nextWord[0])  )
    
    //console.log(nextWord)
  }
}


console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"])) // failed to mesh 
console.log(wordMesh(["beacon","condominium","umbilical","california"]), "conumcal");
console.log(wordMesh(["allow","lowering","ringmaster","terror"]), "lowringter");
console.log(wordMesh(["abandon","donation","onion","ongoing"]), "dononon");
console.log(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]), "ownhippuscartpher"  );    
