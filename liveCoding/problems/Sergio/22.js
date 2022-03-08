/*
Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/
/*
PROBLEM
input: a nested array and a number
output: a string

rules/question:
- return 'winner' if the total of the mini wins >= input number
- return 'loser' otherwise
- mini wins?
  - if the char code of any in the char in the string match the number
    --> if second element in the nested array match with the char code in the first element

EXAMPLE

DATA STRUCTURE
input: a nested array and a number
output: a string

ALGORITHM
- compute the 'miniwin' for each of element in the array
  - iterate over the input array
    - in each of the array element
      - convert the first element of the array element to string
      - iterate over the char
      - if there is element that is match the char code return 'miniWin'
  - end iteration

- filter the array to only with miniwin element
- if the length of the filtered array >= input number  return 'winner'
  - otherwise return 'loser'

*/

function bingo(ticket, win) {
  let miniWin = ticket.map(arr => {
   if (arr[0].split('').some(char => char.charCodeAt() === arr[1])) return 'miniWin'
  })
  if (miniWin.filter(elem => elem === 'miniWin').length >= win) return 'winner';
  return 'loser'
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))

function bingo(ticket, win) {
  let miniWin = ticket.filter(arr => {
   return arr[0].split('').some(char => char.charCodeAt() === arr[1])
  })
 
  if (miniWin.length >= win) return 'winner';
  return 'loser';
}


