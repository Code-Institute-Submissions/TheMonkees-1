var Name = document.form.user.email
var Mobile = document.form.user.mobile
var Email = document.form.user.email
var Date = document.form.user.date

function IsEmpty(){ 

                if(document.form.user.name == "")
                {
                    var Name = 0;
                }
                else {
                	var Name = 1;
                }
            }


function submitForm(Name,Mobile,Email,Date) {
    var sum = Name + Mobile + Email + Date;
    return sum;
}