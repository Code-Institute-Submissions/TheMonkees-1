describe("givePrice", function() {
    describe('Price Estimation', function() {
        it("should have called the alert function if field duratoin is provided", function() {
            spyOn(window, "alert");
            givePrice("3");
            expect(window.alert).toHaveBeenCalledWith("Estimated Price is 1000 Euros");
        });
    });
});

describe("checkDate", function() {
    describe('Free Date', function() {
        it("should have called the alert function if date is provided", function() {
            spyOn(window, "alert");
            checkDate(0);
            expect(window.alert).toHaveBeenCalledWith("Sorry we do not work Monday - Wednesday");
        });
    });
});