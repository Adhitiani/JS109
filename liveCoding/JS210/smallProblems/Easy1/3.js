/*
How Big is the Room

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Copy Code
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

PROBLEM:
input: 2 numbers (length and width)
output: string (the area of the room)

rules:
explicit
- input are in meters
- return the area of the room both in square meters and square feets
- 1 square meter 1 square meter == 10.7639 square feet

implicit
- the return value is two desimal point

EXAMPLE
10 7
The area of the room is 70.00 square meters (753.47 square feet)

DATA STRUCTURE
input: number
output: string

ALGO
- get the area in meter square = length * width
- get the area in square feet = area meter square * 10.7639 square feet
- return the string with the area in two decimal

*/

function area(length, width) {
  const METER_IN_FEET = 10.7639;
  
  let areaInMeter = width * length;
  let areaInFeet = areaInMeter * METER_IN_FEET;
  
  return `The area of the room is ${areaInMeter.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`
}

console.log(area(10, 7));