const users = ["Sabin","Biren","Amit","Raj","Padam","Smith"];
let [user1,user2]= users;
console.log(user1);
console.log(user2);
let [,,user3,user4,...rest]=users;
console.log(user3);
console.log(user4);
console.log(rest);