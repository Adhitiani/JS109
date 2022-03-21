/*Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

*/
/*

PROBLEM
input: 2 numbers
output: number
- return 1 if there are 
  - straight triple of a number in num 1
  - a straight double of the same number in num2
- return 0 if there's not any

rules/question:

EXAMPLE
1222345, 12345
triple = 3


DATA STRUCTURE
input: 2 numbers
string
output: number

ALGORITHM
// convert both num1 and num2 to string; str1 and str2
// check if str1 has triple striaght numbers
  - init arrTriple = []
   - init 'triple' = str1[0]
   - iterate over the str1
     - init prevChar = str1[idx - 1];
     - init currChar = str1[idx]
     - if currChar is equal to prevChar 
       - concatenated the currChar with triple
       - if 'triple'.length is equal to 3 
         - push the triple to arrTriple
         - triple = ''
     - else
       - reassign 'triple' = currChar
   - end iteration

// check if str2 has double straight numbers
   - init arrDouble = []
   - init 'double' = str2[0]
   - iterate over str2
     - init prevChar = str2[idx - 1];
     - init currChar = str2[idx]
     - if currChar is equal to prevChar 
       - concatenated the currChar with double
       - if 'double'.length is equal to 2 
          - push double to arrDouble
          - double to ''
     - else
       - reassign 'double' = currChar
   - end iteration

// Check if the element in doublearr is include in arrTriple
  - iterate the arr Double
451999277,41177722899
triple [999]
double = [11, 77, 22, 99]
   
*/

function tripledouble(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  let arrTriple = [];
  let triple = str1[0];
  for (let i = 1; i < str1.length; i++) {
    let prevChar = str1[i - 1];
    let currChar = str1[i];

    if(currChar === prevChar) {
      triple += currChar;
      if(triple.length === 3) {
        arrTriple.push(triple);
        triple = '';
      };
    } else {
      triple = currChar;
    }
  }

  let arrDouble = [];
  let double = str2[0];
  for(let i = 1; i < str2.length; i++) {
    let prevChar = str2[i - 1];
    let currChar = str2[i];

    if(currChar === prevChar ) {
      double += currChar;
      if(double.length === 2) {
        arrDouble.push(double);
        double = '';
      };
    } else {
      double = currChar;
    }
  }
 
  for (let i = 0; i < arrDouble.length; i++) {
    for (let j = 0; j < arrTriple.length; j++) {
      if(arrTriple[j].includes(arrDouble[i])) {
        return 1;
      } 
    }
  }
  return 0
}

  
  console.log(tripledouble(451999277,41177722899),1);
  console.log(tripledouble(1222345, 12345),0);
  console.log(tripledouble(12345, 12345),0);
  console.log(tripledouble(666789, 12345667),1);
  console.log(tripledouble(10560002, 100),1);
  console.log(tripledouble(1112, 122),0);

  /*Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

*/
/*

PROBLEM
input: 2 numbers
output: number
- return 1 if there are 
  - straight triple of a number in num 1
  - a straight double of the same number in num2
- return 0 if there's not any

rules/question:

EXAMPLE
1222345, 12345
triple = 3


DATA STRUCTURE
input: 2 numbers
string
output: number

ALGORITHM
// convert both num1 and num2 to string; str1 and str2
// check if str1 has triple striaght numbers
  - init arrTriple = []
   - init 'triple' = str1[0]
   - iterate over the str1
     - init prevChar = str1[idx - 1];
     - init currChar = str1[idx]
     - if currChar is equal to prevChar 
       - concatenated the currChar with triple
       - if 'triple'.length is equal to 3 
         - push the triple to arrTriple
         - triple = ''
     - else
       - reassign 'triple' = currChar
   - end iteration

// check if str2 has double straight numbers
   - init arrDouble = []
   - init 'double' = str2[0]
   - iterate over str2
     - init prevChar = str2[idx - 1];
     - init currChar = str2[idx]
     - if currChar is equal to prevChar 
       - concatenated the currChar with double
       - if 'double'.length is equal to 2 
          - push double to arrDouble
          - double to ''
     - else
       - reassign 'double' = currChar
   - end iteration

// Check if the element in doublearr is include in arrTriple
  - iterate the arr Double
451999277,41177722899
triple [999]
double = [11, 77, 22, 99]
   
*/

function tripledouble(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  let arrTriple = [];
  let triple = str1[0];
  for (let i = 1; i < str1.length; i++) {
    let prevChar = str1[i - 1];
    let currChar = str1[i];

    if(currChar === prevChar) {
      triple += currChar;
      if(triple.length === 3) {
        arrTriple.push(triple);
        triple = '';
      };
    } else {
      triple = currChar;
    }
  }

  let arrDouble = [];
  let double = str2[0];
  for(let i = 1; i < str2.length; i++) {
    let prevChar = str2[i - 1];
    let currChar = str2[i];

    if(currChar === prevChar ) {
      double += currChar;
      if(double.length === 2) {
        arrDouble.push(double);
        double = '';
      };
    } else {
      double = currChar;
    }
  }
  for (let i = 0; i < arrTriple.length; i++) {
    if (arrDouble.some(str => {
    return arrTriple[i].includes(str);
  })) return 1;
  
  }
  

  
  /*

  for (let i = 0; i < arrDouble.length; i++) {
    for (let j = 0; j < arrTriple.length; j++) {
      if(arrTriple[j].includes(arrDouble[i])) {
        return 1;
      } 
    }
  }
  */
  return 0
}

  
  console.log(tripledouble(451999277,41177722899),1);
  console.log(tripledouble(1222345, 12345),0);
  console.log(tripledouble(12345, 12345),0);
  console.log(tripledouble(666789, 12345667),1);
  console.log(tripledouble(10560002, 100),1);
  console.log(tripledouble(1112, 122),0);

  /*Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

Problem:
  - Given 2 numbers as arguments, return 1 if the numbers meet a criteria. Otherwise, return 0
  - The criteria is that number is repeated 3 times consecutively in the 1st arg and then repeated 2x consecutively in the 2nd arg
Data Structures:
  - Input: 2 numbers
  - Output: 1 number
  - Other: string
Solution:
  - Convert num args to string. Iterate over strings. See if current char is the same as next char. If it equals 3, look at 2nd arg. Repeat logic but use 2 instead.
  - XXX num1Obj & num2Obj. Add each number + their count. Compare each number to see if the count/value is equal to 3 and 2, respectively
Algorithm:
  - Convert num1 and num2 to strings num1Str & num2Str
  - Init tempNum to empty string
  - Loop over num1Str. Stop before num1Str.length - 1
    - Init currentChar to char at current index
    - Init nextChar to char at next index
    - If currentChar equal to nextChar, then 
        - concat currentChar to tempNum
    - Else if tempNum.length === 3 && logic for arg2 helper function is true
      - Return 1
    - Else, reassign tempNum to empty string
  - End loop
  - Return 0


*/

function tripledouble(num1, num2) {
  let num1Str = String(num1);
  let num2Str = String(num2);
  let tempNum = '';

  for (let i = 0; i < num1Str.length - 1; i++) {
    let currentChar = num1Str[i];
    let nextChar = num1Str[i + 1];

    if (currentChar === nextChar) {
      tempNum += currentChar;
    } else {
      tempNum += currentChar;
      if (tempNum.length === 3 && checkDouble(num2Str, currentChar)) {
        return 1
      } else {
      tempNum = '';
      }
    }
  }
  return 0;
}

function checkDouble(numStr, digitStr) {
  let tempNum = '';
  // let digitStr = String(digit);

  for (let i = 0; i < numStr.length; i++) {
    let currentChar = numStr[i];
    let nextChar = numStr[i + 1];
    if (digitStr === currentChar) {
      // console.log(`digitStr: ${digitStr}`);
      // console.log(`currentChar: ${currentChar}`);
      // console.log(`nextChar: ${nextChar}`);
      if (currentChar === nextChar) {
        tempNum += currentChar;
        // console.log(tempNum)
      } else {
        tempNum += currentChar;
        if (tempNum.length === 2) {
          return true;
        }
      }
    }
  }
  return false;
}

  // - Logic for arg 2 & pass in currentChar from outside logic
  //   - Init tempNum to empty string
  //   - Loop over num2Str. Stop before num2Str.length - 1
  //   - If currentChar === currentChar from outside logic
  //     - Init currentChar to char at current index
  //     - Init nextChar to char at next index
  //     - If currentChar equal to nextChar, then 
  //         - concat currentChar to tempNum
  //     - If tempNum.length === 2, then return true
  // - End loop
  // - Return false

console.log(tripledouble(451999277,41177722899) === 1);
console.log(tripledouble(1222345, 12345) === 0);
console.log(tripledouble(12345, 12345) === 0);
console.log(tripledouble(666789, 12345667) === 1);
console.log(tripledouble(10560002, 100) === 1);
console.log(tripledouble(1112, 122) === 0);

/*
current Char = next char, then concat to temp num
curent Char != next Char, then we still want to concat to temp num
  if tempnum.length === 3 
  else reset temp nun to empty string
*/

function tripledouble(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  let arrTriple = [];
  let triple = str1[0];
  for (let i = 1; i < str1.length; i++) {
    let prevChar = str1[i - 1];
    let currChar = str1[i];

    if(currChar === prevChar) {
      triple += currChar;
      if(triple.length === 3) {
        arrTriple.push(triple);
        triple = '';
      };
    } else {
      triple = currChar;
    }
  }

  let arrDouble = [];
  let double = str2[0];
  for(let i = 1; i < str2.length; i++) {
    let prevChar = str2[i - 1];
    let currChar = str2[i];

    if(currChar === prevChar ) {
      double += currChar;
      if(double.length === 2) {
        arrDouble.push(double);
        double = '';
      };
    } else {
      double = currChar;
    }
  }
 
  for (let i = 0; i < arrDouble.length; i++) {
    for (let j = 0; j < arrTriple.length; j++) {
      if(arrTriple[j].includes(arrDouble[i])) {
        return 1;
      } 
    }
  }
  return 0
}
