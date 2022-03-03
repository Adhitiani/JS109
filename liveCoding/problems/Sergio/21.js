/*Enough is enough!
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example

  deleteNth ([1,1,1,1],2) // return [1,1]
  
  deleteNth ([20,37,20,21],1) // return [20,37,21]
  
 P:
 input: array and number ; 
        - a list of number, 
        - the max number of element appear in the array
        
 output: array; 
 
 rules:
 - return the array with the max n number of time the element appear in the array
 
 A:
 // get the number of occurance of each element and assgin it to 'occurance'
 // find the number of occurance that is greater than 'n'
    - extraxt the key of the object
    - iterate over the key
    - if the value assicated with the value is less or equal to n, delete the properties
    
 //reassign all the value to n
   - get the key of the remaining object
   - iterate over the key
      - reasign the value to 'n'
 
 - init result to [];
 - iterate over the element that is need to be deleted
    - 
 - if the current char is the element that need to be deleted 
   - if the value is > 0 
   - push the char
   - decrement the value to 1
 - push the char to the 'result'  
 - return result
   
 */

function deleteNth1(arr,n) {
  let occurance = {};
  
  for (let i = 0; i < arr.length; i++) {
    occurance[arr[i]] = occurance[arr[i]] + 1 || 1;
  }
  
  let elements = Object.keys(occurance);
  for (let i = 0; i < elements.length; i++) {
    if (occurance[elements[i]] <= n) delete occurance[elements[i]];
  }
 
 let occuranceKey = Object.keys(occurance);
 for (let i = 0; i < occuranceKey.length; i++) {
   occurance[occuranceKey[i]] = n;
 }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(occurance[arr[i]] > 0) {
      result.push(arr[i]);
      occurance[arr[i]] -= 1;
    } else if (occurance[arr[i]] === undefined) {
      result.push(arr[i]);
    }
    
  }
  
  return result
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([20,37,20,21], 1));


/*
- init 'occurance' to {}
- init 'resultArr' to []
- iterate over 'arr'
  - init currNum to 'arr[i]'
  - if occurance[currNum] exist, 
    - increment occurance[currNum] to 1
  - else
      - add the new properties occurance[currNum]
  - if(occurance[currNum] < n)
    - push the 'currNum' to 'resultArr'
- end of iteration

return 'resultArr'
*/

function deleteNth(arr,n) {
  let occurance = {};
  let resultArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    occurance[currNum] = occurance[currNum] + 1 || 1;
    
    if(occurance[currNum] <= n) {
      resultArr.push(currNum);
    }
  }
  return resultArr;
}