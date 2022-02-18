/*Staggered Caps Part 1

Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.


staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

A:
- create a result and init to empty string
- iterate over the string
- start idx at 1
- for each of char:
  - if the idx is odd concatenated the empty string with the uppercase
  - if the idx is even concatenated the empty string with lowercase
- return the new string  
*/

function staggeredCase(str) {
  let result = '';
  let uppercase = true
  
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() !== str[i].toUpperCase()) {
    if (uppercase === true) {
      result += str[i].toUpperCase();
      uppercase = false
    } else {
      result += str[i].toLowerCase();
      uppercase = true;
    }
  } else {
    result += str[i];
  }
    
  }
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

function staggeredCase1(str) {
  let result = str[0].toUpperCase();
 
  
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() !== str[i].toUpperCase()) {
    if (result[result.length - 1] === result[result.length - 1].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
  } 
    
  } else {
    result += str[i];
  } 
}
  return result;
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);