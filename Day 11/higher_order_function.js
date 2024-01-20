// the type of function which accepts another function as a parameter or returns another function

function anotherFunction(){
    console.log("This is another function");
}

function higherOrderFunction(callback){

    // call back is the naming convention
    console.log("Higher order function called");

    callback();
}


higherOrderFunction(anotherFunction); 
// passed anotherFunction to higherOrderFunction as a argument
