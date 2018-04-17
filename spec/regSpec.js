<<<<<<< HEAD
describe("validateForm", function() {
    describe('Registration Notice', function() {
        it("should have called the alert function if either field is undefined", function() {
            spyOn(window, "alert");
            validateForm("");
            expect(window.alert).toHaveBeenCalledWith("Please fill in all information");
        });
    });
});
       
=======
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
>>>>>>> 7dae0df73d3e7b4fa65543a1cd8390f313be11e1
