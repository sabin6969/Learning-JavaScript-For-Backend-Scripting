function anotherFunction(){
    console.log("Another function");
}

function mainFunction(){
    console.log("This is main function");
    return anotherFunction;
}

const ans = mainFunction()
ans();