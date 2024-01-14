// we can use spread operator even on Object
const obj1 = {
    "key1":"value1",
    "key2":"value2",
}

const obj2 = {
    key3:"Value3",
    key4:"Value4",
}

const newObject = {...obj1,...obj2};
console.log(newObject);