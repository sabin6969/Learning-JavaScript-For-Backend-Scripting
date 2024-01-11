// Write a function that takes an array of strings and transforms it into a new array where each string is reversed

function reverse(name){
    let reversedName = "";
    for(let i=name.length-1;i>=0;i--){
        reversedName  = reversedName+name[i];
    }
    return reversedName;
}

let names = ["Sabin","Amit","Biren","Padam"];
let reversedNames = names.map((e)=>reverse(e));
console.log(reversedNames);