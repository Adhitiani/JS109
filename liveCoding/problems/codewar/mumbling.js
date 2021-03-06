/*ALGO
  -create a result string and initialized it to an empty string
  - iterate over the string
    - for each of char:
      - loop as much as the current index + 2
      - in each loop: 
        - the first loop should convert the char in the upper case
        - concatenated the char to the result string
      - concatenated the result '-'  
     - return the result string.slice the last char   
  */
  
  function accum(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
     for (let counter = 0; counter <= i + 1; counter++) {
         counter === 0 ? result += str[i].toUpperCase() : result += str[i];
       }
       result += '-';
     }
     result = result.slice(0, result.length -1);
     return result;
  };

console.log(accum('abc')); // 'A-Bb-Ccc-Dddd'

/*ALGO
  -convert the string to an array of character
  -iterate over the array
  - for each of characters:
    - replace it with an uppercase char and the lowecases as many as the index
  - convert the array to string
  - return the string
  */
  
  function accum(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
     for (let counter = 0; counter < i + 1; counter++) {
         counter === 0 ? result += str[i].toUpperCase() : result += str[i];
       }
       result += '-';
     }
     result = result.slice(0, result.length -1);
     return result;
  };

console.log(accum('abcde'));

function accum1(str) {
  let arrChar = str.split('');
  let resultArr = arrChar.map((char, idx) => {
   return char = char.toUpperCase() + char.toLowerCase().repeat(idx)
  });
 return resultArr.join('-');
  
};

console.log(accum1('abcde'));