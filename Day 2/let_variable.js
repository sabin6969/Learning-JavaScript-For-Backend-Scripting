// we can even use let keyword to declare variable

// let has block scope
// let cannot be redeclared
// let cannot be accessed before defining it


for(let i=1;i<=10;i++){
    // i can be accessed in this block scope only
    console.log(i);
}

// i is not defined for this block
// console.log(i); // this will give an error

let naam = "Sabin";
console.log(naam);

// let naam = "Ram"; // this will also give an error

console.log("isMarried is ",isMarried); // this will also give an erro

let isMarried = false;