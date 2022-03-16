/*Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
  Only lower case letters will be used (a-z). No punctuation or digits will be included.
*/

/*
PROBLEM
input: two strings, str1 and str2
output: boolean
- returns true if a portion of str1 chars can be reaarange to match str2
- returns false otherwise

rules/question:
-input is always in lowercase letters
- input always letter a - z

EXAMPLE
'rkqodlw','world'

DATA STRUCTURE
input: two strings, str1 and str2
array -- splice 
output: boolean

ALGORITHM
- convert both string to an array of chars; arrChar1 and arrChar2
- iterate over the str2
  - find the indec of curr char of arrChar2 in arrChar1; 'index'
    - if it's - 1 return false
    - else
      - take out the char in arrChar1 at that 'index' position
- end iteration
- return true
*/

function scramble1(str1, str2) {
  let arrChar1 = str1.split('');
  let arrChar2 = str2.split('');

  for(let i = 0; i < arrChar2.length; i++){
    let index = arrChar1.indexOf(arrChar2[i]);
    if(index === - 1) {
      return false;
    } else {
      arrChar1.splice(index, 1);
    }
  }
  return true;
}


console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjavx','javascript'),false);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('javscripts','javascript'),false);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);
console.log(scramble('commas','commas'),true);
console.log(scramble('sammoc','commas'),true)

function scramble2(str1, str2) {
  let arrChar1 = str1.split('');
  let index;

  for(let i = 0; i < str2.length; i++){
    index = arrChar1.indexOf(str2[i]);
    if(index === - 1) {
      return false;
    } else {
      arrChar1.splice(index, 1);
    }
  }
  return true;
}

function scramble(str1, str2) {
  let obj= {}
  str1.split('').forEach(char => {
    obj[char] = obj[char] + 1||1;
  })

  for(let i = 0; i < str2.length; i++){
    if(obj[str2[i]]) {
      obj[str2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}