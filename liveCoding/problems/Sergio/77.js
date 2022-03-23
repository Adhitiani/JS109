/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.


*/
/*
PROBLEM
input: two arrays
- first array is an array of number
- second array is an array of the square number
output: boolean

rules/question:
- return true if the two arrays are the same
- same means_
  - the lements in second array is the square of the elements in first array
- if the input is empty array return false
- if the input is not valid (0) return false
- assume that the element has the same elements of square 
- return false if the two arrays are not the same

EXAMPLE

DATA STRUCTURE
input: array
sort the array
output: boolean

ALGORITHM
- if the inputs is an empty array return false
- if the input is not valid (0) return false
-if the length of arr1 and arr2 are not the same return false

- sort both the input array
- iterate over the arry1
  if the currChar of arr2 is not equal to the square of currChar of arr1 return false
- end iteration
- return true
*/

function comp(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  if(arr1.length !== arr2.length) return false;
  
  arr1.sort((a,b) => a - b);
  arr2.sort((a,b) => a - b);
  console.log(arr1);
  console.log(arr2);

  for(let i = 0; i < arr1.length; i++) {
    if(arr2[i] !== (arr1[i] * arr1[i])) return false
  }
  return true;
}
let a1 = [121, 144, 19, 161, 19, 144, 19,11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);

