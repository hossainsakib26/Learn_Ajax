
let msg = document.getElementById("heading");

function loadDoc() {
	// body...
	const xhttpRequest = new XMLHttpRequest();

	xhttpRequest.onload = function () {
		document.getElementById("getData").innerHTML = this.responseText;

		//console.log(xhttpRequest.response); // show the fake api response
	}

	//-------------------------------
	// Get content from fake api generator
	//-------------------------------
	// xhttpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // fake api responder website
	// xhttpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	
	//-------------------------------
	// Get page contenet
	//-------------------------------
	xhttpRequest.open("GET", "http://localhost/Learn_Ajax/html/ajax_info.html");
	//xhttpRequest.setRequestHeader('Access-Control-Allow-Origin:', '*');
	xhttpRequest.setRequestHeader('Content-Type', 'application/text');

  	xhttpRequest.send();

}