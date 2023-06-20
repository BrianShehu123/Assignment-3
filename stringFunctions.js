function reverseString(str){
    return str.split("").reverse().join("")
}

function isPalindrome(str){
let pali=str.split("").reverse().join("")
if(pali===str){
    return true;
}
return false;
}

module.exports={reverseString,isPalindrome}