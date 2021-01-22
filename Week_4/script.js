//Assignment 4 Solutkson:

(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var ks = 0; ks < names.length; ks++) {
        var firstLetter = names[ks].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[ks]);
        } else {
            helloSpeaker.speak(names[ks]);
        }
    }
})();