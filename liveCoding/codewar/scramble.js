/*Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.


Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.

P:
input: two string
- original string
- search word

output:
- boolean

rules:
- return true of a posrtion of str1 can be rearranged to match str2
- return false other wise
- only lowercase letter will be used

E:
'rkqodlw', 'world'

D:
string--> array --> boolean

A:
- convert the searc word to an array of char 'searchWord'
- convert the word to an array of char 'wordArr'
//count the number of occurance of letter in the word arr
  - init an empty object
  - iterate over the char
  - for each of char:
    - if it's exist increment the value by 1 of the property
    - if it's not add new property in the object
- iterate over the char of word
- for each of word:
  - if it's not include in the object return false
  - if it's included decrement the value on wordArr obj
  - if it's included but the value is equal or less than 0 return false
return true  
*/

function scramble(word, searchWord) {
  let arrSearchWord = searchWord.split('');
  let arrWord = word.split('');
  
  let objWord = {};
  
  for (let i = 0; i < arrWord.length; i++) {
    objWord[arrWord[i]] =  objWord[arrWord[i]] || 1;
    objWord[arrWord[i]] += 1;
  }
  
  for (let i = 0; i < arrSearchWord.length; i++) {
    let currSearchLetter = arrSearchWord[i];
    if (objWord[currSearchLetter] === undefined) return false;
    objWord[currSearchLetter] = objWord[currSearchLetter] - 1;
    if (objWord[currSearchLetter] <= 0) return false;
  }
  
  return true;
}

console.log(scramble('rkqodlw', 'woorld')) // True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // True
console.log(scramble('katas', 'steak')) // False


function scramble(scrambleWord, searchWord) {
  let countLetter = {};
  for (let i = 0; i < scrambleWord.length; i++) {
    countLetter[scrambleWord[i]] = countLetter[scrambleWord[i]] + 1 || 1;
  }

  for (let i = 0; i < searchWord.length; i++) {
    if (countLetter[searchWord[i]] === undefined) return false;
    if (countLetter[searchWord[i]] === 0) return false;
    if (countLetter[searchWord[i]] -= 1);
  }
  
  return true;
}