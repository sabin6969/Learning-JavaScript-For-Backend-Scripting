const numbers = [1001,450,300,490];
// these elements inside numbers are treated as a string and the sorting is performed in term of their ascii value
// expected ouput is 300,450,490,1001
numbers.sort();
console.log(numbers);

numbers.sort((a,b)=>a-b);


// 1001 450
// 1001-450 (positive) 450 aagadi 1001 paxadi gayo
// 450 1001 vayo
console.log(numbers);