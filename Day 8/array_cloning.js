// slice method, concat method, spread operator 
const originalArray = ["Sabin","Biren","Padam","Sunil"];
const newArray1 = [...originalArray]; // new object
const newArray2 = [].concat(originalArray); // new Object
const newArray3 = originalArray.slice(0); // new object
console.log(newArray1===originalArray); // false
console.log(newArray2===originalArray); // false
console.log(newArray3===originalArray); // false
