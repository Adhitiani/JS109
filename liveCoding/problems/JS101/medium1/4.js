/*
PROBLEM
input: string
output: number

Rules:
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

EXAMPLE
'5 PUSH 3 MULT PRINT'
register : 0
stack: []

push 5
stack : [5]
register: 5

pop 3

register = register * 3
register = 15
Print: 15

'5 PRINT PUSH 3 PRINT ADD PRINT'
register = 5
print = 5
push = stack [5]
register = 5
register = 3
add = 5 + 3
ergister = 8
Print 8

'5 PUSH POP PRINT'
Register = 5
Push
register = 5
stack = [5]
Pop = 5
register = 5
Print = 5

'3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'
register = 3
push
register = 3
stack = [3]
register = 4
push
stack = [3,4]
register = 4
register = 5
push
stack = [3,4,5]
register = 5
Print = 5
Add
Register = 5 + 5
Print = 10
pop
register = 4
print = 4
add
register = 4 + 3
print = 7

Data Structure
string --> array --> number

ALGO
- create a 'register' and initialized it to 0
- create a 'stack' and initialized it to an empty array
- convert the string input to an array of word.
- iterate over the array. For each of element check if it's a:
  -  number: reassig the register with the number
  -  PUSH: Push the register value onto the stack. Leave the value in the register.
  -  ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
  -  SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  -  MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  -  DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  -  REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  -  POP : Remove the topmost item from the stack and place it in the register.
  -  PRINT : Print the register value.

*/

function minilang(str) {
  let register = 0;
  let stack = [];
  let arr = str.split(' ');
  
  arr.forEach(ele => {
    if(ele === 'PUSH') stack.push(register);
    if(ele === 'ADD')  register += stack.pop();
    if(ele === 'SUB') register = parseInt(register - stack.pop());
    if(ele === 'MULT') register *= stack.pop();
    if(ele === 'DIV') register = parseInt(register / stack.pop());
    if(ele === 'REMAINDER') register %= stack.pop();
    if(ele === 'POP') register = stack.pop();
    if(ele === 'PRINT') console.log(register);
    register = Number(ele);
  })
};

//(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
//minilang('PRINT');
// 0

//minilang('5 PUSH 3 MULT PRINT');
// 15

//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

//minilang('5 PUSH POP PRINT');
// 5

//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

//minilang('3 PUSH PUSH 7 DIV MULT PRINT');


//minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
//register = -3
//stack = [-3];
//register = 5
//-3 - 5

// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)