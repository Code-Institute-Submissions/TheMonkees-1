function givePrice(){
	var field = document.forms["registrationForm"]["duration"].value;
	if (field >= 1 & field <= 4){
        window.alert("Estimated Price for event 1000 Euros");
    }
    else if (field >= 5 & field <= 8){
        window.alert("Estimated Price for event 2000 Euros");
    }
    else {
        window.alert("Estimated Price for event 3000 Euros");
    }
}

function checkDate(){
	var d = document.forms["registrationForm"]["date"].value;
	d = Date.parse(d);
	var n = d.getDay();
	if (n >= 1 & n <= 3){
		window.alert("Sorry we do not work Monday - Wednesday");
	}
	else{
		window.alert("Great! Looks like we are available!");
	}
}