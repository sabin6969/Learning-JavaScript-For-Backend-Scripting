const numbers = [1,2,3,4,5,6,7,8,9,10];


// filter's call back function must return boolean
const evenNumbers = numbers.filter(number=>number%2==0);
console.log(evenNumbers);


const names = ["Sabin","Birendra","Padam","Sandesh","Amit"];
const namesWhoseLengthIsGreaterThanFive = names.filter(naam=>naam.length>5);
console.log(namesWhoseLengthIsGreaterThanFive);