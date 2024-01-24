// set is a iterable object
// set doesnot supports duplicate items and indexing
// indexed based accessing is not allowed

const numbers = new Set([1,2,3,4,5]);
console.log(numbers);

const naam = new Set("sabin");
console.log(naam);

for(let number of numbers){
    console.log(number);
}
