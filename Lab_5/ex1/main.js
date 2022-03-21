
const wallet = require('./modules/wallet.js');
const dep = require('events');
const eventEmmiter = new dep.EventEmitter();
eventEmmiter.on(' deposited', wallet.transRes);


console.log("\n");
wallet.getAddress();

wallet.addBabki(100);
eventEmmiter.emit(' deposited');