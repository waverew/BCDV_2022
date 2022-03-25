const biba = require('events');
const EM = new biba.EventEmitter();
let playGame= function(x){

    if(Number.isInteger(x)){
        let k = 1;
        EM.on("ping",()=>{
            setTimeout(()=>{
                
            if(k<=x){
                console.log("Round "+k);
                console.log("ping");
                EM.emit("pong");
                k++;
            }
        },1000);
        });
        EM.on("pong",()=>{
            setTimeout(()=>{
                console.log("pong");
                if(k>x){
                    console.log("game over");
                }
                EM.emit("ping");
            },1000);
        
        });
        EM.emit("ping");
    
}
}
playGame(4);

