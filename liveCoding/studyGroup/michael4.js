/*You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurences for each corresponding letter in the alphabet.

*/
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');
*/

/*You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurences for each corresponding letter in the alphabet.

*/



/*
Input:  a string of random characters

Output:  a string 25 chars long - corresponding to the letters of the alphabest

Examples/Edge Cases/Rules/Check ALL Examples
number of occurences of each ascii lowercase letter
decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000'
('') === '00000000000000000000000000');


Algorithm
remove any characters from the input string that are not lowercase letters
create a constant var string with all the letter of the alphabet in order

create an object called `occur` to hold the number of times each letter occurs in the string
iterate over the letters in remaining input string
  if the letter is not in my occur obj yet - add to the object
  otherwise if the letter is in the occur object then inc the count for that letter
  
create an empty output string

iterate over the letters of the alphabet
  compare each letter to the occur object props
    if there is a prop for that letter in the occur object 
      then add that value/count to the output string
      otherwise add a 0 to the output string
      
return output string
*/

function decrypt(str) {
  str = str.replace(/[^a-z]/g, '');
  // console.log(str);
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  let occur = [...str].reduce((obj, char) => {
    obj[char] ? obj[char] += 1 : obj[char] = 1;
    return obj;
  }, {});
  
  // console.log(occur);
  
  let output = "";
  
  [...alphabet].forEach(letter => {
    if (occur[letter]) {
      output += String(occur[letter]);
    } else {
      output += '0';
    }
  });
  
  return output;
}


console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

