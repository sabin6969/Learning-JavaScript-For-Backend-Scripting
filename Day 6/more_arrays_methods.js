let users = ["Sabin","Padam","Smith","Sandesh"]
let allUsers = users.join("-") // - is seperator returns new string 
console.log(allUsers);
console.log(typeof allUsers);

users = ["Biren","Ram"];
let newUsers = ["Amit","Sandesh"];
let finalUsers = users.concat(newUsers); // returns a new object (array)
console.log(finalUsers);
console.log(users);
console.log(newUsers);
users.reverse(); // same object is modified 
console.log(users);

console.log(users.slice(0,3)); // end is not inclusive
console.log(users.slice(-1)); // -1 means last
console.log(typeof users);