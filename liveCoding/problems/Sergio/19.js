/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


input: a string
output: a new string
- add the same letter increment by 1 for each letter
- the first char should be capital
- each group letter divide by -
- the input are only letter

- convert the letter to an array of char
- iterate over the array of char
  - repeat the same char based on the index + 1
  - capitalized the first letter 
- end of iteration
- convert back the array to string with - as deliminator
*/

function accum1(str) {
  let arrChar = str.split('');
  
  let letterGroup = arrChar.map((char, idx) => {
    let repeat = char.repeat(idx + 1);
    return repeat = repeat[0].toUpperCase() + repeat.slice(1);
  })
  
  return letterGroup.join('-');
}



console.log(accum("abcd"))

function accum(str) {
  let arrChar = str.split('');
  
  return arrChar.map((char, idx) => char = char.toUpperCase() + char.toLowerCase().repeat(idx)).join('-');
}

