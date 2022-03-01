
let readline = require('readline-sync');

console.log('Please enter an integer greater than 0:')
let integer = parseFloat(readline.question());


console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let sumOrProd = readline.question();

/*
let sum = 0;
let prod = 1;

 

if (sumOrProd.toLowerCase() === 'p'){
  for (let num = 1; num <= integer; num +=1) {
    prod *= num;
  };
  console.log(`The product of the integers between 1 and ${integer} is ${prod}.`)
}; */
function intToArr(num) {
  let arr = [];
  for (let elem = 1; elem <= num; elem += 1) {
    arr.push(elem);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((a,b) => a + b);
};

function prod(arr) {
  return arr.reduce((a,b) => a * b);
};


if (sumOrProd.toLowerCase() === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(intToArr(integer))}.`)
} else if(sumOrProd.toLowerCase() === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${prod(intToArr(integer))}.`)
} else {
  console.log("Oops. Unknown operation.")
};

