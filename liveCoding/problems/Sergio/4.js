/*The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

console.log(solve("codewarriors") === 2);
Test.assertEquals(solve("suoidea"),3);
Test.assertEquals(solve("ultrarevolutionariees"),3);
Test.assertEquals(solve("strengthlessnesses"),1);
Test.assertEquals(solve("cuboideonavicuare"),2);
Test.assertEquals(solve("chrononhotonthuooaos"),5);
Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);

P:
input: string ('str')
- lowercase that has alphabetic char only
- no spaces
output: number ('longest')
- the length of the longest vowel substring
  - vowel substring?
    - codewarriors --> o, e, a, io
  - the longest is io --> 2  

rules:
- vowels are 'aeiou';

E:
suoidea --> uoi, ea --> 3

D:
input: string
array --> array of vowel substring?
output: number 

A:
//get all the vowel substring
  - init 'longest' to 0
  - init tempVowel to ''
  - iterate over the 'str'
    - if the curr char is vowel concatenated to 'tempVowel'
      - vowel? if the curr char is includes in 'aeiou' 
    - else
      - if the length of 'tempVowel' is greater than 'longest
        - reassign 'longest' = 'tempVowel.length'
      - reassign 'tempVowel' to ''
  - end of iteration
// return 'longest'  



*/

function solve(str) {
  let longest = 0.
  let tempVowel = '';
  
  for (let i = 0; i < str.length; i++) {
    if('aiueo'.includes(str[i])) {
      tempVowel += str[i];
       } else {
       if(tempVowel.length > longest) {
         longest = tempVowel.length;
       }
        tempVowel = '';
       }
  }
  if (tempVowel.length > longest) return tempVowel.length;
  return longest;
}

//console.log(solve("codewarriors") === 2);
//console.log(solve("suoidea") === 3);
//console.log(solve("ultrarevolutionariees"));
//console.log(solve("strengthlessnesses") === 1);
console.log(solve("cuboideonavicuareiuae") === 5);
//console.log(solve("chrononhotonthuooaos") === 5);
//console.log(solve("iiihoovaeaaaoougjyaw") === 8);

