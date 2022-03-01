/* What Century is That?

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:
Problem:
input: number (a year)
output: a string ( centruy number end with approprieet end)

what is the centruy number?
every 100 year
New centruies begin in years that end with 01, 
1901 - 2000 = 20th centuey
1701 - 1800 = 17th centruy
1 - 100 = 1st
101 - 200 = 2nd

- approprite end:
1 --> st
2 --> nd
3 --> rd
4 - 9 and 0 --> th

Example:
2000 --> 20th
1965 --> 20th

Data Structure:
- input: number
- output : string

Algortime:
1. determine the century number
-- divides the number with 100 and round it up
2. convert the centruy number to string
3. check the last character, and add the appropriate end accodring to the character :
   1 --> st
   2 --> nd
   3 --> rd
   11 , 12, 13 --> th
   4 - 9 and 0 --> th



Copy Code */
console.log(century(2000));
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));       // "20th"
console.log(century(256));        // "3rd"
console.log(century(5));          // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));      // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));      // "113th"

function century(year) {
  let cetStr = String(Math.ceil(year / 100));
  
  if( cetStr[cetStr.length - 1] === '1' && cetStr[cetStr.length - 2] !== '1') return cetStr + 'st';
  if( cetStr[cetStr.length - 1] === '2' && cetStr[cetStr.length - 2] !== '1') return cetStr + 'nd';
  if( cetStr[cetStr.length - 1] === '3' && cetStr[cetStr.length - 2] !== '1') return cetStr + 'rd';

  return cetStr + 'th';

}
