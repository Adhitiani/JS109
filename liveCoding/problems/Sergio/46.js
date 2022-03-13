/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

A:
- init count = 0
- do iteration while the length of the digit is greater than 1
  - convert the numbwr to string
  - convert the string to an array of number
  - multiplay each of char
  - count += 1
*/



function persistence(num) {
  let count = 0;
  while(String(num).length > 1) {
    num = String(num).split('').reduce((acc, ele) => acc * ele, 1);
    count += 1;
  }
  return count;
}

    console.log(persistence(39),3);
    console.log(persistence(4),0);
    console.log(persistence(25),2);
    console.log(persistence(999),4);
    console.log(persistence(4),0);
    console.log(persistence(25),2);
    console.log(persistence(999),4);
