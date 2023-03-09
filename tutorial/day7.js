//functions


function funct(){
    return 5+4
}

console.log(funct());

function declare(a){
    return a**a
}

console.log(declare(7));




function multiply(x,y){
    let total = x*y
    return total
}

console.log(multiply(4,5));

function topla(){
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        
    }
    return total
}

console.log(topla(3,4,5,3,2,45,6,777));

//anonimus function
const sayHello = function(name){
    return` hello ${name}`
}

console.log(sayHello("nahid"));

//self invoking functions

let squaredNums = function(n){
    return n*n
}(3)

//arrow function 


let arrowfunct = (a,b)=>{
    return a**b
}

console.log(arrowfunct(5,4));