/*describe("givePrice", function() {
    describe('Price Estimation', function() {
        it("should have called return function if field duratoin is provided", function() {
            spyOn()
            givePrice("3");
            expect(return).toHaveBeenCalledWith("Estimated Price for event 1000 Euros");
        });
    });
});*/

/*    describe('Free Date', function() {
        it("should have called return function if date is provided", function() {
            spyOn(console,'return');
            checkDate(1);
            expect(return).toHaveBeenCalledWith("Sorry we do not work Monday - Wednesday");
        });
    });
});*/

describe("checkForm", function() {
    describe ('Check Form', function(){
        it("should have called alert function if duration and date are provided", function(){
            spyOn(window, "alert");
            checkForm("3",1);
            expect(window.alert).toHaveBeenCalledWith('Thank you for your booking!' + ' '+ 'Estimated Price for event 1000 Euros' + ' ' + 'Sorry we do not work Monday - Wednesday')
        })

    })
})