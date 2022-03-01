/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

A:
convert the number to string
convert the string to an array of char
conver the array of char to array of num

init 'result' to an empty string;
iterate over the array:
in each iteration:
- replace currNum with 
- currNum * (Math.pow(10, array.length - 1 - idx))
conver the array to a string with + as deliminator
return the string
*/

function expandedForm(num) {
  let arrNum = String(num).split('').map(Number);
  let newArr = arrNum.map((elem, idx) => elem * Math.pow(10, arrNum.length - 1 - idx));
  let cleanZero = newArr.filter(num => num > 0);
  
 return cleanZero.join(' + ');
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42));
console.log(expandedForm(70304));