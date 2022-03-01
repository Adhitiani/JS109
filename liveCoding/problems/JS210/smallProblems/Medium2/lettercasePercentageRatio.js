/*Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

A:
- init an empty object
- convert the string to an array of char
- add the lowercase property where the value is:
  - filter the array to lettercase letter only
  - compute the persentage of filtered array length
  - convert it to 2 digit string
  
- add the uppercase property where the value is:
  - filter the array to uppercase letter only
  - compute the persentage of filtered array length
  - convert it to 2 digit string
  
- add the neither property where the value is:
  - the result of 100 - value of lowercase  + value of uppercase

return the object

*/

function letterPercentages(str) {
 
  let countLower = str.split('').filter(char => char >= 'a' && char <= 'z').length;
  let countUpper = str.split('').filter(char => char >= 'A' && char <= 'Z').length;
  let countNeither = str.length - countLower - countUpper;
  
  let obj = {};
  obj.lowercase = ((countLower / str.length) * 100).toFixed(2);
  obj.uppercase = ((countUpper / str.length) * 100).toFixed(2);
  obj.neither = ((countNeither / str.length) * 100).toFixed(2);
  
  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }