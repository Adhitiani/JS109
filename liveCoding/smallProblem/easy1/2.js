//Odd Numbers
//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/*
Problem:
- log odd number from 1 to 99
- each number is separate line

Question:
What is inclusive? including 1 and 99 if they are odd.
what is odd number?
number that is divisible by 2.

example:
2
4
6
8
...
98

Algoritm:
- check if the number is odd one by one from 1 untill 99,
if it's odd log it to the console

// While loop
let counter = 1;

while (counter <= 99) {
 
    console.log(counter)
 
  counter += 2
};
*/

//for loop

for (let counter = 1; counter < 100; counter += 2) {
   console.log(counter);
}

