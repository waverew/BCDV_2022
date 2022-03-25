let beb = require("progress");
const chalk = require('chalk');
var green = '\u001b[42m \u001b[0m';
var red = '\u001b[41m \u001b[0m';
let downloadBar = new beb(':bar', {
    complete: green,
    witdh:20,
    total: 100});
let setTimeOut = setInterval(function () {
    downloadBar.tick();
    if (downloadBar.complete) {
      console.log('download complete');
      clearInterval(setTimeOut);
    }
  }, 500);
  let startProgress = function(){
      console.log("download started");
      setTimeOut;
  }
  module.exports = {startProgress};