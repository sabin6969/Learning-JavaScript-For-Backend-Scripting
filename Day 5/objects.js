// Object is a global interface which provides additional functionality
let userDetails = {
    naam:"Sabin",
    address:{
        countryName:"Nepal",
        cityName:"Pokhara",
        zipCode:330020,
    },
    hobbies:["Programming","Learning"],
}
// keys
console.log(Object.keys(userDetails));

// values
console.log(Object.values(userDetails));

// entries i.e keys as well as values
console.log(Object.entries(userDetails));