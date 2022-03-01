/* Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:


logInBox('To boldly go where no one has gone before.');
will log on the console:


+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+ 


Problem:
- input:  a string
- output : a banner string

- 5 rows
 -- 1. the first and the last '+' the middles is '-' that depends on the length of the string
 -- 2. the first and the last '|'
 -- 3. the first and the last '|' the middle is the sentences
 -- 4.  the first and the last '|'
 -- 5. the first and the last '+' the middles is '-' that depends on the length of the string

 1. row 1 = '+' + '-'.repeat(string.length) + '+'
*/

/* function logInBox(str) {
 let row1 = '+-' + '-'.repeat(str.length) + '-+';
 let row2 = '| ' + ' '.repeat(str.length) + ' |';
 let row3 = '| ' + str + ' |';
 let row4 = '| ' + ' '.repeat(str.length) + ' |';
 let row5 = '+-' + '-'.repeat(str.length) + '-+';

 console.log(row1);
 console.log(row2);
 console.log(row3);
 console.log(row4);
 console.log(row5);

} */

function logInBox(str) {
  let topBottom = '+-' + '-'.repeat(str.length) + '-+';
  let side = '| ' + ' '.repeat(str.length) + ' |';
  let text = '| ' + str + ' |';

  let arr = [topBottom, side, text, side, topBottom];
  arr.forEach(line => console.log(line));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
