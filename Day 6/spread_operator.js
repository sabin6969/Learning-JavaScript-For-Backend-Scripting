let redFriuts = ["Apple","Strawberries"]
let otherFruits = ["Grapes","Oranges","Pineapples"]
let allFruits = [...redFriuts,...otherFruits]; // spread operator
console.log(allFruits);

function addAll(...numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum = numbers[i]+sum;
    }
    return sum;
}

console.log(addAll(1,2,3,4,5,6,7));