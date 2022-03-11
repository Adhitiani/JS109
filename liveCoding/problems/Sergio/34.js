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
Although the words "dominator" and "notorious" share letters in the same order, the last letters of the first word don't mesh with the first letters of the second word.
*/
/*
PROBLEM
input: an array of string
output: string
Either a string of letters that mesh the words together or the string "failed to mesh".

rules/question:
return a string of letters that mesh the words together
or return "failed to mesh" when there is no words that mesh
mesh?
when the last letters of word are the same with the first letters of the next word

EXAMPLE
["allow", "lowering", "ringmaster", "terror"]
lowringter
["allow", "lowering"]

compare the last char in the word with the first char in the next word

DATA STRUCTURE
array
string

ALGORITHM
- init result to ''
- iterate over the input array
  - init currentWOrds = slice the array from the currindex to currIndex + 2
  - init word = currentWords[0]
  - init nextWord = currentWOrds[1]
  // find the index of the first char of the second word in the first word
    // slice the first char = mashWordf
    // iterate over the mashWordf
    // if the char in the masword the same as the char at the same index 
    // concatenated it with result
- end iteration
return result
*/

function wordMesh(arr) {
  let result = '';
  let currWords = '';
  for (let i = 0; i <= arr.length - 2; i++){
    currWords = arr.slice(i, i + 2);
    let word = currWords[0];
    let nextWord = currWords[1]

    let index = nextWord.indexOf(word[word.length -1]);
    let mashedWord = nextWord.slice(0, index + 1);
    if (word.endsWith(mashedWord)) {
      result += mashedWord;
    } else {
      return "failed to mesh"
    }
  }
 return result;
  }


console.log(wordMesh(["beacon","condominium","umbilical","california"]) === "conumcal");
console.log(wordMesh(["allow","lowering","ringmaster","terror"]) === "lowringter");
console.log(wordMesh(["abandon","donation","onion","ongoing"]) === "dononon");
console.log(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]) === "ownhippuscartpher"  ); 
console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"])) 

function wordMesh1(arr){
  let wordsList = [];

  for (let idx = 1; idx < arr.length; idx += 1) {
    let previousWord = arr[idx - 1];
    let currentWord = arr[idx];
    let prefixSuffix = getCommonLetters(previousWord, currentWord);

    if (prefixSuffix.length === 0) {
      return "failed to mesh"
    }

    wordsList.push(prefixSuffix);
  }

  return wordsList.join('')
}


function getCommonLetters(word1, word2) {
  const commonSubstrings = [];
  let substrings1 = getEndingSubstrings(word1)
  let substrings2 = getStartingSubstrings(word2)

  for (let idx = 0; idx < substrings1.length; idx += 1) {
    let sub1 = substrings1[idx]
    for (let idj = 0; idj < substrings2.length; idj += 1) {
      let sub2 = substrings2[idj]
      if (sub1 === sub2) {
        commonSubstrings.push(sub1);
      }
    }
  }

  if (commonSubstrings.length > 0) {
    return commonSubstrings.sort((a, b) => b.length - a.length)[0]
  }

  return []
}

function getEndingSubstrings(string) {
  let substrings = [];
  let substring = "";
  for (let idx = string.length-1; idx >= 0; idx -= 1) {
    const letter = string[idx];
    substring = letter + substring;
    substrings.push(substring);
  }
  return substrings;
}


function getStartingSubstrings(string) {
  let substrings = [];
  let substring = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    const letter = string[idx];
    substring += letter;
    substrings.push(substring);
  }
  return substrings;
}