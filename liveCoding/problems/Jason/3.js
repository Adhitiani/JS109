/*Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

//compute the occurance of each chars in the string
// build a new string based on the occurance, if the chars has more than 2 occurance concatenated the new string with char+char+ [char.repeat(occurance - 2)]
*/

function stringParse(string) {
  if (typeof string !== 'string') return "Please enter a valid string";
  
  let charOccur = {};
  for(let char of string) {
    charOccur[char] = charOccur[char] + 1 || 1;
  }
  let newStr = ''
  for(let char in charOccur) {
   if(charOccur[char] <= 2) {
     newStr += char.repeat(charOccur[char])
   } else {
     newStr += char.repeat(2) + `[${char.repeat(charOccur[char] - 2)}]`
   }
  }
   return newStr
}

console.log(stringParse("aaaabbcdefffffffg"))

/*Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.


- separated the consecuitve letters in one group and placed it an array
  - init an array with the first letter of the string as its element
  - iterate over the string start at index 1
    - if the current element is the same as the prev element
      - concatenated the last element of the array with currEalement
    - else
      - push current char to the array
  - end iterartion
- iterate over the array
  - check if the length of the elemnt is greater than 2
    - if it is replace the element with two original characters and the rest of remaining chars in the bracket
    - if it's not keep the same element
- end iteration
- return the array in string form.
  
*/

function stringParse(str) {
  let sameLetters = [str[0]];
  for(let i = 1; i < str.length; i++) {
    let current = str[i];
    let prev = str[i - 1];
    
    if(current === prev) {
      sameLetters[sameLetters.length - 1] += current;
    } else {
      sameLetters.push(current);
    }
  }
  let resultArr = sameLetters.map(str => {
    if(str.length > 2) {
     return str[0].repeat(2) + `[${str[0].repeat(str.length - 2)}]`
    } else {
     return str;
    }
  })
  return resultArr.join('');
}

console.log(stringParse("aaaabbcdefffffffg"), "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop"), "boopdedoop")
console.log(stringParse("helloookat"), "helloo[o]kat")