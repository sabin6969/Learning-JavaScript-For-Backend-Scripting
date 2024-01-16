// function declaration
function firstCharacter(naam){
    if(naam){
        return naam[0];
    }
}

// function expression
const getFirstCharacter = function(naam){
    if(naam){
        return naam[0];
    }
}

// arrow function
// no function keyword in arrow function
const isEven = (number)=> number%2==0;

if(isEven(10)){
    console.log("Even number");
}
else{
    console.log("Odd number");
}