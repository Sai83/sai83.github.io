(function() {

    describe("fizzbuzztest", function() {

        it("test number multiple of 3 print fizz", function() {
            var expected = fizzbuzz.getFizzBuzz(3);
            expect(expected).toBe("fizz");
        });

        it("test number multiple of 5 print fizz", function() {
            var expected = fizzbuzz.getFizzBuzz(5);
            expect(expected).toBe("buzz");
        });


        it("test number multiple of 3 and 5  print fizzbuzz", function() {
            var expected = fizzbuzz.getFizzBuzz(15);
            expect(expected).toBe("fizzbuzz");
        });


        it("test number multiple of 2 and 4  print number", function() {
            var expected = fizzbuzz.getFizzBuzz(8);
            expect(expected).toBe(8);
        });

        it("test number multiple of 6  print fizz", function() {
            var expected = fizzbuzz.getFizzBuzz(6);
            expect(expected).toBe("fizz");
        });
    });
})();