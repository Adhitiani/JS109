// https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/train/javascript

/*
-> string
<- string -- bracketed double ups
- brackets are triggered once more than two instances of values have been encountered
- aa -> aa
- aaa -> aa[a]
- if the input is not a string, then return "Please enter a valid string" (GCL)

D/A: 
-> string
= array of transitioned strings IE: aabbcc -> [aa, bb, cc] OR [bbccvv] -> [bb, cc, vv]
<- string

A: 
- GCL if not string return "Please enter a valid string"
= ary = [string[0]]
= prev = string[0]
- iterate through string, start at 1, control var i, += 1
  - prev = string[i - 1]
  - current = string[i]
  - if (current === prev)
    - ary[at end or ary] += current
  else
    - ary.push(current)
  - end of iteration ... final touches to for loop below ... none

- transform array 
  - if elm > 3 length, then return as is
  - else
    - such that sliced '[' in to the elm: elm.slice(0, 2) + '[' + elm.slice(2) + ']'

=tmpstr = ''
- foreach append all strings in array

return tmpstr
*/

function stringParse(str) {
  if (typeof str !== 'string') return "Please enter a valid string" ;
  if (str === '') return '';
  let ary = [str[0]];
  for (let i = 1; i < str.length; i += 1) {
    let prev = str[i - 1];
    let curr = str[i];
    if (prev === curr) {
      ary[ary.length - 1] += prev;
    } else {
      ary.push(curr);
    }
  }

  let ary2 = ary.map(elm => {
    if (elm.length <= 2) {
      return elm;
    } else {
      return elm.slice(0, 2) + '[' + elm.slice(2) + ']';
    }
  });
  
  let tmpStr = '';
  ary2.forEach(elm => tmpStr += elm);
  return tmpStr;

}

console.log(stringParse(1));
console.log(stringParse(''));

console.log(stringParse("aaaabbcdefffffffg"))//, "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop"))//, "boopdedoop")
console.log(stringParse("helloookat"))//, "helloo[o]kat")