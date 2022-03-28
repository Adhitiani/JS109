// https://www.codewars.com/kata/59fd6d2332b8b9955200005f/javascript

/*
-> n, k, both numbers (integers)
<- string (but is an integer)
- n is the original number int
- k is the number of numbers to remove from n. 
- returned string is the smalles possible number given removed k numbers from n

E:
// kata

D:

D/A: 
-> n, k
-> convert n to string
= array
 - this aray will contain all the possible permutations in which n has k less numbers in it
 - the minimum number (once converted to integer) here is the answer

- solve for 1 is easy, then we just iterate through this k times!
= data structure
-> 123, 2
-> 0: (0 removed): ['123']
-> 1: (1 removed): [12, 13, 23]
-> 2: (2 removed) (1 removed from prop 1): [1, 2], [1, 3], [2, 3] -> flat -> [1, 2, 1, 3, 2, 3,] -> uniques only
...  [1, 2, 3]
-> 3: 

= simplObj (obj) = {0: ['123']}
- iteration for k, i assigned as the control variable, then += 1 start at 1
  - at first iteration, we run a replacement iteration in which we slice through every single value
    - sub function for removing i characters from integer (i, obj)
    - sub function return an array of removed characters
    - obj[i] = subfunction of removeNUm (i, obj)  

final part of algo
- at obj[k] we need to sort descending order 
- then return [0] COERCE to string

subfunction of removeNum(i, obj);
  let prior = i - 1
  let valAry = obj[prior];
  let newAry = []
  -iterate through val ary at i
    - let curr = val at i
    - iterate through val with j
      - push here to new ary ( curr.slice(0, j) + curr.slice(j)  )


  return newAry.flat();

*/

function solve(n, k) {
  let str = String(n);
  let obj = {0: [str]};
  for (let i = 1; i < k + 1; i += 1) {
    obj[i] = removeNum(i, obj)
    
  }
  
  obj[k].sort((a, b) => Number(a) - Number(b));
  
  return obj[k][0];
}

function removeNum(ii, obj) {
  let prior = ii - 1;
  let priorValAry = obj[prior];
  let newAry = [];
  priorValAry.forEach( elm => {
    for (let j = 0; j < elm.length; j += 1) {
      newAry.push(elm.slice(0, j) + elm.slice(j + 1))
    }
  });
  return newAry;
}
console.log(solve(123056,2)) // ,'12056')
console.log(solve(123056,1))// ,'12056'));
console.log(solve(123056,2))// ,'1056'));
console.log(solve(123056,3))// ,'056'));
console.log(solve(123056,4))// ,'05'));
console.log(solve(1284569,1))//,'124569'));
console.log(solve(1284569,2))//,'12456'));
console.log(solve(1284569,3))//,'1245'));
console.log(solve(1284569,4))//,'124'));
