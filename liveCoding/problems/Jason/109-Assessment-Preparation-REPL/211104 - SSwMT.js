// let a = ['Hello'];

// function changeValue(a) {

//   a[0] = 'goodbye';  //

// }

// console.log(changeValue(a));

// console.log(a);

/*

- /

let foo = 100;

/*

foo :: 100;

- /

let bar = []; // {}

/*

bar :: [] -- incorrect.

bar :: too complex

bar :: 0x001 :: []

bar :: 0x001 :: object

- /

function baz(a) {

// a = 11

a[0] = 11

// no return -- no `explicit return value`

}

baz(bar); //foo

console.log(bar);

/*

baz(100);

baz(0x001);

upon invocation, the passed arguments are assigned to the parameters - in this case `a` which is a local parameter of the `baz` function.

within invocation, line 27

100 is copied/passed over

0x001 is copied/passed over

then

assigned to local variable `a`

a = 100;

a = 0x001;

(a = 11 only) so the local variable `a` is reassigned.

(a[0] = 11 only)

a(local) -> 0x001 -> 0x0010 = empty

a(local) -> 0x001 -> 0x0010 = 11

- /

// remember

/*

bar -> 0x001

bar[0] -> 0x0010

- /

// ----

let a = ['Hello'];

function changeValue(a) {

//

a = ['goodbye'];

}

console.log(changeValue(a));

console.log(a);

/*

changeValue(0x001)

in the function definition following invocation... (changeValue(a))

a local variable is declared and initialized with the value of the passed argument. The value here is the reference to an object array as defined in line 66.

a(local) = 0x001

So in line 70,

(a = ['goodbye'])

a(local) = 0x001 -> ['Hello'] (before line 70)

a(local) = 0x002 -> ['goodbye'] (after line 70) // missing 0x0010

See the difference in line 85-86 and line 55-56

the global a

a(global) = 0x001 -> ['Hello']          // unaffected

a(global) = 0x001 -> 0x0010 -> 'Hello'  // unaffected

- /

let bb = 1

bb[1] // silent error