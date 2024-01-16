function mainFunction(){
    function sayHello(){
        console.log("Hello from inner function");
    }
    const isEven = function(number){
        return number%2==0;
    }

    const isOdd = (number)=>number%2!=0;

    console.log("This is main function");
    sayHello();
    if(isEven(10)){
        console.log("Even");
    }
    if(isOdd(11)){
        console.log("Odd");
    }
}

mainFunction();