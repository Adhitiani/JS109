//https://www.codewars.com/kata/5b1b27c8f60e99a467000041

/*
-> string 1
-> string 2
<- number
  - numeber output is the amount of letters removed to make the two strings an anagram. 
    - the letters to be removed from each string does not need to be the same number as each other
  - what is an anagram? it is when both strings have the same letters as each other
  - not necessarily a palindrome
    - IE: 
    - 'ab' 'ba'
    - 'aab' 'ba' is an NOT unless `a` is removed from first string
  
E:
// kata
'', '' -> 0
'', 'a' -> 1 (remove 'a' from 2nd)

D: 
->string1
-> string2
=simplObj1
=simplObj2
<- number

A:
function anagramDifference
->string1 
  - hash map to simplObj1 = KVP (key is character, val is number occurences)
-> string2
  - hash map 
----> subfunction 'hashmap'
---- I now have two obkects that have number of occurences
(same letters but different instances, tricky case) IE: 'aaa' v 'a' 
(different letters in both strings, typical case)
= simplObj3
  --> KVP, key is same as first, but V is different, V will have [simplObj1[K], simplObj2[K]]
  --> create this type of object

= keysOfSimplObj1 array of keys of object 1

- iterate through keysOfSimplObj1 
  - for each key, see if simplObj2 has this key (has own property)
    - in which case, it can be invlided in simplObj3
    - with [simplObj1[K], simplObj2[K]]

=
- construct the string
= tmpStr = ''
  - iterate through simplObj3
    = repeatNum  = Math.min(...simplObj3[K])
    = tmpStr += K.repeat(repeatNum)

= diff1 = str1.length - tmpStr.len
= diff2 = str2.length - tmpStr.len

return diff1 +  diff2;

sub function hashmap
-> string
create and return an object that KVPs (key is character, val is number occurences)
<- object

*/

function anagramDifference(str1, str2) {
  let obj1 = hashMap(str1);
  let obj2 = hashMap(str2);
  let obj3 = {};

  let keysOfObj1 = Object.keys(obj1); // array of keys from obj1

  for (let key of keysOfObj1) {
    if ( obj2.hasOwnProperty(key) ) {
      obj3[key] = Math.min(...[obj1[key], obj2[key]]);
    }
  }

  let tmpStr = '';
  for (let entries of Object.entries(obj3)) {
    let key = entries[0];
    let val = entries[1];
    tmpStr += key.repeat(val);
  }

  let diff1 = str1.length - tmpStr.length;
  let diff2 = str2.length - tmpStr.length;
  return diff1 + diff2;
}


function hashMap(string) {
  let obj = {};
  for (let i = 0; i < string.length; i += 1) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] += 1;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

console.log(anagramDifference("","")) // 0
console.log(anagramDifference("codewars","hackerrank")); // 10