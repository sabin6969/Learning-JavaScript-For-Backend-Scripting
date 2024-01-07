// object is the collection of key value pairs

// creating object
let user_details ={
    "name":"Sabin Poudel",
    "age":20,
    "isMarried":false,
    "address":["Pokhara","Nepal"],
    func:function(){
        return "This is function";
    },
    occupation :"Student",
}

// accessing values 
console.log(user_details); 
console.log(user_details["name"]); // accessing value corresponding to name key
console.log(user_details["thisDoesNotExists"]??"Not available"); // nullish operator to provide default value of null or undefined variable 


// accessing with another method using dot operator
console.log(user_details.name); 
console.log(user_details.func);
console.log(user_details.func()); // function is invoked
console.log(user_details.occupation);


// updating 

user_details.occupation = "Intern"
console.log(user_details.occupation);

user_details["isMarried"]=true;
console.log(user_details);

user_details["newKey"]="newValue";
console.log(user_details["asdfasdfasdf"]??"This value is by Default");


// deleting key and value from object

delete user_details.address;
console.log(user_details);

delete user_details.func;
console.log(user_details);



// creating objects using Wrapper object 

// Wrapper object provides more functionality

let another = new Object({
    naam:"Sabin Poudel",
    "age":20,
});
console.log(another.naam);
console.log(another["age"]);