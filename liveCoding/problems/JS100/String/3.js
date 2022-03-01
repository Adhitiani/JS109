//Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().


repeat(3, 'ha'); // 'hahaha'

function repeat(num, str) {
  let repeatStr = ''

 for(let counter = 1; counter <= num; counter +=1) {
   repeatStr += str
 }
 return repeatStr;
}

console.log(repeat(4, 'ha'))