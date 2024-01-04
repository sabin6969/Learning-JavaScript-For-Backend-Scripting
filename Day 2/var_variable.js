// var has global scope
// we can use value of var vairable without declaring
// we can reinitalize var variable


console.log("Is he married ? ",isMarried);

var isMarried=false;

for(var i=0;i<=10;i++){
    // console.log(i);
}

// i have declared var in for but it can be accessed outside of for block
console.log(i);

// i can even reinitalize var variable
var i = "Sabin";
console.log(i);

if(true){
    var random_name = "hahaha inside ";
}
console.log(random_name);