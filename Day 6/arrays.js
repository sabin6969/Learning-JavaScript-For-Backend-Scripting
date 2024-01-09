let users = ["Sabin","Amit","Ram","Binod","Kulbahadur"];
console.log(users);
users.push("Raj");
console.log(users);
users.pop(); // removes element at last
console.log(users);
console.log(users.push("Binod Bahadur")); // addes a new item and returns its new length
console.log(users.pop()); // removes elements at last
delete users[3]; // removes element at 3rd index
console.log(users);
users.unshift("1st User"); // adds element at first
console.log(users); 
users.shift(); // removes first element
console.log(users);
console.log(users[0]); // first element
console.log(users[users.length-1]); // last element