/*There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
Test.assertEquals(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
Test.assertEquals(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
Test.assertEquals(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
Test.assertEquals(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
Test.assertEquals(findUniq([ '    ', 'a', ' ' ]), 'a');

- sort the arr based on the length of the element
- iterate over the array
- iterate over the the next array
*/


function findUniq(arr) {
  let unique = []
  arr.sort((a,b) => a.length - b.length);
  let copyArr = arr.slice().map(char => char.toLowerCase().split('').sort().join(''));
  console.log(copyArr)
  for (let i = 0; i < copyArr.length; i++) {
    for(let j = i + 1; j <= copyArr.length - 1; j++) {
      let currString = copyArr[i].toLowerCase();
      let nextString = copyArr[j].toLowerCase();
      if(copyArr.length <= 3) {
        if (copyArr[i].includes(copyArr[i + 1])) {
          return arr[2]
        } else {
          return arr[0]
        }
      }
      if(!nextString.includes(currString)) 
       {
         unique.push("not Include");
        }
    }
    console.log(unique)
    if(unique.length > 1) return arr[i];
    unique = [];
  }  
}


console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb');
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo');
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
console.log(findUniq([ '    ', 'a', ' ' ]), 'a');

function findUniq(arr) {
  let newArr = arr.map(string => removeDuplicates(string));
  for (let idx = 0; idx < newArr.length; idx += 1) {
    if (newArr.indexOf(newArr[idx]) === newArr.lastIndexOf(newArr[idx])) {
      return arr[idx];
    }
  }
}

function removeDuplicates(string) {
  string = string.toLowerCase();
  let seen = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    if (!seen.includes(string[idx])) {
      seen.push(string[idx]);
    }
  }
  return seen.sort().join('');
}