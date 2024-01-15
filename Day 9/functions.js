// Functions are reusable block of code
// they make our code more reusable and maintainable

// isEven is the name of function (identifier)
// number is the parameter for isEven function
function isEven(number){
    return number%2==0;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
for(number of numbers){
    if(isEven(number)){
        console.log(`Even ${number}`);
    }else{
        console.log(`Odd ${number}`);
    }
}