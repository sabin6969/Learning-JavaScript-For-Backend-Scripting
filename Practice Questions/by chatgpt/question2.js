// Given an array of objects with 'name' and 'age' properties, write a function to transform the array into an array of names for individuals who are adults (age 18 and above).


let userDetails = [
    {
        naam:"Sabin",
        age:20,
    },
    {
        naam:"Hanok",
        age:20,
    },
    {
        naam:"Sandesh",
        age:18,
    },
    {
        naam:"Smith",
        age:22,
    }
]

let newUserDetails = userDetails.filter((e)=>{
    return e.age>18;
});
console.log(newUserDetails);