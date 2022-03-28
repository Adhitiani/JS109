/*Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

stringExpansion('3D2a5d2f') === 'DDDaadddddff'

init [];
init multiplier = 1
iterate over the string
if currChar is number
reassing the multiplier to number
else
push the currentChar multiplier times
end iteration 
return the array in input string

*/
////////
function stringExpansion(str) {
  let digits = '1234567890'
  let result = [];
  let multiplier = 1;
  
  for(let char of str) {
    if(digits.includes(char)) {
      multiplier = Number(char);
    } else {
      result.push(char.repeat(multiplier))
    }
  }
  return result.join('');  
}

/////////
function stringExpansion1(str) {
  if(str.split('').every(char => char.toLowerCase() !== char.toUpperCase())) return str;
  let array = [];
  let temp = '';
  let strNoNumber = ''
  
  if(!isNumber(str[0])) {
    for(let i = 0; i < str.length; i++) {
      if(!isNumber(str[i])) {
        strNoNumber += str[i];
      } else {
        str = str.slice(i);
        break;
      }
    }
  } 
   
  for(let i = 0; i < str.length; i++) {
    temp += str[i];
    if(!isNumber(str[i]) && isNumber(str[i + 1])) {
      array.push(temp);
      temp = '';
    }
    if(isNumber(str[i]) && isNumber(str[i + 1])) {
      temp = ''
    }
  }
  array.push(temp);
  
  let newArr = array.map(str => {
    let newStr = ''
    for(let i = 1; i< str.length; i++) {
      newStr += str[i].repeat(str[0])
    }
    return newStr
  })
  return  strNoNumber += newArr.join('')
}
function isNumber(char) {
  let digits = '1234567890';
  return digits.includes(char)
}

console.log(stringExpansion('a2b3cde'));