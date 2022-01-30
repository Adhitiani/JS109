/*Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

PROBLEM:
input: string
output: object

rules:
explicit:
- return an object containing:
- percentage of chars in the string that are lowercase
- percentage of chars that are upperCase
- percentage of chars that are neither
-the string always contain at least once character.

EXAMPLE:
abCdef 123
uppercase: 1 / 10 * 100 = "10.00"
lowercase: 5 / 10 *100 = "50.00"
neither: 4 / 10 * 100 = "40.00"

DATA STRUCTURE
string --> object

Algo:
1. create a result object with the key lowercase, uppercase, and neither. and 0 as associated value.
2. determine the length of the string.
2. iterate over the string. for each of char check:
   - if the string is lower case, increment the value of the lower case key in the object
   - if the string is uppercse, incremet the value of the upper case key in the obhect
   - if neiter, increment the value of neither key in the object
3. count the percentage of the value and convert it as string with 2 decimal
4. return the object

*/

function letterPercentages(str) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  let length = str.length;
  
  for (let idx = 0; idx < str.length; idx++){
    if(str[idx] >= 'a' && str[idx] <= 'z') { 
      obj.lowercase += 1;
    } else if(str[idx] >= 'A' && str[idx] <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    };
  }
  
  obj.lowercase = ((obj.lowercase / length) *100).toFixed(2);
  obj.uppercase = ((obj.uppercase / length) *100).toFixed(2);
  obj.neither = ((obj.neither / length) *100).toFixed(2);
  
  return obj;
 
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }