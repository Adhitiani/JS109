/*
Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

For Example (input1, vowel) => output:

("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i') => 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
('adira wants to go to the park', 'o') =>'odoro wonts to go to tho pork'
There will never be an uppercase letter as an input.

A:
- convert the input1 to an array of word
- iterate over the arrayof word
  - convert the curr word to an array of char
  - iterate over the array of char
    - if the curr char is vowel change the currChar to 'vowel'
  - end of iteration
  - convert back the array to string
- end iteration
- conver back the array to stirng
- return the string
*/

function vowelChange(str, vow) {
  let arrWords = str.split(' ');
  
  let newWords = arrWords.map(word => {
     return word.split('').map(char => {
      if('aiueoy'.includes(char)) char = vow;
      return char;                         
      }).join('');
    })
 return newWords.join(' ')
}

console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!",'i'));

