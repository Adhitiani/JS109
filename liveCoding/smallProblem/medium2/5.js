function featured(num) {
  for (let startNum = num; num <= 9876543201; num ++) {
    if((isOdd(startNum) && isMultySeven(startNum)) && isOnlyOnce(startNum)) return num
    
  }
}

function isOdd(num) {
 return num % 2 === 1;
}

function isMultySeven(num) {
 return num % 7 === 0;
}

function isOnlyOnce(num) {
 let str = String(num);
 let arr = str.split('');
 let sortArr = arr.sort((a,b) => a - b);
 
  
 for (let index = 0; index < sortArr.length; index ++) {
  if (sortArr[index] === sortArr[index + 1]) return false
 };
   
   return true;
};



console.log(featured(5));           // 21