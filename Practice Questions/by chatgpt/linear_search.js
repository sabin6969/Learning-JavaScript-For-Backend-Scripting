// Program to implement linear search in JavaScript
function linearSearch(arrayOfNumbers,target){


    for(let index in arrayOfNumbers){
        // if target found return its index
        if(arrayOfNumbers[index]===target){
            return index;
        }
    }
    // return -1 if not found
    return -1;
}

let numbers = [12,43,66,81,90,56,32,12];
console.log(linearSearch(numbers,33));