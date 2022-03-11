/*Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l"

You can expect that the string will include only positive numbers.
*/

//Test cases:
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);
console.log(sumOfNumbers("L12aun3ch Sch3oo45l") === 63)


 /*
// get the consequtive number from the string
   - init the 'arrNum' to an empty array
   - init the 'temp' to an empty string
   - init the 'number' to a string  '1234567890'
   - iterate over the input string:
     - for each of char:
       - if the char include in 'number' concatenated the char to 'temp'
       - if the next char is not include in'number' (not number) push the 'temp' to 'arrNum'
       - reassign 'temp' to an empty string
   - when the loop end push the 'temp' to 'arrNum'
   
// Get the sum of the number
   - convert the array of char to an array of number
     - iterate over the array:
       - for each of char convert it to a number
   - add the number together    
//return the sum of the number      
*/

function sumOfNumbers(string) {
  let arrNumber = [];
  let tempNumber = "";
  let digits = `0123456789`
  for (let index = 0; index < string.length; index++) {
    if (digits.includes(string[index])) {
        tempNumber += string[index];
    }
    if (!digits.includes(string[index + 1]) && !!tempNumber) {
        arrNumber.push(tempNumber);
        tempNumber = "";
        }
  }
  return arrNumber.reduce((currentTotal, currentNumber) => currentTotal + Number(currentNumber), 0);
}

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);
console.log(sumOfNumbers("L12aun3ch Sch3oo45l") === 63)


function sumOfNumbers(str) {
  let result = [];
  let strChar = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (isNumber(char)) {
      strChar += char;
    } else {
      result.push(strChar);
      strChar = '';
    }
  }
  return result.filter(val => val !== '').map(val => Number(val)).reduce((acc,el) => acc + el);
}