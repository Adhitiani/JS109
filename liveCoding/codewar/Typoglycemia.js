/*
Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.) 
ignore capitalisation

E:
professionals - p   s

A:
- convert the string to an array of words

- iterate over the array
- for each of the words
  - extract the character from the second element to the element before the last (idx 1 - length - 1)
  - create a 'sort' and init to an empty array:
  - iterate over the words.
  - check the char:
    - if it's letter compare them with each other char code and sort the position
    - if it's not continue
    - 
  - replace the element with the word[0] + sorted in string form +  word[word.length - 1]

"ca-rd
["ca-rd"]

sort = []
c - a --> a - c
ac-rd
c - - con
- r - con

r -d --> d - r
ac - dr stop
[ 'ac-dr']


*/

/*
function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'
}

function scrambleWords(str) {
  let wordsArr = str.split(' ');
  
  for(let i = 0; i < wordsArr.length; i++) {
    let currentWord = wordsArr[i];
    let midChars = currentWord.slice(1, currentWord.length -1)
    let sortMidChar = midChars.slice().split('').sort((a, b) => {
      if (isLetter(a) && isLetter(b)) {
        if(a > b) return 1;
        if(a < b) return -1;
        if(a === b) return 0;
      }
    
    })
    
   return str[0] + sortMidChar.join('') + str[str.length - 1];
    
  }
}

console.log(scrambleWords('professionals'));
console.log(scrambleWords('i'))
console.log(scrambleWords('me'))
console.log(scrambleWords('you'))
console.log(scrambleWords('card-carrying'))
console.log(scrambleWords('shan"t'))
console.log(scrambleWords('-sh-an"t'))

- create a 'result' and init to an empty array
- convert the str to an array of char
- iterate over the char
- for each of char:
  - if the curr char and the next char is letter, compare them
   - if the curr char is greater than the prev change the place
  - else continue 
  

*/

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'
}

function sortLetter(str) {

  let sorted = str.split('').sort();
  let onlyLetter = [];
 
  for (let i = 0; i < sorted.length; i++) {
    if(!"-'.,".includes(sorted[i])) {
      onlyLetter.push(sorted[i])
    }
  }
 
  let nonLetter = [];

  for (let i = 0; i < str.length; i++) {
  if("-'.,".includes(str[i])) {
   nonLetter.push(str[i])
  }
}
  for (let i = 0; i < nonLetter.length; i ++) {
  onlyLetter.splice(str.indexOf(nonLetter[i]), 0, nonLetter[i]);
};
  
  return onlyLetter.join('');
  
}


function scrambleWords(words) {
  
  

  let arrWord = words.split(' ').map(str => {
  
  let first = str[0];
  let last = str[str.length - 1];
  let middle;
    if (str.length < 3) return str;
    
    if(isLetter(first) && isLetter(last)) {
     middle = str.slice(1, str.length -1);
     return first + sortLetter(middle) + last;
    
    } else if (!isLetter(first)) {
      first = str[1];
      middle = str.slice(2, str.length -1);
      return str[0] + first + sortLetter(middle) + last;
      
  } else if (!isLetter(last)) {
     last = str[str.length -2]
     middle = str.slice(1, str.length -2)
     return first + sortLetter(middle) + last + str[str.length - 1];
    
  } else {
    first = str[1];
    last = str[str.length -2 ];
    middle = str.slice(2, str.length -2);
    return str[0] + first + sortLetter(middle) + last +  str[str.length - 1];
  }
    
  
  })
  
  return arrWord.join(' ');
  
}
console.log(scrambleWords('card-carrying'))
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."))

/*
- convert the string to an array of words
- iterate over the array
- for each of word
  - if the word.length < 3 return word
  - convert it to an array of char
  
  validLetter:
  - get all the chars that are letter and assign it to 'onlyLetter'
  - get the first char in the 'onlyLetter' and assign it to 'first'
  - get the last char in the 'onlyLetter' and assign it to 'last'
  - get the middlechar and sort it
  - reassign 'onlyLetter' with 'first' + 'middle' + 'last'
  
  invalidLetter:
  - get all the char that are NOT letter and assing it to 'sign'
  
  - iterate over the 'sign' element
    - for each of element:
      - add the element to the onlyletter based on it's index position
      
- convert back the array of words to string
-return the string




*/

function validLetter(arrOfChar) {
  let letter = arrOfChar.filter(char => !"-'.,".includes(char));
  let first = letter[0]
  let middle = letter.slice(1, letter.length -1).sort();
  let last = letter[letter.length - 1]
  
  return [].concat(first, middle, last);
}



function ScrambleWords(str) {
 let wordArr = str.split(' ');
 console.log(wordArr) 
  
 let sortedLetter = []
 
   wordArr.map(word => {
   let letter = validLetter(word.split(''));
   let sign = word.split('').filter(char => "-'.,".includes(char))
   
   for (let i = 0; i < sign.length; i++) {
     letter.splice(str.indexOf(sign[i]), 0, sign[i]);
   };
   
   return letter.join('');
 });
  console.log(sortedLetter);
 
  return sortedLetter.join(' ');
}

console.log(ScrambleWords('card-carrying love'))
//console.log(validLetter(['b', 'd', '-','b', 'c' , 'a', 'a']));

