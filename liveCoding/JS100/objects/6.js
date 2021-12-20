//Convert the person object into a nested array nestedPerson, containing the same key-value pairs.


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

let nestedPerson2 = [];

for (let prop in person) {
  nestedPerson2.push([prop, person[prop]])
}

console.log(nestedPerson2);