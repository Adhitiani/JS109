// https://www.codewars.com/kata/57f625992f4d53c24200070e

/*
-> Nested Array where subarray are (string and number)
-> number in integer
<- String (Either `Winner!` or `Loser!`)

- Output is winner if the amount of mini win is more than or equal to win number
- Else Loser
- A mini win is when the summed char code of each letter in ticket/subarray is EQUAL to the number stored in the ticket
- scope: all inputs correct format
- strings in tickets can be of any length
- 

E: 
// see kata

D: 
-> Nested Array -- contains tickets [ticket1, ticketn]
-> Number
- Number -- this is to store the sum of the first elm of the ticket
- returnStr
<- returnStr

A: 
function bingo
-> nested array, number
= let num of wins = 0
- iterate through nested array, getting each ticket
  - we have each ticket here, iterate through each char, getting char code
    = let temp sum of charcode = 0
    - sum the char code
  - if temp sum of charcode === to wins 
    = += num of wins
- if numOfWins === win
  - return 'Winner!'
else
  - return 'Loser!'

*/

function bingo(tickets, win){
  let numOfWins = 0;
  for (let ticket of tickets) {
    
    for (let i = 0; i < ticket[0].length; i += 1) {
      if (ticket[0].charCodeAt(i) === ticket[1]) {
        numOfWins += 1;
        break;
      }
      
    }
  }
  //console.log(numOfWins)
  if ( numOfWins >= win ) {
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}

console.log (bingo([['PRVPUQG',81],['NCIEOAG',71]], 1));

/*
// We can trick charcodeat to get the code at a single char string
`${char}`.charCodeAt(0); <-- we get the char code of the character itself


*/