const isEven = function(number){
    return number%2==0;
}

const firstCharacter = function(naam){
    if(naam){
        return naam[0];
    }
    return "Empty string";
}
console.log(isEven(121));
console.log(isEven(1212));
console.log(firstCharacter("Sabin"));
console.log(firstCharacter(""));