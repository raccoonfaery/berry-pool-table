function validateData() {
	var inputs = document.getElementById("pools_form").elements;

	//status test
	var status = inputs["status"].value;
	var isstatus = ["Closed", "Open", "In Renovation"];
	//phone test
	var phone = inputs["phone"].value;
	var isphone = /^\d{10}$/;
	//type test
	var type = inputs["pool_type"].value;
	var istype = ["Neighborhood", "University", "Community"];

	// if all is valid, return true
	if (isstatus.indexOf(status) != -1 && phone.match(isphone) && istype.indexOf(type) != -1) {
		return true;
	}
	// invalid status
	else if (isstatus.indexOf(status) == -1){
		text = "Invalid status. Has to be Closed, Open, or In Renovation.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
	// invalid phone
  	else if (phone.match(isphone) == null){
		text = "Invalid phone number. Has to be a 10 digit number without hyphens.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
	// invalid type
	else if (istype.indexOf(type) == -1){
		text = "Invalid pool type. Has to be Neighborhood, University, or Community.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
}
