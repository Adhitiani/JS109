/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

//convert the string to an array of word
// iterate over the array of word
// for each of word take only the consonant
// convert back the array to string

function disemvowel(str) {
  let arrWords = str.split(' ');
  
  return arrWords.map(word => {
    let wordArr = word.split('')
    
    let arrConsonant = wordArr.filter(char => !'aiueoAIUEO'.includes(char));
    return arrConsonant.join('');
    
  }).join(' ')
  
}

console.log(disemvowel("This website is for losers LOL!"))