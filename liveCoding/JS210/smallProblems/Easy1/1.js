//Odd Numbers

//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
/*
input: number
output: number

rules
Explicit
- log all odd numbers from 1 to 99
- odd numbers? num % 2 !== 0
- inclusive? including 1 and 99
- each number on separate line

EXAMPLE
1
3
5
...
99

DATA STRUCTURE
number --> number

ALGO
- do the loop 
- the loop start at 1
- in each loop log to the console the current number
- increment the number by 2
- stop the loop when the number is equal to 100
*/

function odd(num) {
  for (let number = 1; number <= 100; number += 2) {
    console.log(number);
  }
};

odd(100);

let number = 1;

while (number < 100) {
  console.log(number);
  number += 2;
}