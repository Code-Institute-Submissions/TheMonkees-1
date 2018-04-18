describe("validateForm", function() {
    describe('Registration Notice', function() {
        it("should have called the alert function if either field is undefined", function() {
            spyOn(window, "alert");
            validateForm("");
            expect(window.alert).toHaveBeenCalledWith("Please fill in all information");
        });
    });
});