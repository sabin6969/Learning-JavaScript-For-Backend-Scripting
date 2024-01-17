function binarySearch(arrayOfNumber,target){
    let start = 0;
    let end = arrayOfNumber.length-1;
    let middle = Math.floor((start+end)/2);
    while(start<=end){
        if(arrayOfNumber[middle]===target){
            return middle;
        }
        else if(arrayOfNumber[middle]>target){
            end = middle-1;
        }
        else{
            start = middle+1;
        }
        middle = Math.floor((start+end)/2);
    }
    return -1;
}


// binary search only works on sorted array
// time complexity for binary search is 0(logn)
let sortedNumber = [12,23,45,76,80,91,92,99];
console.log(binarySearch(sortedNumber,450));