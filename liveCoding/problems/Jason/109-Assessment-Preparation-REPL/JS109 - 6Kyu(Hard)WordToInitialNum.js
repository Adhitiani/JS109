// https://www.codewars.com/kata/5bb148b840196d1be50000b1

/*
-> stirng
<- integer
- words can be any length
- Numbers cannot start with 0
- same letter are keyed with same digit
- for empty string return 0
- disticnt letters? what about different caps? assume cap insensitive?

D/A: 
-> string
.. hashmap object

<-number

A: 
function convert
- guard clause for '' -> 0
- assume case sensitive
= ob1 = {}
= obj1 property string[0] to '1'
= obj1 property string[1] to '0'
- hash map the input string to make obj1 
-
= tmpIntStr = '';
- iterate through string
  - for character, assign the accompanying integer

return strInteger (once coerced to number)


function hashmap(obj, string)
- let numbers = [...'23456789']
- iterate through string
  - if property exists (which is a character in the string, ignore)
  - else 
    - shift numbers array and assign this number to the new found property of inputted obj

return obj

*/

function convert(str) { // NOTE: doesnt work with some kata tests but I cant see wtf what they are testing for
  if (str.length === 0) return 0;
  if (str.length === 1) return 0;
  
  let obj = {};
  obj[str[0]] = '1';
  // obj[str[1]] = '0';
  hashmap(obj, str);

  let tmpStrInt = '';
  [...str].forEach(char => { // str.split('')
    tmpStrInt += obj[char];
  })

  return Number(tmpStrInt);
}

function hashmap(obj, str) {
  let numbers = [...'023456789'];
  [...str].forEach(char => {
    if (obj.hasOwnProperty(char)) {
      // 
    } else {
      let numStr = numbers.shift()
      obj[char] = numStr;
    }
  });
}

console.log(convert("CodeWars")) // , 10234567 )
console.log(convert("KATA")) // , 1020 )

