// const is used to declare constant variable

// const variable once initalized cannot be changed at any condition else it will raise an error

const a = 49;
const b = 30;
console.log(a);
console.log(b);
// a = 30; // this will give an error

if(true){
    // scope of naam is within this if only
    const naam = "Sabin Poudel";
}
console.log(naam);