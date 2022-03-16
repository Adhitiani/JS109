/*Given two words, how many letters do you have to remove from them to make them anagrams?

Example

First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints

A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

Problem:
input: two strings
output: number
- the number of the letters that need to be removed 

rules:
- how many letters do you have to remove from the two inputs to make them anagrams?
- anagram : two words has the same letters
- All inputs will be lowercase
- two empty string are anagram return 0
- if there are no same letters in the two words the number is the total of the two words letters


Example:
"ac","aab"
a --> ab
c
[c] ab

ALGO:
- init tempLetter = []
- convert both of string to array
- iterate to the shortest array
  - check if the curr char is includes in the longer array
    - take out the letter from the longest array
  - else
    - push the curr char to tempLetter
- end iteration
- add the length of the tempLetter with the length of the left over longer str
- return the sum


Rules
- if one of the string is empty, then return the length of the other string. 
- if both strings are empty, then return 0 because there is nothing to remove. 
- all inputs are lowercase, tehrefore we dont' need to handle cases. 
- if both string have totally different letters, then we need to remove all letters. 
- general rules
  - we must find out how many characters to remove to make them anagrams
  - if the number of characters of both strings are not the same, then ??? 
   - we need to calculate the difference between the count of the two characters, because that is the number of characters we need to remove. 


   codewars, hackernews

Algorithm 
- get the object that counts all the letters for both strings 
- compare the letter count on both objects
  - if they are the same, they don't need to be removed, do nothing. 
  - if the number of characters of both strings are not the same, then
   - add into the remove count the difference between the two characters. 

a, aab
string1, a = 1, 

string2, a = 2

we need to remove 2 - 1 = 1 

the differnce between the two numbers is the count of characters to remove. 

"codewars","hackerrank"

srt1count = {
  c: 1,
  o: 1,
  d: 1,
  e: 1,
  w: 1,
  a: 1,
  r: 1, 
  s: 1,
}

str2count = {
  h: 1,
  a: 2, 
  c: 1, 
  k: 2, 
  e: 1, 
  r: 2,
  n: 1
}

iterate through the characters of one object 

c - if there is a c in str2 // if there is if (obj2[currentChar]) undefined
c  = 1 === c = 1 ? yes, do nothing. 
if o doesn't exist in the second, 
removeCount += 1 

count = 0 + 1 + 1 + 0 + 1 + 1 + 1 + 1
6. 

remaining count that needs to be removed . there is h, k, k , n

mutate the seocnd obecht 

{
  h: 1,
  k: 2,
  n: 1
}

sum of Object.values(strin2obj) + removeCount.

"", "abcd"

how would the algorithm work with this? 

str1 = {}

str2 = {
  a: 1
  b: 1
  c: 1
  d :2
}

add to remove count all of the characters. 

Algorithm 
- get the object that counts all the letters for both strings 
- compare the letter count on both objects
  - if they are the same, they don't need to be removed, do nothing. 
  - if the number of characters of both strings are not the same, then
   - add into the remove count the difference between the two characters. 

*/

function anagramDifference(str1, str2) {
  if(str1.length === 0 && str2.length === 0) return 0;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  
  
  let shortest;
  let longest;
  if(arr1.length < arr2.length) {
    shortest = arr1;
    longest = arr2;
  } else {
    shortest = arr2;
    longest = arr1;
  }
  
  if(shortest.length === 0) return longest.length;
  
  let tempLetter = [];
  for (let i = 0; i < shortest.length; i++) {
    let currChar = shortest[i];
   if (longest.includes(currChar)) {
     longest.splice(longest.indexOf(currChar), 1)
   } else {
     tempLetter.push(currChar);
   }  
  }
 return longest.length + tempLetter.length;
}

console.log(anagramDifference("","")) //,0);
console.log(anagramDifference("a","")) // ,1);
console.log(anagramDifference("", "a")) // ,1);
console.log(anagramDifference("", "abcd")) // ,4);
console.log(anagramDifference("ab","a")) //,1);
console.log(anagramDifference("ab","cd")) //,4);
console.log(anagramDifference("aab","a")) //,2);
console.log(anagramDifference("a","aab")) //,2);
console.log(anagramDifference("codewars","hackerrank")) //,10);