/*Inventory Item Availability

Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

Examples:

Copy Code
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true


P:
input: a number and an array of object (a number is the inventory item id and the array is the list of transaction)
output: a boolean

rules:
return true if the sum of quantitiy is greater than 0
- movement 'out' decrease the value

E:
id: 101, movement: 'in',  quantity:  5
id: 101, movement: 'in',  quantity: 12 
id: 101, movement: 'out', quantity: 18

A:
//get all the inventory item based on the given number:
  - iterate over the list of transaction
  - filter only the transaction that has id with the value is equal to the given number
  - assign them to 'transaction'
  
// compute the sum of the transaction  
- init 'sum' to 0
- iterate over the 'transaction'
- in each iteration:
  - if the value of movement is 'out' decrement 'sum' by the quantitiy value
  - else increment the 'sum' by the quantitiy value
- if 'sum' > 0 return true
- return false otherwise

*/

function isItemAvailable(itemId, list) {
  let transaction = list.filter(ele => ele.id === itemId);
  console.log(transaction);
  let sum = 0;
  transaction.forEach(obj => {
    if(obj.movement === 'out') {
      sum -= obj.quantity;
    } else {
      sum += obj.quantity;
    }
  })
  return sum > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true