//We are given the following array of energy sources.


let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(0,1)
.push('geothermal');

console.log(energy);