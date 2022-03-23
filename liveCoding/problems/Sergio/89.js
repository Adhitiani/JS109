/*
In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.

More examples in the test cases.
*/
/*PROBLEM
input: two numbers(n, k)
output: string
- the lowest number possible after removing k digits number from original numbers


rules/question:
- the order of the number doesn't change
- return the result as string
- we can remove any digits


EXAMPLE
123056 --> 2
1230
1236

DATA STRUCTURE
- input: numbers
- output: string

//do loop n time
  - iterate the number
// 


ALGORITHM
// decrement the number until the length reach number.length - K
   - init 'lowest' to input number
   - do the loop start with the input number
   - end the loop when the number length is less than number.length - K  
     - decrement by one
     - if the length is number.length - K and all digits are included in the input number (helper function) #:
          - if the current number is less than 'lowest'
            - lowest = currentNumber
        
   - end loop
   - return the lowest as string

Helper function
- argument is the current number and the original input
- iterate over the current number
  return false if any of characters is not included in the original number
- end iteration
return true


*/
function solve(num, removeLength) {
  let length = String(num).length
  let numLength = String(num).length - removeLength;
  let lowest = num;
  let currNum = num;

  while (length >= numLength) {
    currNum -= 1;
    if(String(currNum).length === numLength && isAllIncluded(num, currNum)) {
      if (currNum < lowest) lowest = currNum;
    }
  }
  console.log(lowest);
}

function isAllIncluded(num, currNum) {
  let arrNum = String(num).split('');
  let arrCurrentNum = String(currNum).split('');

    if (arrCurrentNum.some(num => !arrNum.includes(num))) return false;
    return true;
  }
  



console.log(solve(123056,1),'12056');
console.log(solve(123056,2),'1056');
console.log(solve(123056,3),'056');
//console.log(solve(123056,4),'05');
//console.log(solve(1284569,1),'124569');
//console.log(solve(1284569,2),'12456');
//console.log(solve(1284569,3),'1245');
//console.log(solve(1284569,4),'124');



/*
- init result to an empty array
- convert the number to string
- iterate over the string
  // take out the current char from the string
  - slice the right side of the current char 
  - slice the left side of the current char
  - concatenated the right side and the left side
  - push the new string to the array
- end iteration


function removeDigit(num) {
  let strNum = String(num);
  let resultArr = [];

    for(let i = 0; i < strNum.length; i++) {
      let newNum = strNum.slice(0, i) + strNum.slice(i + 1);
      resultArr.push(newNum)
    }
   return resultArr.sort()[0];
}

console.log(removeDigit(123056));
/*
function solve(n, k) {
  let str = String(n);
  let arr = [[str]];
  for (let i = 1; i <= k; i += 1) {
    arr[i] = removeNum(arr, i)
  }
  arr[k].sort((a, b) => Number(a) - Number(b));
  return arr[k][0];
}

function removeNum(array, idx) {
  let prevArr = array[idx - 1];
  let newArr = [];
  prevArr.forEach(elem => {
    for (let j = 0; j < elem.length; j += 1) {
      newAry.push(elem.slice(0, j) + elem.slice(j + 1))
    }
  });
  return newArr;
}


At first I tried with decrementing the number by one and when the length was equal with the length that we were looking for, I just needed to check whether the numbers there were included in the original input. If it was I need to compare it with other number that meet that criteria and find the lowest. The algoritm seemed make sense but the coderpad coudldnt take it. It took too much time and stop working at some point. 

Then i tried to work with only n = 1, it works. so I need to do it n number of times when it's n digits number that we need to remove. I was thingking of recursion but I don't know how it works.




I peeked Jason's answer so here it is:





*/