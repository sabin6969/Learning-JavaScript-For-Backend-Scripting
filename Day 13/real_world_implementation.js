// Real world project implementation of map, filter, reduce, every, some,

// map is used to perform specific operation on element of array
const productDetails = [
    {
        productName:"Acer Aspire 7",
        price:52000,
    },
    {
        productName:"Realme x7 Max",
        price:22000,
    },
    {
        productName:"Boat Airdopes",
        price:1200,
    },
    {
        productName :"Realme smartwatch",
        price:1500,
    }
]

// 10% discount on each product
const discountedProductDetails = productDetails.map(product=>{
    product.price = product.price-product.price*0.1;
    return product;
});
console.log(discountedProductDetails);


// filter
// give product whose price is greater than 20000
const higherPricedProduct = productDetails.filter(product=>{
    return product.price>20000;
});
console.log(higherPricedProduct);


// reduce method
// calculate totalAmount of products
// initial value of total is set to 0
const totalAmount = productDetails.reduce((total,currentProduct)=>total+currentProduct.price,0);
console.log(totalAmount);

// is there any product whose price is greater than 30000
// atleast one condition must be true
let result = productDetails.some((products)=>products.price>30000);
console.log(result);


result = productDetails.every((product)=>product.price>20000);
console.log(result);