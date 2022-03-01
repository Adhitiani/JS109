/* Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

PROBLEM:
input: an integer (number);
output: an array (contain all numbers between 1 and the input)

Rules:
- input is always a positive integer

EXAMPLE:
5 --> [1, 2, 3, 4, 5] // 5 is the length of the array
3 --> [1, 2, 3]// array length = 3

DATA STRUCTURE
input: number
output: array

ALGORITM
1. create an empty array
2. use a loop to push number starting from 1 and increament the number by 1 untill the length is the same as the input
5 ---> array length is 5
while array length is not equal to 5 add number
[] length 0
1 length 1
1, 1 +1 = 2 length 2

Copy Code */
// console.log(sequence(5)) // [1, 2, 3, 4, 5])
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

function sequence(number) {
  let array = [];
  let counter = 1
  

  while(array.length < number) {
    array.push(counter);
    counter += 1
  }

  return array;
}

// map
 function sequence1(num) {
   let array  = [];
   array.length = num;
   array.fill(1, 0, 5);
   
   return array.map((_, idx)=> idx += 1)
 }
   
 

 console.log(sequence1(5)) // [1, 2, 3, 4, 5])
//sequence(3);    // [1, 2, 3]
//sequence(1);    // [1]

// for loop
// 1. create an empty array
// 2. push a number strating with 1, increment by 1 in each iteration, untill the number is the same as the input

function sequence2(num) {
  let array = [];
  for (let number = 1; number <= num; number++) {
    array.push(number);
    console.log(array);
  }
}

console.log(sequence2(5)) // [1, 2, 3, 4, 5])
//sequence(3);    // [1, 2, 3]
//sequence(1);    // [1]

function sequence3(num) {
  
    let sequenceArray = [];
    sequenceArray.length = num;
    console.log([...sequenceArray])
    //.map((_ , index) => index + 1);
  

}

console.log(sequence3(5)) // [1, 2, 3, 4, 5])
//sequence(3);    // [1, 2, 3]
//sequence(1);    // [1]