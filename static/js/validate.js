function validateData() {
	var inputs = document.getElementById("pools_form").elements;

	//status test
	var status = inputs["status"].value;
	var isstatus = ["Closed", "Open", "In Renovation"];
	//type test
	var type = inputs["pool_type"].value;
	var istype = ["Neighborhood", "University", "Community"];

	// if all is valid, return true
	if (isstatus.indexOf(status) != -1 && istype.indexOf(type) != -1) {
		return true;
	}
	// invalid status
	else if (isstatus.indexOf(status) == -1) {
		text = "Invalid status. Has to be Closed, Open, or In Renovation.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
	// invalid type
	else if (istype.indexOf(type) == -1) {
		text = "Invalid pool type. Has to be Neighborhood, University, or Community.";
		document.getElementById("error").innerHTML = text;
		console.log(text);
		return false;
	}
}
