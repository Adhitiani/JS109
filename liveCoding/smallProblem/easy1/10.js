/* Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.


Problem:
- the sum of all number 
- between 1 and the input number
- that are multiples 3 or 5

input: - a number
output - a number (sum of all number from 1 to a number that are multiples of 3 or 5)

Example:
5 --> 3 + 5 = 8
10 --> 3 + 5 + 6 + 9 + 10 = 33

Data structure:
input : number
output: number

Algorithm
1. iterate between 1 to input number
2. check if the current number is divisible by 3 or divisible by 5
   - if so add the number
   - if not continue iteration
3. return the sum of all the number   
*/

/* function multisum(num) {
let total = 0;

for (let number = 1; number <= num; number += 1) {
  if(number % 3 === 0 || number % 5 === 0) {
    total += number;
  }
}

return total;

} */

function multisum(num) {
  
}
console.log(multisum(3))
console.log(multisum(5))
console.log(multisum(10))
console.log(multisum(1000))


multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

