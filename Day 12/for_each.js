// for each method
// higher order function

function display(element,index){
    console.log(element,index);
}

const numbers = [1,2,3,4,5];

console.log("For of loop");
for(let number of numbers){
    console.log(number);
}

console.log("for each method");
numbers.forEach(display)

console.log("Nameless function");
numbers.forEach(function(element,index){
    console.log(element,index);
});


console.log("Arrow function");
numbers.forEach((element,index)=>console.log(element,index));


const userLists = [
    {
        naam:"Sabin Poudel",
        age:20,
    },
    {
        naam:"Birendra Bahadur",
        age:22,
    },
    {
        naam:"Padam Khatri",
        age:20,
    }
]

// arrow function
userLists.forEach((user)=>console.log(user.naam,user.age));
// declarative function
userLists.forEach(display);