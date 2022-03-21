/*
The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in 
"case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation 
shall simply be removed!

The input is restricted to contain no numerals and only words containing the 
english alphabet letters.

Example:
*/
/*
PROBLEM
input: string
output: string
- a new string with "case-insensitively-alphabetical-order-of-appearance"
- sort the string in alphabetical order
- if the letters have different case then sort it as their order of appearance.

rules/question:
- the output should be only letters

EXAMPLE"
The Holy Bible
BbeehHilloTy

DATA STRUCTURE
input: string
array to filter only letter in the string
output: string

ALGORITHM
// filter the string to only letters
  - convert the string to array
  - filter the array to only have letters; 'letters'
// reaarange the letter to their order alphabetically
   - init changePost = true;
   - while the changPost is true:
     - change post = false;
     - iterate over the 'letters'
     - init 'currChar' = letters[i];
     - init 'nextChar' = letters[i + 1]
     if(currChar > nextChar) {
      [currChar, nextChar] = [nextChar, currChar]
      changePost = true
     }
   - end iteration
*/
function alphabetized(str) {
  let letters = str.split('').filter(char => char.toLowerCase() !== char.toUpperCase());

  let changePost = true;
  while(changePost) {
    changePost = false;
    for (let i = 0; i < letters.length -1; i++) {
      let currChar = letters[i];
      let nextChar = letters[i + 1];

      if(currChar.toLowerCase() > nextChar.toLowerCase()) {
        [letters[i],letters[i + 1] ] = [letters[i + 1],letters[i] ]
        changePost = true;
      }
    }
  }
  console.log(letters);
}

console.log(alphabetized("The Holy Bible") === "BbeehHilloTy"); 

/*
function alphabetized(str) {
  let cleanStr = str.replace(/[^a-z]/gi, '');
  let strArray = cleanStr.split('');
  let sortedArray = [];
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < ALPHABET.length; i++) {
    let cleanStrArrayLowercase = strArray.map(letter => letter.toLowerCase());
    while(cleanStrArrayLowercase.includes(ALPHABET[i])) {
      let index = cleanStrArrayLowercase.indexOf(ALPHABET[i]);
      sortedArray.push(strArray[index]);
      cleanStrArrayLowercase[index] = ' ';
    }
  }
  // console.log(sortedArray);
  return sortedArray.join('');
}
*/