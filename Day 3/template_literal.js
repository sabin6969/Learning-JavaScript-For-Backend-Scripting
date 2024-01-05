// Template literal is String interpolation
// `` --> inside back tick

let naame = "Sabin Poudel";
console.log(`My name is ${naame}`);
let age = 21;
console.log(`My age is ${age}`);

// template literal with expressions or computation
let umer = 21;
console.log(`My age after 5 years is ${umer+5}`);

// tagged template literal

let details = taggedTemplate`My name is ${naame}`;

// variable will go in template
// other data will go in string
function taggedTemplate(string,expression){
    console.log(string);
    console.log(expression);
}

