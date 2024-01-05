// Some of wierd behaviour of js which doesnot exists in Other programming language

console.log(1+"Sabin"); // any object added with String will result in string
console.log(true+"Hello");

// parseInt
console.log(typeof(parseInt("1211"))); // parseInt converts string into integer
console.log(typeof(parseInt("a111"))); // NaN
console.log(parseInt("a112"));
console.log(typeof(parseInt("12AA"))); // 12