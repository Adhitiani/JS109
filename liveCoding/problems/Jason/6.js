function solution(...args){
 if(args.every(char => args.indexOf(char) === args.lastIndexOf(char))) return false; 
 return true
}