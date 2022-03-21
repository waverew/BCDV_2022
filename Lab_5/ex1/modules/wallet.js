const sha256 = require("crypto-js/sha256");

    const getAddress = function (){
    const address = sha256(Math.floor((Math.random()*1000)+1));
    console.log('Wallet address is '+address);
}
const addBabki = function (a){
    console.log('Amount: '+a+' deposited');
    }
    const transRes = function(){
        console.log("Transaction recieved");
    }

module.exports = {
    getAddress,
    addBabki,
    transRes
}
    