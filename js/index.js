
let msg = document.getElementById("heading");

function loadDoc() {
	// body...
	var xhttpRequest = new XMLHttpRequest();

	
	xhttpRequest.onreadystatechange  = getTestData;

	xhttpRequest.open("GET", "https://reqres.in/api/users");
	//xhttpRequest.open("POST", "ajax_info.txt");
	//xhttpRequest.setRequestHeader('Access-Control-Allow-Origin:', '*');
	//httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhttpRequest.responseType = 'json';

	xhttpRequest.onload = () => {
		const data = xhttpRequest.response;
		console.log(data);
	}

  	xhttpRequest.send();

	function getTestData () {

		if (this.readyState == 4 && this.status === 200) {
			document.getElementById("getData").innerHTML = this.response;
		}

		console.log(xhttpRequest.readyState, xhttpRequest.status, this.getAllResponseHeaders());
		//document.getElementById("getData").innerHTML = this.responseText;
	}

}