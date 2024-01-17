// Program to implement bubble sort 


// time complexity for bubble sort is 0(n2)
function sortNumber(numbers){
    for(let i=0;i<numbers.length-1;i++){
        for(let j=0;j<numbers.length-i-1;j++){
            if(numbers[j]>numbers[j+1]){
                let temp = numbers[j];
                numbers[j]=numbers[j+1];
                numbers[j+1]=temp;
            }
        }
    }
    console.log(numbers);
}

let unsortedNumber = [12,234,11,45,78,91];
sortNumber(unsortedNumber);