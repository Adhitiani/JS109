/*Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples

# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

function twistedSum(num){
  let sum = 0;
  let counter = 1;
  while(counter <= num) {
    if(counter < 10) {
      sum += counter;
    } else {
      sum += greaterThanTen(counter)
    }
    counter += 1;
  }
  return sum
}

function greaterThanTen(num) {
  let numStr = String(num).split('');
  return numStr.reduce((sum, ele) => sum + Number(ele), 0)
}

console.log(twistedSum(12))
