/* After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.


PROBLEMS:
input: a number (positif or negative)
ouput: a string (hh:mm)

rules:
- if the input is negative the time is before midnight
- if the input is positive the time is after midnight

Examples:
0 --> "00:00"
- 3 ---> 24 : 00 - 3 = 23: 57
hour in minutes 24 * 60 = 1437
time in minutes : 1440 - 3 = 1437
current time in hour = 1437 / 60 = 23.95
current time in minutes = (23.95 - 23 = 0.95) * 60;

35 -
it's under 60 ---> current time in minutes
3000 - above 24 hours (1440min) --> current time in hour(3000 / 1440)



DATA STRUCTURE:
1. create const of hour in minutes
2. create initial value of current time in hour = '00'
3. create initial value of current time in minutes = '00'
4. check the input:
   
   - if it's negative:
     - determinue time in minutes --> hourInMinutes - input
     - determine current time in hour --> round it to the smalles colser(timeInMinutes / 60) - reaassign the initial value
     - determine current time in minutes --> ((time in minutes / 60) - current time in hour) * 60 - reassign the initial value
   
     -If it's positive:
    - if it's < 60 --> current time in minutes = input
    - if it's > hour in minutes ---> current time in hour = round (input / hour in minutes)
    - if it's < hour in minutes --->
      - current time in hour = round (input / 60)
      - current itme in minutes =  round up (input / 60 - time in hour)

      5. return string interpolation current time in hours and current time in minutes


*/
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29"); 

function timeOfDay(num) {
  if (num === 0) return "00:00"
   const AN_HOUR_IN_MINUTES = 24 * 60;
   const ONE_HOUR = 60;
   let currentHour = "00";
   let currentMinute = "00";

   if(num < 60 && num > 0) return `00:${num}`;

   if (num > AN_HOUR_IN_MINUTES) {
     currentHour = Math.floor(num / AN_HOUR_IN_MINUTES);
     return `0${currentHour}:${currentMinute}`
   }

   if (num >= 60 && num < AN_HOUR_IN_MINUTES) {
     currentHour = Math.floor(num / 60);
     currentMinute = Math.floor(((num / 60) - currentHour)* 60);
    
  }

   if ( num > -AN_HOUR_IN_MINUTES && num < 0 ) {
    currentHour = Math.floor((AN_HOUR_IN_MINUTES + num) / ONE_HOUR);
    
    currentMinute = Math.ceil((((AN_HOUR_IN_MINUTES + num) / ONE_HOUR) - currentHour) * 60);
    
   }

   if (num < -AN_HOUR_IN_MINUTES) {
     let minutesPositive = (num + (AN_HOUR_IN_MINUTES * (Math.floor(num / -AN_HOUR_IN_MINUTES)))) + AN_HOUR_IN_MINUTES;
     currentHour = Math.floor(minutesPositive / 60);
     currentMinute = Math.floor(((minutesPositive / 60) - currentHour) * 60)
   };

   if (currentHour <= 9 && currentMinute <= 9) {
     return `0${currentHour}:0${currentMinute}`;
   } else if(currentHour <= 9){
    return `0${currentHour}:${currentMinute}`;
   } else {
    return `${currentHour}:${currentMinute}`;
   }

}
