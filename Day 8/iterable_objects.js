// strings and arays are iterable in javascript
let array = [..."abcdef"];
console.log(array);

console.log("\n");
for(let i of "Sabin"){
    console.log(i);
}

console.log("\n");
// for in will give index
// for of will give value
for(let item of array){
    console.log(item);
}


// spread operator on object
const randomObject = {..."abcd"};
console.log(randomObject);