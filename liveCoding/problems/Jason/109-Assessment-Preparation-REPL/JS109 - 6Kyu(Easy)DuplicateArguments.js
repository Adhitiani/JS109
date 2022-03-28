// https://www.codewars.com/kata/520d9c27e9940532eb00018e

// 
function solution(...args) {
  if (!args) {return false}
  let simplObj = {};
  for (let val of args) {
    if (simplObj.hasOwnProperty(val)) {
      
      return true;
    } 
    simplObj[val] = 1;
  }
  return false;
}
console.log(solution(1,2,3)) // , false
console.log(solution(1,2,3,6,5,6)) //  true