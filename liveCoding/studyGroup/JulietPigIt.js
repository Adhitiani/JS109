/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

-process each word to:
- move first letter to the end
- add "ay" to the end
- leave punctuation untouched

//Move the first lettr to the end and add "ay' to the end
- convert the string to an array of word
- iterate over the word
  - for each word:
    - convert the word to an array of character
    - clean the word to only letter
    - create a new word with the characters start from second character + the first character + 'ay'
    
    
// put it back the punctuaation
    - iterate over the original word
      - if the currChar is not letter
        - get the index of that character
        - insert the charaacter to the same index position in new word--> split it first
    - replace the word with the new word    
    - end iteration
- end iteration
- return the array in string form
*/



function pigIt1(str) {
  let arrWord = str.split(' ');
  let arrResult = arrWord.map(word => {
    let cleanWord = word.split('').filter(char => char.toLowerCase() !==     char.toUpperCase());
    if(cleanWord.length === 0) {
      cleanWord = [];
    } else {
      cleanWord = cleanWord.slice(1).join('') + cleanWord[0] + 'ay'
      cleanWord = cleanWord.split('')
    }
  
    for(let i = 0; i< word.length; i++) {
     if(word[i].toLowerCase() === word[i].toUpperCase()) {
      cleanWord.splice(i,0,word[i] )
    }
    }
   return cleanWord.join('')
  })
  return arrResult.join(' ')
}


//addPunc('pig', 'newPig')

console.log(pigIt('Pi-g latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !


function addPunc(word1,word2) {
 let arrNew = word2.split('');
  for(let i = 0; i < word1.length; i++) {
    if(word1[i].toLowerCase() === word1[i].toUpperCase()) {
      arrNew.splice(i,0,word1[i] )
    }
  }
  return arrNew.join('')
}

function pigIt1(str) {
  let arrWord = str.split(' ');
  let newWord = arrWord.map(word => {
    let cleanWord = word.split('').filter(char => char.toLowerCase() !==     char.toUpperCase());
    if(cleanWord.length === 0) {
      cleanWord = '';
    } else {
      cleanWord = cleanWord.slice(1).join('') + cleanWord[0] + 'ay'
    }
    return cleanWord;
  })
   let arrResult = newWord.map((word,idx) => {
     return addPunc(arrWord[idx], word)
   })
   return arrResult.join(' ')
}

function pigIt(str){
  return str.split(' ').map(word => {
    if(word.includes('!') || word.includes('.') || word.includes('?')){
      return word;
    } else {
      return word.slice(1)+word[0]+'ay'
    }
  }).join(' ');
}