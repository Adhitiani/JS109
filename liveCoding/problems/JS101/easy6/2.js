/* Double Char (Part 2)

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

PROBLEM:
input: a string
output: a string (double every consonant, do nothing with the other char)

Rule:
- should not double vowels, digits, punctuation, whiteSpace
- empty string return empty string

EXAMPLE:
'String' --> SSttrrinngg

DATA STRUCTURE
input: string
output: string
array

ALGORITM
1.create a result string initialized it to an empty string
2. check if the char is consonant:
   - iterate over the array, check each character
     - if it's alphabetic and it is not vowel -- double the char and concatenated with the result string
     - if it's otherwise, concatenated the char with the result string
3. return the result string     

Copy Code */

function isConsonant(char) {
  const VOWEL = ['a','e','i','o','u'];
  return ((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') && !VOWEL.includes(char));
}

function doubleConsonants(str) {
  let doubleCon = '';
  
  str.split('').forEach(char => {
    isConsonant(char)? doubleCon += char + char : doubleCon += char;
  })

  return doubleCon;

}

console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");
