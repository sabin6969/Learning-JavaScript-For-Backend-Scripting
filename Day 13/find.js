// find is a higher order function

const userDetails = [
    {
        naam:"Sabin Poudel",
        uid:1,
    },
    {
        naam:"Birendra Bahadur",
        uid:2,
    },
    {
        naam:"Sunil Poudel",
        uid:4,
    }
]

let user = userDetails.find((user)=>user.uid===3);
console.log(user??"User not found");
user = userDetails.find(function(user){
    return user.uid===2;
});
console.log(user??"User not found");