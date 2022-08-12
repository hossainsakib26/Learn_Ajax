
let msg = document.getElementById("heading");

function loadDoc() {
	// body...
	const xhttpRequest = new XMLHttpRequest();

	xhttpRequest.onload = function () {
		document.getElementById("getData").innerHTML = this.responseText;
		console.log(xhttpRequest);
	}

	xhttpRequest.open("GET", "http://localhost:5000/ajax_info.html");
	console.log(xhttpRequest.getAllResponseHeaders());
	//xhttpRequest.setRequestHeader('Access-Control-Allow-Origin:', '*');
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  	xhttpRequest.send();

}