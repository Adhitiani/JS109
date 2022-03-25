// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

/*
Problem
input: 
input1 : an array of number
- the number is the number of times that each person spend in the tils
input2: a number; the number of tills available

output: number
- the longest time to spend in the tills untill all the customers done
- if input2 is 1 return the sum of the array
- if the input2 is longer than the length of the array return the biggest number in the array

Example:
[2,2,3,3,4,4], 2)); // , 9)
A 2 3 4  --> 9
B 2 3 4

[1,2,3,4,5], 100

[10,2,3,3], 2)
A 10
B 2 3 3

[2,3,10], 2)

A 2 10
B 3


[29,9,42,40,46,7,13,48,2,33,47,1,31,8,44,38,30,20,1], 2
A 29 40 7 13 48
B 9 42 46 2 33

- assign the next number to the lowest current sum in the tills


A:
- create an array with the same element number as the input 2 fill with 0
[0, 0]
do loop as many as the input array
- sort the new array ascending order
- add the current value to the first element
return the longest value in the new array



- compare the element value
  //- if the element is equal then increment the first element with the next value

    - increment the element that has less value with the next element
- increment the each of element with the first numbers 
  

- compare the sum of each array
  - assign the next element to the array that has sum the lowest
*/

function queueTime(array, n) {
  let resultArr = new Array(n).fill(0);
  
  let counter = 0;
  while(counter < array.length) {
   resultArr.sort((a, b)=> a - b);
   resultArr[0] += array[counter]
    counter += 1;
  }
  return Math.max(...resultArr)
}


function queueTime(customers, n) {
  let lines = [...Array(n)].map(() => 0);  
  customers.forEach(time => {
    lines.sort((a, b) => a - b);
    lines[0] += time;
  });
  return Math.max(...lines);
}




// Examples
console.log(queueTime([5,3,4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2));
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

console.log(queueTime([2,3,10], 2));
// should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.


console.log(queueTime([], 1)); //  0
console.log(queueTime([1,2,3,4], 1)); // 10
console.log(queueTime([2,2,3,3,4,4], 2)); //  9
console.log(queueTime([1,2,3,4,5], 100)); //  5
console.log(queueTime([29,9,42,40,46,7,13,48,2,33,47,1,31,8,44,38,30,20,1], 2)); // 247