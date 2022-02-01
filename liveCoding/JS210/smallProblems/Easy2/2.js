/*Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

Copy Code
logInBox('To boldly go where no one has gone before.');
will log on the console:

Copy Code
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
Copy Code
logInBox('');
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window.

input: a string
output: a stirng

rules:
- log the given string within a box
- empty string will log an empty box

EXAMPLE
see above

DATA STRUCTURE
- string --> string

ALGO
- iterate over the number from 1 to 5
  - the first iteration log '+-' + '-' with the same number as string length + '-+'
  - second iteration log '|' + empty space with the same number as string lenght + 2 + '|'
  - the third iteration log '|' + ' ' + string + ' ' + '|'
  - the fourth iteration log log '|' + empty space with the same number as string lenght + 2 + '|'
  - the last iteration log '+-' + '-' with the same number as string length + '-+'

*/

function logInBox(str) {
  let topBottom = `+-${'-'.repeat(str.length)}-+`;
  let leftRight = `| ${' '.repeat(str.length)} |`;
  let message = `| ${str} |`
  
  for (let number = 1; number <= 5; number ++) {
    if(number === 1 || number === 5) console.log(topBottom);
    if(number === 2 || number === 4) console.log(leftRight);
    if(number === 3) console.log(message);
  };
}

logInBox('To boldly go where no one has gone before.');
logInBox('');