/*You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurences for each corresponding letter in the alphabet.*/

/*
PROBLEM
input: string; (numbers, letters, and symbols)
output: string; 
- an ordererd string
- 26 places long
- each of chars is corresponding to the number of occurance for each letter in the given input

rules/question:
- input is empty string return 26 long of '0'
- cou

EXAMPLE
'$aaaa#bbb*ccfff!z'
a = 4
b = 3
c = 2
f = 3
z = 1

'43200300000000000000000001'

DATA STRUCTURE
input: string;
object to store the ocurance of each lowercase
- array to store the result
string iteration
output: string; 

ALGORITHM
- create 'letter' and assing it to 'abcdefghijklmnopqrstuvwxyz'
- filter the string to only have lowercase
// count the occurance of the lowercase
   - init 'obj' to {}
   - iterate to input string
     - if the curr char is exist in the object
       - increment the value to 1
     - else
       - add a new properties with the value of 1
   - end iteration
- convert the 'letter' to an array of letter
- iterate over an array of letter
  - if the letter exist as properties in the object
     - replace the letter with the value of associated properties
  - else
    - replace the letter with 0;
- end iteration
- convert the array to string
- return the string
*/

function decrypt(str) {
  let letter = 'abcdefghijklmnopqrstuvwxyz';
  let lowercase = str.split('').filter(char => char >= 'a' && char <= 'z');
  let occurance = {};
  for (let i = 0; i < lowercase.length; i++) {
    occurance[lowercase[i]] = occurance[lowercase[i]] + 1 || 1;
  }
  //console.log(occurance)
  let letterArr = letter.split('');
  let resultArr = letterArr.map(char => {
    if(occurance[char]) {
      return occurance[char]
    } else {
      return 0;
    }
  })
 return resultArr.join('');
}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');