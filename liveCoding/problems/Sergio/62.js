/*Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

function sorted(arr) {
  
   arr.sort((a,b) => {
    if(a[0].toLowerCase() > b[0].toLowerCase()) return 1;
    if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
  });
  return arr;
}

console.log(sorted(["Hello", "there", "I'm", "fine"]) )#