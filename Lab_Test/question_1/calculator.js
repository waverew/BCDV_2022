let multiplyTwoNumbers = function(x,y){
    if (Number.isInteger(x) && Number.isInteger(y)){
        console.log("multiply x and y = "+x*y);
    }
    else{
        throw 'error';
    }
}
let evenDouble = function (x){
    if (Number.isInteger(x) && x!==1 && x % 2 == 0 ){
        console.log("even double = "+x*x);
    }
    else if (Number.isInteger(x) && x % 2 !== 0){
        console.log(0);
    }
    else {
        throw 'error';
    }
    
}

module.exports =  {evenDouble, multiplyTwoNumbers}
