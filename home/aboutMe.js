//fizzbuzz.js
var simpleTest = (function() {
    var aboutMe = function() {
        var description = "Software Developer,geek and husband. I can be reached at sai.praneeth@gmail.com";
        return description;
    };

    var fizzBuzz = function() {
        for (i = 0; i < 100; i++) {
            
            console.log(fizzbuzz.getFizzBuzz(i));
        }
    };

    return {
        aboutMe: aboutMe,
        fizzBuzz: fizzBuzz
    };

}());
