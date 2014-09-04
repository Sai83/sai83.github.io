(function() {
    describe("About Me", function() {

        it("spec about me description", function() {
            var expected = simpleTest.aboutMe();
            expect(expected).toBe("Software Developer,geek and husband. I can be reached at sai.praneeth@gmail.com");
        });
    });
})();