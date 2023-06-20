function add(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    if (a === 0 || b === 0){
        return 0;
    }
    return a*b
}

function division (a,b){
    if (b === 0){
       return "Error: Division by zero";
    }
    return a/b;
}

module.exports = {add, subtraction , multiplication, division};