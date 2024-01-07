// && --> AND gate (both or all)
// || --> OR gate (any one)
// ?? nullish operator it is used to provide default value for null or undefined variable

let isNepali = true;
let isUser = false;
if(isNepali && isUser){
    console.log("Nepali user");
}
else{
    console.log("Nepali but not user or user but not nepali");
}

if(isNepali || isUser){
    console.log("Any one of them is true");
}

let variable; // undefined
console.log(variable??"This is default value for null or undefined variable");
variable = null;
console.log(variable??"Now this is nulll");