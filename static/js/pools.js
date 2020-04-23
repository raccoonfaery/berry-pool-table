var xmlhttp;
// retrieve from the server (python flask)
function retrieveDataFromServer(url, cfunc) {
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=cfunc;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

// initializing the pool table
// retrieve json data  
function displayPools() {
	retrieveDataFromServer("/pools", function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			createTable(xmlhttp.responseText);
		}
	});
}

// creates tables in which rows, then columns, will be created
function createTable(jsonData) {
	// parse json data
	console.log(jsonData);
	poolsData = JSON.parse(jsonData);
	// creates a table element as a child to "poolsDiv"
	var x = document.createElement("TABLE");
	x.className = "table pool-back table-bordered";
	x.setAttribute("id", "pools_table");
	divElement = document.getElementById("poolsDiv");
	divElement.appendChild(x);
	// calls header function, creates table body element, and then adds it to the table element
	createHeaderRow();
	fontWeight = "normal";
	var tbody = document.createElement("tbody");
	document.getElementById("pools_table").appendChild(tbody);
	// for each row of data, create a row,
	// and for each element in the row of data, create a column
	for(i=0; i<poolsData.length; i++) {
		createRow(i);
		createColumn(i, poolsData[i], fontWeight);
	}
}

// creates the header row
function createHeaderRow() {
	var thead = document.createElement("thead");
	document.getElementById("pools_table").appendChild(thead);
	headerRow = {};
	headerRow["Pool_name"] = "Pool_name";
	headerRow["Pool_type"] = "Pool_type";
	headerRow["Status"] = "Status";
	createRow("thead");
	fontWeight = "bold";
	createColumn("thead", headerRow, fontWeight);
}

// creates a row, in which columns will  be created
function createRow(rowId) {
	var y = document.createElement("TR");
	y.setAttribute("id", rowId);
	document.getElementById("pools_table").appendChild(y);
}

function createColumn(rowId, data, fontWeight) {
	// creates pool_name column
	var nameCol = document.createElement("TD");
	nameCol.style.fontWeight = fontWeight;
	nameCol.class = "col px-md-5";
	var nameData = document.createTextNode(data.Pool_name);
	nameCol.appendChild(nameData);
	document.getElementById(rowId).appendChild(nameCol);

	// creates pool_type column
	var typeCol = document.createElement("TD");
	typeCol.style.fontWeight = fontWeight;
	typeCol.class = "col px-md-5";
	var typeData = document.createTextNode(data.Pool_type);
	typeCol.appendChild(typeData);
	document.getElementById(rowId).appendChild(typeCol);

	// creates status column
	var statusCol = document.createElement("TD");
	statusCol.style.fontWeight = fontWeight;
	statusCol.class = "col px-md-5";
	var statusData = document.createTextNode(data.Status);
	statusCol.appendChild(statusData);
	document.getElementById(rowId).appendChild(statusCol);
}
