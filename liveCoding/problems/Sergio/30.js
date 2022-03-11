/*I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string (consisting of letters only)
If the key does not appear in the items, return 0
Examples

90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0

A:
- init 'longest' = 0;
- init 'count' = 0;
- iterate over the string
  - if currChar === key
    - count += 1
  - else 
     - if count > longest 
       - longest = count
     - count = 0  
- end iteration
- return longest
*/
function getConsectiveItems1(items, key) {
  items = String(items);
  key = String(key);
  let longest = 0;
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === key) {
      count += 1;
    } else {
      if (count > longest) {
        longest = count;
      }
      count = 0
    }
  }
  if (count > longest) longest = count;
  return longest;
}

console.log(getConsectiveItems(90000, 0) === 4);
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i') === 11);

function getConsectiveItems(items, key) {
  items = String(items);
  key = String(key);
  let longest = 0;
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === key) {
      count += 1
    } else {
    count = 0;
    }
    if (count > longest) longest = count;
  }
  return longest;
}
