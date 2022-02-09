//Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

/*
Example:
recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

- check if all the ingredients exist in the avaiblable list
  - iterate over the recipe
  - for each of ingredients check if it's included in the avaiblable list
  - return 0 if it's not included.
- divided the avaiblle with the associtated ingredients in the recipe
- return the smalles number

*/

function cakes(recipe, available) {
  let recipeArr = [];
  for (let key in recipe) {
    if(!Object.keys(available).includes(key)) {
      return 0;
    } else {
      recipeArr.push(Math.floor(available[key] / recipe[key]))
    }
  }
  
  return Math.min(...recipeArr);
};


//console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
//console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

function cakes2(recipe, available) {
  let result = [];

  for (let key in recipe) {
   if(available.hasOwnProperty(key)) {
       result.push(Math.floor(available[key] / recipe[key]));
   } else {
     return 0
   }
  };
  
  return Math.min(...result);

};

//console.log(cakes2({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
console.log(cakes2({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));