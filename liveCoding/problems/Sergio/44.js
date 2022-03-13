/*The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.
*/
/*
PROBLEM
input: an array of string
output: an array of string sorted by the longest contiguous vowels in each string.

rules/question:

EXAMPLE
["aa","eee","oo","iiii"]

DATA STRUCTURE

ALGORITHM
- create 'vowels' assign it to 'aeiouAEIOU'
//if every char in the element are vowel return the sorted array in descending order

- init obj to {};
- init: longest vowel to 0
- init: vowel to ''
- iterate over the array
  - for each of word
  - iterate over the characters
    - if all the chaar is vowel
      - longest vowel = word.length
    - if the char is vowel
      - concatenated vowel with the currchar
    - else
      - if the length of the vowel is greater than longestVowel
        - longestVowel = vowel.length
        - vowel = '';  
  - end iteration
  - add new properties obj[currentWord] = longest vowel
- end iteration
- sort the input array based on the value of 'obj' in descending order

*/

function sortStringsByVowels(arr) {
  let vowels = 'aeiouAEIOU';
  let vowelLength = {};
  let longestVowelLength = 0;
  let vowel = '';

  arr.forEach(word => {
    if(word.split('').every(char => vowels.includes(char))) longestVowelLength = word.length;
    for (let i = 0; i < word.length; i++) {
      console.log(vowels.includes(word[i]))
      if (vowels.includes(word[i])) {
        vowel += word[i]
      } else {
        if (vowel.length > longestVowelLength) longestVowelLength = vowel.length;
        vowel = '';
      }
    }
    vowelLength[word] = longestVowelLength;
    longestVowelLength = 0;
  })
  console.log(vowelLength)
  return arr.sort((a, b) => vowelLength[b] - vowelLength[a])
}

    //console.log(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
    //console.log(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
    //console.log(sortStringsByVowels(["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
    //console.log(sortStringsByVowels( ["high","day","boot"]) , ["boot","high","day"]);    
     console.log(sortStringsByVowels(['Yuuuge!!', 'uuu', 'none']) , ["uuu","Yuuuge!!","none"]);                                     
    //console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
    //console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
    //console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
    //console.log(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
    //console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);