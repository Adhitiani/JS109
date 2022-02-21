/*Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

next featured number
- an odd number
- multiple by 7
- its digit accuring only one
- the next one after the input number

A:
- if the input number === 9876543201 return "There is no possible number that fulfills those requirements."
- init num to 0
- do the loops while the number is less than 9876543201
- in each iteration:
  - increment the number by 7
  - if the number is greater than the input number:
    - if it's odd and the number is occuring only one
      
      // helper function:
        - is occuring only one:
          - convert the number to string
          - iterate over the string
          - if the current number indexof is not the same as the last index of return false
          - return true
          
    - return the number


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
*/



function featured1(startNum) {
  if (startNum === 9876543201) return "There is no possible number that fulfills those requirements."
  
  for (let num = startNum + 1; num <= 9876543201; num += 7) {
    if (num > startNum) {
      if (num % 2 !== 0 && occurOne(num)) return num
    }
  }
}


function occurOne(num) {
  let str = String(num);

  for (let i = 0; i < str.length; i ++) {
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
  
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

function featured(num) {
  //if (num === 9876543201) return "There is no possible number that fulfills those requirements."
  
/*

- find the start number:
- get the reminder of the input number % 7
- the last multiple 7 number = input number - reminder assign it as the start number

- get the next number = last multiply + 7
- if it's odd and occurance 1 return the number
- if not add 7

*/

/*Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

P:
rules:
- return the next featured number greater than the integer
- featured number is:
  - odd number
  - multiple of 7
  - occuring exactly one of each
- if there is no featured number return "There is no possible number that fulfills those requirements." 
- the largest possible featured number is 9876543201

A:

- get the last number that is multiple of 7 right before the input number
- init 'startNumber' and assing it to last number + 7
- iterate over the number until max 9876543201
- start the iteration with 'startNumber' 
- for each of the number:
  - if the number odd number and multiple of 7 and
  - if the number occuring only one each
    - return the number 
  - increment the number by 7
- return "There is no possible number that fulfills those requirements."

    
    
//- check if the number occuring only one each
- convert the number to string
- iterate over the string
- for each of the string char:
  - if the last index of the string char is not the same of the index of the char return false
- return true  



featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

*/

function featured(num) {
  const MAX = 9876543201;
  let lastMultiple7 = Math.floor(num / 7) * 7;
  let nextNumber = lastMultiple7 + 7;
  
  for (let i = nextNumber; i <= MAX; i += 7) {
    if (oddMultiple7(i) && occurOnce(i)) {
      return i;
    }
  }
  return "There is no possible number that fulfills those requirements."
}
    


function oddMultiple7(num) {
  return num % 2 !== 0 && num % 7 === 0
}

function occurOnce(num) {
  let str = String(num);
  
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20) === 21);
console.log(featured(21) === 35);           // 35
console.log(featured(997)=== 1029);          // 1029
console.log(featured(1029) === 1043);         // 1043
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");   // "There is no possible number that fulfills those requirements."
