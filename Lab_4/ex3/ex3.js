const say = require("say");
let speak = function (){
say.speak("hellno!");
say.stop();
say.speak("hello? , alex",0.5);
}
speak();
let speak1 = function(){
    say.speak("Im sorry, Dave");
}
setTimeout(speak1,5000);

