function objectHasProperty(object, property) {
  let keys = Object.keys(obj);
  if (keys.includes(property)) {
    return 1;
  } else {
    return 2;
  }
}

let obj = {}
obj['something'] = 3;
obj['enabled'] = false;

objectHasProperty(obj, 'something'); // returns 1
console.log(objectHasProperty(obj, 'enabled'));    // returns 1
objectHasProperty(obj, 'active');    // returns 2