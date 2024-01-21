const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);

// acc   currentValue  return
// 1      2            3
// 3      3            6
// 6      4             10
// 10     5             15
//ans is 15


// real life example of reduce method

const cartItems = [
    {
        productName:"Laptop",
        price:2000,
    },
    {
        productName:"Mobile",
        price:2000,
    },
    {
        productName:"Mobile Charger",
        price:500,
    }
]


// we can even set initial value of accumulator 
const totalAmount = cartItems.reduce((totalAmount,currentAmount)=>totalAmount+currentAmount.price,0);
console.log(totalAmount);