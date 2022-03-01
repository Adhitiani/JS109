/*Inventory Item Transactions

Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

PROBLEM:
input: a number and an array of object
output: an array

rules:
- the two arguments are:
an inventory item ID : a number
a list of transaction : an array of objects
-returns an array containing only the transaction for the specified invetory item

EXAMPLE:
105, transaction
[{ id: 105, movement: 'in',  quantity: 10 },
 { id: 105, movement: 'in',  quantity: 25 },
]

DATA STRUCTURE:
number , array of object ---> array of object
object

ALGHORITM:
1.create an empty array to hold the result
2. iterate over the array, in each iteration:
   - check the object id.
     - if is the same with the id in the argument push it to the result array
3. return the array     


*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(idNumber,list) {
  let result = [];
  list.forEach(obj => {
    if(obj['id'] === idNumber) {
      result.push(obj);
    };
  });
  return result;
}

// using filter

function transactionsFor1(idNum, list) {
  return list.filter(obj => obj.id === idNum);
};

console.log(transactionsFor1(101, transactions));

//NOTE
// LEARN MORE ABOUT REDUCE METHOD!
// try using reduce


