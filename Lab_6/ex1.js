const timeStep = require ('console-stamp');
console.log("starting to log");
let log = function(){
    console.log("log completed");
}
const time5 = setTimeout(log, 5000);
