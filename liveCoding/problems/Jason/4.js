/*Given two words, how many letters do you have to remove from them to make them anagrams?

Example

First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints

A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

// separated the same char and different char in the short shorter string
// the word that need to be take out is the sume of the  length of the char that is different  + the different between the longer string length and the same char in the shorter string

- sort the input to get the shorter string
- init sameChar array to []
- init diffCar array to []
- iterate over the shorter string
  for each char: 
  - if the char is included in the longer string push it in the sameChar array
  else
    - push the currChar to diffChar
- end iteration
- return diffChar.legnth + (longer.length - sameChar)

*/

function anagramDifference(str1, str2) {
  let sortInput = [str1, str2].sort((a, b) => a.length - b.length);
  
  let shortStr = sortInput[0];
  let longStr = sortInput[1].split('');
  
  
  let different = [];
  let same =[]
  for(let char of shortStr) {
    if(longStr.includes(char)) {
      same.push(char);
      longStr.splice(longStr.indexOf(char),1);
    } else {
      different.push(char);
    }
  }
  return different.length + longStr.length;
}


console.log(anagramDifference("",""),0);
console.log(anagramDifference("a",""),1);
console.log(anagramDifference("", "a"),1);
console.log(anagramDifference("ab","a"),1);
console.log(anagramDifference("ab","cd"),4);
console.log(anagramDifference("aab","a"),2);
console.log(anagramDifference("a","aab"),2);
console.log(anagramDifference("codewars","hackerrank"),10);

