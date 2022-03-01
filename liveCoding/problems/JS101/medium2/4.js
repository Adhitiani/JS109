/*Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.


PROBLEM
input: a number (year)
output: a number

Rules:
Explicit
- return the number of Friday the 13th in that year
- the year is greater than 1752
- the same calender will remain in use for the foreseeable future.

implicit
- When passing a month to DATE constructor the value should be integer between 0 (January) and 11 (December)
- the day argument start at 1 istead of 0
- Data.prototype getDay return an integer between 0 (SUnday) and 6 (Saturday)

EXAMPLE
see below

DATA STRUCTURE
- number --> number

ALGO
- iterate over the months in the year. 
- For each of month:
  - get the 13th day of the month
- filter the 13th that fall in Friday
- count the Friday
- return the friday


*/

function fridayThe13ths(year) {
  let the13 = [];
  for (let month = 0; month < 12; month ++) {
    the13.push(new Date(year, month, 13))
  };
  
  let friday = the13.filter(date => date.getDay() === 5);
  return friday.length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

