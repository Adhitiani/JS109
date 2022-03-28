function onlyDuplicates(str) {
  return str.split('').filter((char,_,arr) => arr.indexOf(char) !== arr.lastIndexOf(char)).join('');
}