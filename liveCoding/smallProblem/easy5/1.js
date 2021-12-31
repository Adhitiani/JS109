/* Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Examples:

Copy Code
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown. 

PROBLEM:
input: a floating number
        - representing an angle between 0 and 360 degrees
output: a string
        - representing the angle in degress, minutes, and second
        - (˚) degree
        - (') minute
        - (") seconds

rules:
- there are 60 minutes in a degree 
- there are 60 seconds in minute

EXAMPLE:
30 ---> 30˚00'00"
76.73 ---> 76˚ 0.73 X 60 = 43.8 --> 43', 0.8 x 60, 18" --> 76˚43'48"
degree = Math.floor(76.73) = 76
minutes = 76.73 - Math.floor (76.73) = 0.73
           Math.Floor(0.73 * 60) = 43
second = 0.73 * 60 = 43.8
         43.8 - mathFloor(0.73 * 60) = 0.8
         0.8 * 60 = 48

Data Structure:
input: number
output: string

ALGORITHM:
1. determine the degree of the input number:
   round the number to integer
2. determine the minutes of the input number
   round the result of (input - degree) * 60 to integer
3. determine the seconds of the input number:
   round the result of (degree in minutes floating - degree in minute integer ) * 60 to integer
4. return a string interpolation        

*/

function dms(num) {
 let degree = parseInt(num);
 let minutes = parseInt((num - degree) * 60);
 let minutesInSecond = (num - degree) * 60;
 let seconds = parseInt((minutesInSecond - minutes) * 60);
 if(minutes < 10) minutes = '0' + minutes;
 if(seconds < 10) seconds = '0' + seconds;

 return `${degree}˚${minutes}'${seconds}"`

}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));       // 254°35'59"
console.log(dms(93.034773))    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"