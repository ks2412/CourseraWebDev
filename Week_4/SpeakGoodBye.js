(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(ks_name) {
        console.log(speakWord + " " + ks_name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);