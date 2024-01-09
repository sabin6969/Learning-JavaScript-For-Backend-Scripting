// it was introduced in ES6
// Destructuring assignment works like tuple unpacking in python
let fruits = ["Apple","Mango","Grapes","Banana"];
const [red,yellow,black,green]=fruits;
console.log(red);
console.log(yellow);
console.log(black);
console.log(fruits);

const [coldRegion, ...rest]=fruits; // ...rest means spread operator

console.log(coldRegion);
console.log(rest);