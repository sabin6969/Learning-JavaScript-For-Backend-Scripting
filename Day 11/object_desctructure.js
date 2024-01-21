const userDetails = {
    naam:"Sabin Poudel",
    age:20,
    address:"Pokhara",
}

// destructring object in parameter
function displayDetails({naam,age,address:thegana}){
    console.log(naam);
    console.log(age);
    console.log(thegana);
}

displayDetails(userDetails);