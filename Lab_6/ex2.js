const timeStep = require('console-stamp');
let i = 10;

let countDown = function(){
if (i>0){
    console.log(i);
    i--;
    
}
else{
console.log("time out!");
clearInterval(st);
    }
}
let st = setInterval(countDown,1000);
