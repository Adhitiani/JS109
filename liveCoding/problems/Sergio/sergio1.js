/*
I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string (consisting of letters only)
If the key does not appear in the items, return 0

P:
input: one pair (string or integers ('items') and string or integers ('key')
ouput: number (the length of the longest consecutive keys)

rules:
- if the key is not inlclude in the items return 0
- if the input string --> letters only

E:
'ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'
iii
iiiii
iiiiiiiiiii
iii

90000, 0

D:
input : string or integers
array to store the consecutive group of keys
output: number

A:
// get all the consecutive keys store it 'arrKey'
   - if the argument is number conver it to string
   - init 'arrKey' to []
   - init 'tempStr' to '';
   - iterate over the string
     - if the curr element === key
       - concatenated the curr element to 'tempStr'
     - else
       - if the 'tempStr' is not '' 
          - push the 'tempStr' to 'arrKey'
       - reassign 'tempStr' to ''
   - end of iteration
   - push 'tempStr' to 'arrKey'

   - sort the elements based on the length of each element in descending
   - return the first element length of the sorted array 
*/

// function getConsecutiveItems(items, key) {
//   if(typeof items === 'number') {
//     items = String(items);
//   }
//   if(typeof key === 'number') {
//     key = String(key);
//   }
  
//   let arrKey = [];
//   let tempStr = '';

//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === key) {
//       tempStr += items[i]
//     } else {
//       if(tempStr !== '') {  // should have gone back to algorithm 
//         arrKey.push(tempStr);
//       }
//       tempStr = '';
//     }
//   }
//   arrKey.push(tempStr);
//   let sorted = arrKey.sort((a, b) => b.length - a.length)
//   return sorted[0].length
// }



function getConsecutiveItems(items, key) {
  items = String(items)
  key = String(key)

  let maxCount = 0; 
  let currentCount = 0; 
  for (let i = 0; i < items.length; i++) {
    if (items[i] === key) {
      currentCount++; 
    } else {
      currentCount = 0; 
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;       
    }
  }
  return maxCount; 
}

console.log(getConsecutiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i')); // 11
console.log(getConsecutiveItems(90000, 0));          //  -->  4
console.log(getConsecutiveItems("abcdaaadse", "a")); //  -->  3
console.log(getConsecutiveItems("abcdaaadse", "z")); //  -->  0  