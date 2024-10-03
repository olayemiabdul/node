// var generateName = require('sillyname'); after type module to package.json
// import generateStupidName from 'sillyname';
// import generateName from 'sillyname';
// import superheroes from 'superheroes';
// var sillyName = generateName();
// var superhero= generateStupidName;
 import superheroes, { randomSuperhero } from 'superheroes';
const name=randomSuperhero();
console.log(name);

