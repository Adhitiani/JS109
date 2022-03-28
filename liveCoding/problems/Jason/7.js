/*[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]

// build a new array; create a temp number; put the curr number first to temp number, if the current number is not the same with the next one push the char to the new one; if the current is the same concatenated it to temp number and push the temp number when the next one is not equal with the current

- init empty array
- init temp number
- iterate over the array
  - add the curr number to tempNumber
  if current is the same with the next one
  - add the temp number with the currChar
  else
  - push the tempNumber to array
  - reassign tempNumber to currChar
- end iteration
return new array

- create an array with the first element of array imput as the first element
- iterate over the array start at index 1
  - if curr char is the same with prev character increment the last index of array by curr char, else push the curr char to the array
- end iteration 

*/

function sumConsecutives(arr) {
  let result = [arr[0]];
  
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = arr[i -1];
    
    if(current === prev) {
      result[result.length - 1] += current;
    } else {
      result.push(current)
    }
  }
  return result;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
console.log(sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
console.log(sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " )

