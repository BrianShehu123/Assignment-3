function reverseString(str) {
    if (typeof str!=='string') {
        throw new TypeError('Expected a string');
    }

    return str.split('').reverse().join('');
}

function isPalindrome(str){
let pali=str.split("").reverse().join("")
if(pali===str){
    return true;
}
return false;
}

module.exports={reverseString,isPalindrome}