function validateData() {
	var inputs = document.getElementById("pools_form").elements;

	//type test
	var type = inputs["pool_type"].value;
	var istype = ["Neighborhood", "University", "Community"];
	//status test
	var status = inputs["status"].value;
	var isstatus = ["Closed", "Open", "In Renovation"];

	// if all is valid, return true
	if (istype.indexOf(type) != -1 && isstatus.indexOf(status) != -1) {
		return true;
	}
	// invalid type
	else if (istype.indexOf(type) == -1) {
		text = "Invalid pool type. Has to be Neighborhood, University, or Community.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
	// invalid status
	else if (isstatus.indexOf(status) == -1) {
		text = "Invalid status. Has to be Closed, Open, or In Renovation.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
}
