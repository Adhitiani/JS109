/*Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples

'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1

*/

function countRepeats(str) {
  let removeDup = str.split('').filter((char, i, arr) => char !== arr[i + 1]).join('');
  return str.length - removeDup.length;
}

console.log(countRepeats('AABCCD'),2);
console.log(countRepeats('AABCCDA'),2)
console.log(countRepeats('AaBBCCC'),3);