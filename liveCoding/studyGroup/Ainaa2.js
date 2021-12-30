/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a method which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 
Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.
Single digit numbers will NOT be considered numerical palindromes. 

Problems:
input: 2 numbers
output: array --> palindrome after that number and the array has length of s

num = 6 --> palindrome after that number and the array has length of s
s = 4 ---> [11,22,33,44]

- if num is palindrom is included
- if input is not integer or less than 0 return "Not Valid"
- Single digit numbers is not palindrome.

Example:
6,4 // == [11,22,33,44]
75, 1 == [77],
101, 2 = [101, 111]


Data Stucture:
input: numbers
output: array

Algorthim:
1. check the numbers after num (including the num)  if it's palindrome.
-- palindrome: numbers that reads the same backward and forward
-- convert the number to string, string to array, reverse the array, convert back to string
-- compare the og string with the reverse string, if it's equal it's palindrome.

2. create an array of palindrome number, which length is 's' number, start with num if its palindrome.
-- create an empty array
-- if the length of the array is not equal to s:
   check the number after the num if it's palindrome push it to the array (using for loop) 
   -- increment the num by 1, check if it's palindrome, if's palindrome push to the array.
-- if it's equal, then stop the loop / checking the number (what?) and return the array.


--- num = 6
--- s = 4
[]
1. 6, 7, 8, 9, 10, 11 --> [11] // length 1
12, 13, 14, 15, 16, 17, 18, 19, 20, 21 , 22 --> [11, 22] // length 2



console.log(palindrome("ACCDDCCA",3)) // == "Not valid"
console.log(palindrome(773,"1551")) // == "Not valid"
console.log(palindrome(-4505,15)) // == "Not valid"
console.log(palindrome(4505,-15)) // == "Not valid"



function isPalindrome(num) {
  let str = String(num);
  if (str.length === 1) return false;
  
  let arr = str.split('');
  let strRev = arr.reverse().join('');
  
  return str === strRev;

}



function palindrome(startNum, s) {
  if(!Number.isInteger(startNum) || startNum < 0) return "Not valid";
  if(!Number.isInteger(s) || s < 0) return "Not valid";
  
  let arr = [];
  let number = startNum;
  
  while (arr.length !== s) {
     if (isPalindrome(number)) {
        arr.push(number); 
     };
   
    number += 1;
 };

  return arr;
}


/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a method which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 
Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.
Single digit numbers will NOT be considered numerical palindromes. 

Problem:
input: 2 numbers (num and s)
       - num is the starting number
       - s is the length of a return array

Output: an array of numerical palindrome
        the length of the array is `s` number

Question:
What is palindrome?
A palindrome is a number which reads the same backward as forward.

Rules:
- if the starting number is palindrom it should be included.
- if the input is not integer or less than 0 return "Not Valid"
- Single digit numbers is not palindrome.

Example:
6,4 == [11,22,33,44]

num = 6 --> starting number
s = 4 ---> the length of the array

6, 7, 8, 9, 10, 11 --> 11 // single digit is not palindrome
12, 13,.... 22 ---> 11, 22
23, 24, 25... 33 ---> 11, 22, 33
34,35.... 44 ---> 11, 22, 33, 44
}

Data Structure:
Input: numbers
ouput: an array

Algoritm:
1. create a 'result' array --> [];
2.check the number if it's palindrome starting with the given argument (num)
  - how to check if it's palindrom:
    - convert the number to string
    - convert it to an array
    - reverse the array
    - convert back to string
    - compare the reverse string with the original string
       - if it's equal return true
       - return false otherwise

3. If it's palindrome push it to the result array
4. increment the number
5. repeat the steps 2 - 4 until the length of the result array is the same as the second given argument (s)
6. return the result array.



*/

function isPalindrome(num) {
   let strNum = String(num);
   if(strNum.length === 1) return false;

   let revStrNum = strNum.split('').reverse().join('');
   
   return strNum === revStrNum;
}

function palindrome(num, s) {
   if ((!Number.isInteger(num) || num < 0) || (!Number.isInteger(s) || s < 0)) return 'Not Valid';
 
   let result = [];

   for(let number = num; result.length < s; number += 1) {
   
      if(isPalindrome(number)) {
         result.push(number);
      }

   }
  return result; 
}


console.log(palindrome(6,4)) // == [11,22,33,44]
console.log(palindrome(6,4)) // == [11,22,33,44]
console.log(palindrome(75,1)) // == [77]
console.log(palindrome(101,2)) // == [101,111]
console.log(palindrome(20,0)) // == []
console.log(palindrome(0,4)) // == [11,22,33,44]
console.log(palindrome("ACCDDCCA",3)) // == "Not valid"
console.log(palindrome(773,"1551")) // == "Not valid"
console.log(palindrome(-4505,15)) // == "Not valid"
console.log(palindrome(4505,-15)) // == "Not valid"


