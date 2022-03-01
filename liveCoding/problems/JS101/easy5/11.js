/* After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.


PROBLEMS:
input: a number (positif or negative)
ouput: a string (hh:mm)

rules:
- if the input is negative the time is before midnight : less than 24
- if the input is positive the time is after midnight : more than 24

Examples:
0 --> "00:00"
- 3 ---> 24 : 00 - 3 = 23: 57
Hour in a day = 24
Minutes in a day =  24 * 60 = 1440
Hour in minutes = 60

time in minutes : 1440 + (- 3) = 1437
current time in hour = 1437 / 60 = 23.95 --> round it to 23 (parseInt)
current time in minutes = (23.95 - currentTime in Hour = 0.95) * Hour in minutes;

35 -
it's under 60 ---> current time in minutes
3000 - above 24 hours (1440min) --> current time in hour(3000 / 1440)



DATA STRUCTURE:
1. create const minutes per hour = 60
2. creat const hour per day = 24
3. ceate const minutes per day = 24 * 60 = 1440
4. determine that the input is between the range of minutes per day
   - if the input is negative:
     (input % minutes per day) + minutes perDay
   - if the input is positive:
     (input % minutes per day)  
5. determine the hour:
   parseInt(newInput / 60) ---> cut off the desimal point
6. determine the minutes:
   ((newInput / 60) - hour) * minutes per hour
7. return2

5. return string interpolation current time in hours and current time in minutes:
`${String(hour).padStart(2, '0)}:${String(hour).padStart(2, '0)}:


*/
 function timeOfDay2(min) {
   const MINUTES_PER_HOUR = 60;
   const HOUR_PER_DAY = 24;
   const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOUR_PER_DAY;

   let minutesInRange = 0;
   if(min < 0) {
     minutesInRange = (min % MINUTES_PER_DAY) + MINUTES_PER_DAY;
   } else {
     minutesInRange = min % MINUTES_PER_DAY;
   }

   let hours = parseInt(minutesInRange / MINUTES_PER_HOUR);
   console.log(hours);
   let minutes = Math.round(((minutesInRange / MINUTES_PER_HOUR) - hours) * MINUTES_PER_HOUR);
   console.log(minutes);
  
   return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`

 }






console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay2(-3) === "23:57");
console.log(timeOfDay2(35) === "00:35");
console.log(timeOfDay2(-1437) === "00:03");
console.log(timeOfDay2(3000) === "02:00");
console.log(timeOfDay2(800) === "13:20");
console.log(timeOfDay2(-4231) === "01:29"); 



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
 