//What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

//snippet 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// snippet 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/*
On line 1, the global variable `counter` is declared and initialized to `0`.
On snippet 1, the `while` loop is defined on lines 6 to 9. It will run while the counter is greater than 0. Inside the `while` body, line 7 logs the string `'Woooot!'` and line 8 decrement `counter` by `1`. This `while` loop first check the condition expression, if it evaluates to true, it will run the code.

While in snippet 2, the code inside the `do` body will run at least once then it check the conditional expression.




*/