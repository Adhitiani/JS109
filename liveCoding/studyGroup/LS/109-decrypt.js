
/*
You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.

You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

P:
input: a string
output: a string (26 char long)

rules:
- count the number occurnces of each lower case letter
- return an ordered string, 26 long, with the corresponding number of occurance for each of alphabet

Example:
$aaaa#bbb*ccfff!z
a = 4
b = 3
c = 2
f = 3
z = 1
43200300000000000000000001

D:
string --> array --> string

A:
- count the occurance of only lower case alphabet and placed it in an object

- create an array 'result' with 26 elements fill with '0' string
- replace the char in the 'result' with the number of occurance of each corresponding alphabet:
  - create a string  of alphabet
  - extract the key of the object
  - iterate over the keys object
  - for each of the char:
    - find the index of char in the array alphabet.
    - replace the char in that index position on the array of 26 digits char with the corresponding value
- convert the result array to a string
- return the string
    
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');    
*/

function occurance(str) {
  let obj = {};
  let onlyLetter = str.split('').filter(char => char >= 'a' && char <= 'z');
  //console.log(onlyLetter);
  
  for (let i = 0; i < onlyLetter.length; i++) {
    obj[onlyLetter[i]] =  obj[onlyLetter[i]] || 0;
    obj[onlyLetter[i]] += 1;
  }
  return obj;
}

//console.log(occurance('$aaaa#bbb*ccfff!z'));

function decrypt(str) {
  let objOccur = occurance(str);
  
  const APLH = 'abcdefghijklmnopqrstuvwxyz'
  let keys = Object.keys(objOccur);
  let result = new Array(26).fill('0');
  
  for(let i = 0; i < keys.length; i ++) {
    let index = APLH.indexOf(keys[i]);
    result[index] = objOccur[keys[i]];
  }
  
  return result.join('');

 

}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');    