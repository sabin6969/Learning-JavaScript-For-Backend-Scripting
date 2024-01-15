let userDetails = [
    {
        naam:"Sabin Poudel",
        age:20,
        "address":"Pokhara",
    },
    {
        naam:"Sandesh Shahi",
        age:19,
        "address":"Rajkot",
    },
    {
        naam:"Smith Bhattarai",
        age:29,
        address:"Sunuwal",
    }
]

for(let users of userDetails){
    console.log(users.naam);
    console.log(users["age"]);
    console.log(users["address"]);
    console.log("\n");
}