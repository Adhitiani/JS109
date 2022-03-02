function reverseOnlyLetters(string) {
  let letter = [];
  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    if(currChar.toLowerCase() !== currChar.toUpperCase()) {
      letter.push(currChar);
    }
  }
  
  let reverseLetter = letter.reverse();
  let arrLetter = string.split('');
  
 
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i].toLowerCase() === arrLetter[i].toUpperCase()) {
      reverseLetter.splice(i,0,arrLetter[i])
    }
  }
  return reverseLetter.join('');
}

function reverseOnlyLetters1(string) {
  let letter = [];
  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    if(currChar.toLowerCase() !== currChar.toUpperCase()) {
      letter.push(currChar);
    }
  }
  
  let reverseLetter = letter.reverse();
  let arrLetter = string.split('');
  
 
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i].toLowerCase() === arrLetter[i].toUpperCase()) {
      reverseLetter.splice(i,0,arrLetter[i])
    }
  }
  return reverseLetter.join('');
}

console.log(reverseOnlyLetters('ab-cd'))

function reverseOnlyLetters(string) {
  let arrLetter = string.split('');
  let letter = arrLetter.filter(char => char.toLowerCase() !== char.toUpperCase());
  
  let reverseLetter = letter.reverse();
 
  let result = [];
  let counter = 0;
  
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i].toLowerCase() !== arrLetter[i].toUpperCase()) {
      result.push(reverseLetter[counter]);
      counter += 1   
    } else {
      result.push(arrLetter[i]);
    }
  }
  return result.join('');
}