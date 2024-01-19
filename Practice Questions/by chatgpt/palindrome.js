function isPalindrome(stringSentence){
    if(stringSentence){
        let start = 0;
        let end = stringSentence.length-1;
        while(start<=end){
            if(stringSentence[start]===stringSentence[end]){
                start++;
                end--;
            }
            else{
                return "Not a palindrome";
            }
        return true;
        }
    }else{
        return "Empty String";
    }
}

let ans = isPalindrome("madam");
console.log(ans);