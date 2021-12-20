//Even Numbers

//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// with a helper function
function isEven(num) {
  return num % 2 === 0;
}

for (let number = 1; number < 100; number += 1){
  if (isEven(number)) console.log(number);
};

// for loops with incremeantal number
for (let number = 0; number < 100; number += 2) {
  console.log(number);
};

// for loops with if statment and continue

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) continue;

  console.log(number);
}

