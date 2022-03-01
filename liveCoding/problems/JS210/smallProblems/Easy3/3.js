/*Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

Copy Code
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

P:
input: an array of number (6 numbers)
output: a string

rules:
- return a string that describe whether the sixth number appears among the first five numbers

E:
[25, 15, 20, 17, 23, 17]
output:
The number 17 appears in [25, 15, 20, 17, 23]
[25, 15, 20, 17, 23, 18]
output:
The number 18 does not appear in [25, 15, 20, 17, 23]

D:
an array --> string

A:
- extract the last element of the array
- check if that last element is include in the remaining array
  - if it's include return: 
  The number 'last element' appears in 'remaining array'
  if it's NOT, return :
  The number 'last element' does not appear in 'remaining array'.


*/

function includeLast(arr) {
  let lastEle = arr.pop();
  
  if (arr.includes(lastEle)) {
   return `The number ${lastEle} appears in [${arr}]`;
  } else {
    return `The number ${lastEle} does not appear in [${arr}]`;
  };
 
}

console.log(includeLast([25, 15, 20, 17, 23, 17]));
console.log(includeLast([25, 15, 20, 17, 23, 18]));