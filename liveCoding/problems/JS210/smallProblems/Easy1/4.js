/*Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

Example:

Copy Code
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

PROBLEM
input: 2 numbers (bill and tip percentage)
output: 2 strings (tip and total)

rules:
implicit
- return the tip which is the percentage multipy by the bill
- return the total which is the sum pf the tip and the bill
- return in string with the tip and total is in two decimal point

ALGO
- get the percentage which is tip / 100
- get the tip whihc is bill multiply by the percentage
- get the total which is the sum of bill and tip
return the string

*/

function tipCal(bill, tip) {
  let totalTip = bill * (tip /100);
  let total = bill + totalTip;
  
  console.log(`The tip is $${totalTip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)} `)
};

tipCal(200,15);