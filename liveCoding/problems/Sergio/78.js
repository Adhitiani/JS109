/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

input: an array of object
output: string

// replace the object with its value
   - iterate over the array
   - for each of object replace it with its value
// concatenated the second and last element and put it with &
   - init an array []
   - iterate over the value stop at the second element before the end
   - if the element is  the second last of the index
     push the element + ' & ' + the last index
   - else push the currElement
// return the array in string form     
*/

function list(arr) {
  arr = arr.map(obj => {
    return obj = obj['name'];
  })
  if(arr.length === 1) return arr[0];
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === arr.length - 2) {
      result.push(arr[i] + ' & ' + arr[i + 1] )
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
}
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
console.log(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")


