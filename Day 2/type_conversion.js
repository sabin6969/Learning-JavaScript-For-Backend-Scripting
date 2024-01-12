// conversion from String to number

let no = "12";
console.log(typeof no);
console.log(typeof parseInt(no));
console.log(typeof +no); // + is short form for parseInt
console.log(typeof Number(no)); 

// conversion from number to string

let number = 123;
console.log(typeof (number+"")); // when + is used with string resulting data type is string
console.log(typeof String(number));