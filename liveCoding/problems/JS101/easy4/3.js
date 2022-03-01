/* When Will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

Copy Code
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! 

Problem: 
Input: numbers (age and retire years)
Output: string and number (year of retire, years left until retire)

years left until retire = retire years - age
years retire = current year + years left until retire

Example:
age: 30
retire year in : 70

years left until retire = 70 -30 = 40
years retire = 2021 + 40 = 2061


Data Structure:
input: number
output: number and string

ALgoritm:
1. get the input age from user
2. get the input when will to retire
3. count the left year untill retire
4. count the years to retire

*/

let readline = require('readline-sync');

let age = Number(readline.question('What is your age?\n'));
let yearsToRet = Number(readline.question('At what age would you like to retire?\n'));

let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear)


console.log(`It's ${currentYear}. You will retire in ${ currentYear + (yearsToRet - age)}.`)
console.log(`You have only ${yearsToRet - age} years of work to go!.`)
