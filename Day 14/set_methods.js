let numbers = new Set();
numbers.add(101);
console.log(numbers);
numbers.add(102);
console.log(numbers);
// duplicate items is not accepted
numbers.add(101);
console.log(numbers);


let items1 = ["item1","item2","item3"];
let items2 = ["item1","item2","item3"];
numbers.add(items1);
numbers.add(items2);
// this is accepted because items1 and items2's memory location is different
console.log(numbers);

console.log(numbers[0] ?? "Cannot be accesed using index");
// gives undefined


// to check whether  object is present inside set or not
const result = numbers.has(101);
console.log(result);