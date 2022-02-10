
/*[Train: Longest vowel chain \| Codewars](https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/ruby)

7 kyu
Longest vowel chain
                                         
The vowel substrings in the word codewarriors are o,e,a,i,o. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.


PROBLEM:
input: a string (one word);
output: number (the longest chain of vowel)

Rules:
- the vowels are = o,e,a,i,o, u.
- the vowel chain is when the characters sequence are vowel

EXAMPLE:
codewarriors --> o, e, a, io --> io --> 2
suoidea --> uoi, ea --> uoi --> 3

DATA STRUCTURE:
input: a string
output: number

array?

ALGHORITM
1. convert the string to an array of characters
2. create an empty array to hold the chain of vowel
3. iterate over the array, for each element:
  - create an empty string to form the chain of vowel
  - check the element, if it's vowel, concatenate the vowel with the empty string
  - if it's not push the chain of string to the empty array
4. create the base number which is 0 to compare with the length of each of element
5. array of chain of vowel, iterate over the elements and determines the length of each of element, compare it with the base number. If it's bigger than the base number, reassign the base number
6. return the base number


----

 iterate over the array, for each element:
  - create an empty string to form the chain of vowel
  - check the element, if it's vowel, concatenate the vowel with the empty string
  - if it's not push the chain of string to the empty array

suoidea
['s', 'u', 'o','i', 'd', 'e','a']
[]
''
1. s (not vowel) -- '' --> ['', ]
2. u --'u'
3. o --  'uo'
4  i -- 'uoi'
5. d (not vowel) -->'uoi' --['', 'uoi',]
6. e -- 'e'
7. a -- 'a' 
push ''
['', 'uoi','ea']

---

-create the base number which is 0 to compare with the length of each of element
- array of chain of vowel, iterate over the elements and determines the length of each of element, compare it with the base number. If it's bigger than the base number, reassign the base number

base = 0;
['', 'uoi','ea']
1. ''.length = 0
2. uoi.length = 3 --> base = 3
3. ea.length = 2 < base --> base = 3

return the base


*/

/* console.log(solve("codewarriors")) //== 2
console.log(solve("suoidea")) //== 3
console.log(solve("iuuvgheaae")) //== 4
console.log(solve("ultrarevolutionariees")) //== 3
console.log(solve("strengthlessnesses")) //== 1
console.log(solve("cuboideonavicuare")) //== 2
console.log(solve("chrononhotonthuooaos")) //== 5
console.log(solve("iiihoovaeaaaoougjyaw")) //== 8
     */

/* function solve(string) {
  let arrayOfChar = string.split('');
  let arrayOfVowel = [];
  let vowel = '';
  
  for (let index = 0; index < arrayOfChar.length; index ++) {
    if ('aiueo'.includes(arrayOfChar[index])) {
      vowel += arrayOfChar[index];
      
    } else {        
      arrayOfVowel.push(vowel);
      vowel = '';
    };
  };
  arrayOfVowel.push(vowel); */
  
  // helper function here if you can 
//   let base = 0;
  
//   for(let index = 0; index < arrayOfVowel.length; index ++) {
//     let currentLength = arrayOfVowel[index].length;
//     if(currentLength > base) {
//       base = currentLength;
//     }
//    };
  
//   return base;
/* 
  return findLongest2(arrayOfVowel);
}

// helper function

function findLongest(arrayOfVowel) {
    let base = 0;
  
  for(let index = 0; index < arrayOfVowel.length; index ++) {
    let currentLength = arrayOfVowel[index].length;
    if(currentLength > base) {
      base = currentLength;
    }
   };
  
  return base;

}
 */
// map to transform the array of Vowels into length of characters
// find the max

/* function findLongest2(arrayOfVowel) {
  let lengthOfStrings = arrayOfVowel.map(str => str.length);
  
  return Math.max(...lengthOfStrings);
  
}


console.log(findLongest2(['a', 'ae'])); // 2


/////// */

/* Longest vowel chain
                                         
The vowel substrings in the word codewarriors are o,e,a,i,o. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

PROBLEM:
input: a string
       a lower case string that has alphabetic chars and no spaces (one word)
ouput: a number
       the length of the longest vowel substring

Rules:
- return the length of the longest vowel substring
- Vowels are aeiou

EXAMPLE:
codewarriors --> o, e, a, io --> 2
suoidea --> uoi, ea --> 3
[s, u, o, i, d, e, a]


DATA STRUCTURE
input: string
output: number
array
iteration method

ALGHORITM
1. convert the string to an array of characster
2. create an empty array to hold the vowel substring
3. create an empty string to hold the vowel
4. iterate over the array
   In each iteration:
    - chek if the  current char is a vowel:
      - if it's vowel concatenated with the previous vowel
      - if it's not, push the string vowel to the resul array
      - clear the vowel to an empty string again
5. iterate over the result array:
  - create a base number of 0
  - determine the length of the substring 
  - compare the length of current element with the base number
    - if base < length, reassign base to length
    - otherwise do nothing with the base
6. return the base number  



console.log(solve("suoidea")) //== 3
console.log(solve("iuuvgheaae")) //== 4
console.log(solve("ultrarevolutionariees")) //== 3
console.log(solve("strengthlessnesses")) //== 1
console.log(solve("cuboideonavicuare")) //== 2
console.log(solve("chrononhotonthuooaos")) //== 5
console.log(solve("iiihoovaeaaaoougjyaw")) //== 8

 */

/* function solve2(string) {
  let characters = string.split('');
  let vowelsChain = [];
  let vowels = '';

  for (let idx = 0; idx < string.length; idx++){
    if('aiueo'.includes(characters[idx])) {
      vowels += characters[idx];
    } else {
      vowelsChain.push(vowels);
      vowels = '';
    }
  }
  console.log(vowelsChain);
 
}

console.log(solve2("codewarriors")) //== 2
 */
// With string
/* Longest vowel chain
                                         
The vowel substrings in the word codewarriors are o,e,a,i,o. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

PROBLEM
input: string
output: number

Rules:
- input is a lower case string that has alphabetic char and no spaces (a word)
- return the length fo the longest vowel substring
- vowels are any of aeiou

EXAMPLE:
suoidea --> uoi, ea --> 3
iuuvgheaae --> iuu, eaae --> 4

DATA STRUCTURE:
input: string
output: number

array?

ALGORITM:
1. create a result substring with an emtpy string as an initial value
2. create a temporary variable to hold the substring with an empty string as initial value
3. iterate over the string, for each characters:
     - check if the charactes is vowel:
       - if it's vowel, concatenated it with the temporary string
       - if it's not:
         - compare the length of the result and the temporary substring
           - if the temporary length is bigger than the result, reassign the result variable with the   temporary substring
         - reassign the temp with an empty string
4. return the greater value of comparing the result variable length with the left over temp variable. 

*/

function solve3(word) {
  let longestVowel = '';
  let temp = '';

  for (let idx = 0; idx < word.length; idx++) {
    if ('aiueo'.includes(word[idx])) {
      temp += word[idx];
    } else {
      if(temp.length > longestVowel.length) {
        longestVowel = temp;
      };
      temp = '';
    };
  };
  return longestVowel.length > temp.length? longestVowel.length : temp.length;
}



// console.log(solve3("suoidea")) //== 3
// console.log(solve3("iuuvgheaae")) //== 4
// console.log(solve3("ultrarevolutionariees")) //== 3
// console.log(solve3("strengthlessnesses")) //== 1
// console.log(solve3("cuboideonavicuare")) //== 2
// console.log(solve3("chrononhotonthuooaos")) //== 5
// console.log(solve3("iiihoovaeaaaoougjyaw")) //== 8

/*
Longest vowel chain
                                         
The vowel substrings in the word codewarriors are o,e,a,i,o. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
ALGO
- Get all the substring from the string
- filter the substring that has only vowel
- return the longest vowel substring
*/

function solve4(str) {
  let substring = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substring.push(str.slice(i,j));
    };
  }
  const VOWEL = 'aiueo';
  let arrVowel = substring.filter(str => str.split('').every(char => VOWEL.includes(char)));
  
  let longest = 0;
  arrVowel.forEach(str => {
    if(str.length > longest) longest = str.length;
  })
  return longest;

}

console.log(solve4("suoidea")) //== 3




/*The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

P:
input: a lowercase string
output: a number

rules:
- the input is only alphabetic with no spaces
- return the length of the longes vowel substring
- vowel are aeiou

E:
codewarriors
o, e, e, io --> io -- 2

D
string --> number

A:
- create a result and init to 0
- create a temp string and init to an empty string
- iterate over the string:
- in each iteration:
  - if the curr char is vowel concat it to the temp string
  - if it's not, compare the length of the temp with the result number
    - if the result number is smaller than the temp, update the result with the temp
    - update the temp with ''
- compare the temp with the result
- return the bigger number


*/

function solve(string) {
  let result = 0;
  let temp = '';
  
  for (let i = 0; i < string.length; i++) {
    if('aieuo'.includes(string[i])) {
       temp += string[i];
      if (temp.length > result) result = temp.length;
       } else {
       
         temp = '';       
       };
  };

  return result

}



console.log(solve("codewarriors")) //,2);
console.log(solve("suoidea"))//,3);
console.log(solve("ultrarevolutionariees"))//,3);
console.log(solve("strengthlessnesses"))//,1);
console.log(solve("cuboideonavicuare"))//,2);
console.log(solve("chrononhotonthuooaos"))//,5);
console.log(solve("iiihoovaeaaaoougjyaw"))//,8);
