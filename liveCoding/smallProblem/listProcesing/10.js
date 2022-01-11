// Inventory Item Availability

// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// PROBLEM:
// input: a number (an inventory item) and an array of object(a list of transaction)
// output: a boolean

// rules:
// - return true if the sum of quantitiy is > 0
// - 'in' will increase the item quantity
// - 'out' will decrease the item quantity

// EXAMPLE:
// 101, transactions
// id: 101, movement: 'in',  quantity:  5  --> + 5
// id: 101, movement: 'in',  quantity: 12 },--> + 12
// id: 101, movement: 'out',  quantity: 18 },--> - 18
// total quantity (17 - 18) = -1 => false

// DATA STRUCTURE:
// input: a number and an array
// output: boolean
// Object

// ALGHORITM:
// 1. filter all the trannsaction with the given item in the argument
// 2. create a total quantity variable and initialized it with 0
// 3. iterate over the array, in each iteration:
//    - check the movement:
//      - if it's 'in', reassign total quantity with the sum of the quantity and total quantity
//      - if it's out, reassign total quantity with substrating the total quantity with the quantitiy
// 4. check the total quantity, return true if it's > 0, return false otherwise

// 
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

function isItemAvailable(item, list) {
  let listItem = list.filter(obj => obj.id === item);
  let totalQuantity = 0;
  
  listItem.forEach(obj => {
    if(obj.movement === 'in') {
      totalQuantity += obj.quantity;
    } else {
      totalQuantity -= obj.quantity;
    };
  });
  
  return totalQuantity > 0;
};

//NOTE USE REDUCE

function isItemAvailable1(item, list) {
  let itemTransaction = list.filter(trans => {
    return trans.id === item;
  });
   let quantity = itemTransaction.reduce(
     (sum, trans) => {
       if(trans.movement === 'in') {
         return sum += trans.quantity;
       } else {
         return sum -= trans.quantity;
       }
     }, 0);
     return quantity > 0;
};

console.log(isItemAvailable1(101, transactions));     // false
console.log(isItemAvailable1(103, transactions));     // false
console.log(isItemAvailable1(105, transactions));     // true