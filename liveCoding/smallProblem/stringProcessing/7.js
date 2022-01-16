/* Staggered Caps (Part 2)

Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

PROBLEM:
input: a string
output: a string

rules:
- return a string with every other char is Uppercase and lower case.
- ignores non alphabetic char

EXAMPLE:
ALL CAPS --> AlL cApS

DATA STUCTURE
string --> string
array

ALghoritm:
1. convert the string to an array of char
2. create a counter and initialized it to 0
3. iterate over the array. For each of character:
   turn the char to lower case
   if the lower case char is smaller than 'z' and bigger than 'a' then it's alphabetic
   - if it is alphabet:
     - increment counter by 1
     - check if the counter odd
       - if it's odd, return the char in upper case
       - otherwise return lowercase
    - if it's not alphabetic:
     - return the char    
4. return the array that has been convverted to string       
 
*/
// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

function staggeredCase(string) {
  let arrOfChar = string.split('');
  let counter = 0;

  let newArr =  arrOfChar.map(char => {
     char = char.toLowerCase();
     if(char >= 'a' && char <= 'z') {
      counter += 1;
      return counter % 2 === 1? char.toUpperCase() : char.toLowerCase();
     } else {
       return char;
     }
  })
  return newArr.join('');
};

console.log(staggeredCase("I Love Launch School!"));

//further exploration

function staggeredCaseMod(string, nonChar = 'yes') {
  let arrOfChar = string.split('');

  if(nonChar !== 'yes') {
    return arrOfChar.map((char, idx) => {
      return idx % 2 === 0? char.toUpperCase() : char.toLowerCase();
    }).join('');
  } else {
    let counter = 0;
    return arrOfChar.map(char => {
      char = char.toLowerCase();
      if(char >= 'a' && char <= 'z') {
        counter += 1;
        return counter % 2 === 1? char.toUpperCase() : char.toLowerCase();
      } else {
        return char;
      }
    }).join('');
  }
}

console.log(staggeredCaseMod("I Love Launch School!"));