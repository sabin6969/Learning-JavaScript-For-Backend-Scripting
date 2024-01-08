const details={
    naam:"Sabin",
    age:20,
    "address":"Pokhara",
};

console.log(details);
details["newKey"]="newValue"; // adding new key value pairs
console.log(details); 

// freezing object in js
// this type of freezing is shallow freeze

let userDetails = Object.freeze({
    naam:"Sabin Poudel",
    "age":20,
    "address":{
        country:"Nepal",
        city:"Pokhara",
    }
});
console.log(userDetails);
userDetails["newKey"]="newValue"; // no effect of addding
console.log(userDetails);
// but wait
userDetails.address["newkey"]="new value"; // this actually works
console.log(userDetails);
// as of now js does not provides functionality for deep freezing

console.log(Object.isFrozen(userDetails));