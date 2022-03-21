/*Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

/*
PROBLEM
input: integers
output: integers
- the last singel digit number produce from the sum of each digits

rules/question:
- The input will be a non-negative integer.
- n laways greater than 0

EXAMPLE
console.log(digital_root(16), 7 )
165
1, 6, 5
12
1,2

1 + 6 = 7

DATA STRUCTURE
input: integers
string 
array
output: integers

ALGORITHM

-  do loop while true
   - convert the number to string and to array of char; 'arrChars'
   - number = compute the 'sum' of 'arrChars'
   - if the number length === 1, return number
-  end loop

*/



function digital_root(num) {
  while(true) {
    let arrChar = String(num).split('');
    num = arrChar.reduce((sum, ele) => sum + Number(ele), 0)
    if(String(num).length === 1) return num;
  }
}
console.log(digital_root(16), 7 )
console.log(digital_root(456), 6 )
