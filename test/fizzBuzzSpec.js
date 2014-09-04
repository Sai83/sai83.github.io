(function() {

    describe("fizzbuzztest", function() {

        it("test number multiple of 3 print fizz", function() {
            var expected = fizzbuzz.getFizz(3);
            expect(expected).toBe("fizz");
        });

        it("test number multiple of 5 print fizz", function() {
            var expected = fizzbuzz.getBuzz(5);
            expect(expected).toBe("buzz");
        });


        it("test number multiple of 3 and 5  print fizzbuzz", function() {
            var expected = fizzbuzz.getFizzBuzz(15);
            expect(expected).toBe("fizzbuzz");
        });


        it("test number multiple of 2 and 4  print empty", function() {
            var expected = fizzbuzz.getFizzBuzz(8);
            expect(expected).toBe("");
        });

        it("test number multiple of 6  print fizz", function() {
            var expected = fizzbuzz.getFizzBuzz(6);
            expect(expected).toBe("fizz");
        });
    });
})();