/*There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

// clean the element with only unique char in it and pust it in a new array
// iterate over the element 
   take out the element and compare it with the rest of the element
    if the element is not included with every element then return the element with that index in the original element
// end iteration
*/

function findUniq(arr) {
  let uniqueArr = arr.map(word => {
    return word.toLowerCase().split('').filter((char, idx, arr) => arr.indexOf(char) === idx).sort().join('');
  })

  /*for(let i = 0; i < uniqueArr.length; i++) {
    let arrChar = uniqueArr.slice();
     let missingChar = arrChar.splice(i, 1);
     if(!arrChar.some(str => str.includes(missingChar))) return arr[i]
  }
  */
  for(let i = 0; i < uniqueArr.length; i++) {
    if(uniqueArr.indexOf(uniqueArr[i]) === uniqueArr.lastIndexOf(uniqueArr[i])) return arr[i]
  } 

}


console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
    console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
    console.log(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
    console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
    console.log(findUniq([ '    ', 'a', ' ' ]), 'a');