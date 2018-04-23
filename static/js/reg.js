function givePrice(field){
	if (field >= 1 & field <= 4){
        return("Estimated Price for event 1000 Euros");
    }
    else if (field >= 5 & field <= 8){
        return("Estimated Price for event 2000 Euros");
    }
    else {
        return("Estimated Price for event 3000 Euros");
    }
}

function checkDate(d){
	d = new Date(d);
	d = d.getDay();
	if (d >= 0 & d <= 3){
		return("Sorry we do not work Monday - Wednesday");
	}
	else{
		return("Great! Looks like we are available!");
	}
}

function checkForm(field, d){
	window.alert('Thank you for your booking!' + ' '+ givePrice(field) + ' ' + checkDate(d));
}


function myTopnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
