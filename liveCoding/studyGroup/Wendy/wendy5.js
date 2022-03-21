
/*
In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.

More examples in the test cases.
*/



/*PROBLEM
input: two integers (K, n)
output: string
- the lowest number possible after we remove n digit number from K

rules/question:
- don't change the order of the number after we remove some digits

EXAMPLE
123056,1

DATA STRUCTURE

ALGORITHM
  - init substring = []
// find all the possible substring
  - convert the number to string
  - iterate over the string with index i (outerloop)
    - iterate over the string with index i + 1 (inner loop)
      - slice the the string start from outerloop index to inner loop Index
      - if the current substring length is equal to k.length - n
         - push it to substring
    - end iteration
  - end iteration

// sort substring in number form in ascending order
// return the first element in the substring in string form
*/

function solve(num1, num2) {
  let substrings = [];
  let num1String = String(num1);

  for(let i = 0; i < num1String.length; i++) {
    for(let j = i + 1; j <= num1String.length; j++) {
      let substring = num1String.split('').splice(i, j);
      console.log(substring);
    }
  }
}

console.log(solve(123056,1) == '12056');
//console.log(solve(123056,2) == '1056');
//console.log(solve(123056,3) == '056');
//console.log(solve(123056,4) == '05');
//console.log(solve(1284569,1) == '124569');
//console.log(solve(1284569,2) == '12456');
//console.log(solve(1284569,3) == '1245');
//console.log(solve(1284569,4) == '124');