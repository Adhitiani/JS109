/* After Midnight (Part 2)

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

PROBLEM:
After midnight:
input: a string (24 hour format)
output: a number (minutes after midnight.. before 24)

before midnight:
input: a string (24hour format)
output: a number (minutes before midnight.. after 24)

RUles:
- return a value in the range 0..1439

Data Structure:
input: string
output: number

Examples:
afterMidnight("00:00") === 0
beforeMidnight("00:00") === 0

minutes per hour = 60
hour per day = 24
minutes perday = 1440

"12:34"
afterMidnight:
hours to minutes: 12 * minutes per hour = 720
minutes: 34
Total = 754

before midnight:
minutes per day - afterMidnight

ALGORITM
1. extract the hour from the input and convert it to a number
2. extract the minutes from the input and convert it to a number

After midnight:
- if the input is 00:00 return 0
1. extract the hour from the input and convert it to a number
2. extract the minutes from the input and convert it to a number

3. count hours to minues
4. add it with the minutes
5. if the result is 1440 return 2
6. other wise return the number

Before Midnight:
1. subtract minutes per day with the value of invoke aftermidnight 


Copy Code
 */



let HOURS_PER_DAY = 24;
let MINUTES_PER_HOUR = 60;
let MINUTES_PER_DAY = 24 * 60;

function afterMidnight(time) {
  if(time === "00:00") return 0;
  let hours = parseInt(time.slice(0, 2));
  let minutes = parseInt(time.slice(3));
  
  let hoursInMinutes = hours * MINUTES_PER_HOUR;
  let totalMinutes = hoursInMinutes + minutes;

   return totalMinutes === MINUTES_PER_DAY? 0 : totalMinutes;
};

function beforeMidnight(time){
  let minutes = MINUTES_PER_DAY - afterMidnight(time);
  return minutes === MINUTES_PER_DAY? 0 : minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
 console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);