greet("Sabin");

function greet(naam){
    console.log(`Hello ${naam}`);
}
greet("Sabin");

//  in javascript we can call function before declaring it 
// but this works only on function declaration (not on function expression, arrow function)


// console.log(isEven(12)); will give an error

const isEven = function(number){
    return number%2==0;
}


// console.log(isOdd(12)); will give an error

const isOdd = number=> number%2!=0;

// but we can call function after declaring function in case of (function expression and arrow function)
console.log(isEven(12));
console.log(isOdd(11));