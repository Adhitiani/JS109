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