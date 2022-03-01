//https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript

function duplicates(array){
  let obj = {};
    array.forEach(num => {
      if(obj[num]) {
        obj[num] += 1;
      } else {
        obj[num] = 1;
      }
    })
    
    let values = Object.values(obj);
    let pair = values.filter(num => num > 1).map(num => Math.floor(num / 2));
    return pair.reduce((sum, num) => sum + num);
    
  }


function duplicates(array){
//Make the magic happen
  const newArray = array.sort((a,b) => a-b);
  if (newArray.length <= 1) return 0;
  
  let count = 0;
  
  for (let i = 0; i < newArray.length ; i++) {
    if (newArray[i] == newArray[i+1]) {
      count++;
      i++;
    }
  }
  return count;
} 