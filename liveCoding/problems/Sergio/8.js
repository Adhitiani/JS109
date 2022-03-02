/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

P: 
input:  a list of integers
output: a string ("odd" or "even")

rules:
- return 'odd' if the sum of input elements is 'odd'
- return 'even' if the sum of input elements is 'even'
- if the input is [] consider it as [0] return 'even'

Example:
see above

D:
input:  array

output: string
A:
- computre the sum of all elements in the 'arr'
- if the 'sum' % 2 is equal to 0 or -0 return 'even'
- else
  - return 'odd'

*/

function oddOrEven(array) {
  let sum = array.reduce((sum, num) => sum + num, 0);
  
  if (sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))

/*
 assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});
*/

