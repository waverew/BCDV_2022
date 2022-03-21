
//import { sha256 } from "ethereumjs-util";
//import { addBabki, getAddress } from "../ex1/modules/wallet.js";


let events = require('events');
let eventEmmiter = new events.EventEmitter();
function fn () {
    console.log('call me');
}
eventEmmiter.on('call',fn);
eventEmmiter.emit('call');

//ex2 is done in ./ex1/main.js