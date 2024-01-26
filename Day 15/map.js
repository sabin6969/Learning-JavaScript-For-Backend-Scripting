// map is collection of key value pairs

// maps are iterable (we can use for of loop in map object)
// key of map can be of any data type

// but they key of object is mostly string (90% string)

const userDetails = new Map();
console.log(userDetails);
// setting key value pair
userDetails.set("name","Sabin Poudel");
console.log(userDetails);
userDetails.set("age",20);
console.log(userDetails);
userDetails.set(1,"One"); // 1 is treated as number (but in case of object 1 is converted into string)

// accessing the value using key
console.log(userDetails.get("name"));
console.log(userDetails.get("umer")??"Umer key doesnot exits");

console.log();
for(let detail of userDetails){
    console.log(`Key is ${detail[0]} and value is ${detail[1]}`);
    console.log(`Type of key is ${typeof detail[0]}`);
    console.log();
}