(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(ks_name) {
        console.log(speakWord + " " + ks_name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);