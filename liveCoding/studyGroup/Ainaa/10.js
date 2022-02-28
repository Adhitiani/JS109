/*What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

P:
input: a string and an array
output: an array

rules:
- returns an array of all the anagrams of the given string
- if there are no anagrams return an empty string
- anagram are both word contain the same letters
- all the string is in one case (lower case)
- the input are all lettters


E:
'abba'  
['aabb', 'abcd', 'bbaa', 'dada']
['aabb', 'bbaa']

D:
 string, array --> array


A:
- init 'result' to an empty array
- iterate over the given array:
  - check if the current string is equal to the given string
    - make a copy of the string.convert it to an array, sort them out.
    - make a copy of the given string and sort them out
    - if the sort is equal to the sort of the given string push it to 'result'
- end iteration
- return the result

substring is when you create string out of one string 

"abc" 
a - substrings
b

array [1, 2, 3]
sub-array 
[[1], [2], [3]]
*/