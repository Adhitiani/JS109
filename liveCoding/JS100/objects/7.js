//Write code that does the reverse, starting from a nested array of pairs and building an object.


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

nestedArray.forEach(subArr => {
  obj[subArr[0]] = subArr[1];

})

console.log(obj);