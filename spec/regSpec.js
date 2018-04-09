describe("Registration", function() {
    describe('Sussecfull Registration', function() {
        it('should fail', function() {
            expect(submitForm(1,1,1,1)).toBe(4);
        });
        it("Failed Registration", function() {
            expect(submitForm(0,1,1,1)).toBe(3);
        });
        it("Failed Registration", function() {
            expect(submitForm(0,0,1,1)).toBe(2);
        });
         it("Failed Registration", function() {
            expect(submitForm(0,0,0,1)).toBe(1);
        });
         it("Failed Registration", function() {
            expect(submitForm(0,0,0,0)).toBe(0);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,0,0,0)).toBe(1);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,1,0,0)).toBe(2);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,1,1,0)).toBe(3);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,0,1,0)).toBe(2);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,0,1,1)).toBe(3);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,1,0,1)).toBe(3);
        });
         it("Failed Registration", function() {
            expect(submitForm(1,0,0,1)).toBe(2);
        });
          it("Failed Registration", function() {
            expect(submitForm(0,1,0,0)).toBe(1);
        });
           it("Failed Registration", function() {
            expect(submitForm(0,0,1,0)).toBe(1);
        });

    });
});
