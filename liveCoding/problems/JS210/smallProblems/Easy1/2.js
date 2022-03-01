//Even Numbers

//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

let number = 2;

while (number < 100) {
  console.log(number);
  number += 2;

}

for (let number = 1; number < 100; number ++) {
  if(number % 2 === 0) console.log(number);
}