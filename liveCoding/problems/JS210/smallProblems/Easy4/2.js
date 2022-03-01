
/*
- create an empty array
- iterate over the arr1
  - push the element to the empty array if the element is not exist in the array
- itearte over the arra2
- - push the element to the empty array if the element is not exist in the array
return the array


*/

function union(arr1, arr2) {
  //let result = [];
  
  /*arr1.forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  */
  
   arr2.forEach(num => {
    if (!arr1.includes(num)) {
      arr1.push(num);
    }
  });
 console.log(arr1);              
}

console.log(union2([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union2(...args) {
let sorted = args.flat().sort((a, b) => a - b);
let result = [];
  
 for (let i = 0; i < sorted.length; i++) {
  if(sorted[i] !== sorted[i + 1]) {
   result.push(sorted[i]);
  };
 }
   

 return result;
}

function union3(...args) {
  let result = args.flat().filter((num, idx, array) => {
    return idx === array.indexOf(num);
  })
  
  return result;
};

console.log(union3([1, 3, 5], [3, 6, 9]));