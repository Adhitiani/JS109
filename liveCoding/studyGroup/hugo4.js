/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/
/*
Problem:
input: number
output: string
- the expanded form

rule:
- all numbers will be greater than 0

Example:
12 --> 10 + 2
42 --> 40 + 2
70304 --> 70000 + 300 + 4

- in each loop to find the reminder of 10 power 1 (increasing in each loop)
- take the last digit of number
  - the reminder input number % 10 power 1 --> the last digit
  4
- the remaining one which is input number - last digit
  - the remining number 70304 - 4 = 70300
-  the reminder input number % 10 power 2 ---> 0
if it's 0 go to another iteration -- continue
- te reminder input number % 10 power 3 ---> 300
- the remaining number 70300 - 300 = 70000
- the reminder input number % 10 power 4 --> 0 -- continue
- the reminder input number % 10 power 5 --> 70000
- the remaining number 70000 - 70000 = 0 
end the loop
  

70304
70300 ->4
 the reminder of 10 --> the last digit
 the reminder of 100 --> the second digit / if the reminder is 0 go to thex higher one
 the reminder of 1000 --> 300
 the reminder of 10000


Data S:
input: number
output: string


- init result arr = [70000, 300, 4]
70304


A:
init result = []
init the power = 1
- init remaining = input number;
do the loop while remaining > 0
- init reminder = remaining % 10 power
    if the reminder is 0 continue
    else 
    add the reminder to the result array
- remaining -= reminder
- increment the power by 1
end loop
- turn the array to string with ' + ' as divider

*/

// function expandedForm(num) {
//   let result = [];
//   let power = 1;
//   let remainingNum = num;
//   let reminder;
  
  
//   while(remainingNum > 0) {
//     reminder = remainingNum % Math.pow(10, power);
//     result.unshift(reminder)
//     remainingNum -= reminder;
//     power += 1
//   }
  
//   let cleanNum = result.filter(num => num !== 0);
//   return cleanNum.join(' + ')
// }

function expandedForm(num) {
  let strNum = String(num);
  let expandedNum = [];
  let result = '';
  for (let idx = 0; idx < strNum.length; idx += 1) {
    if (strNum[idx] > '0') {
      expandedNum.push(strNum[idx] + '0'.repeat(strNum.slice(idx).length - 1));
    }
  }
  for (let idx = 0; idx < expandedNum.length; idx += 1) {
    if (result.length > 1) {
      result += ' + ';
    }
    result += expandedNum[idx];
  }
  return result;
}

'70304'

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'