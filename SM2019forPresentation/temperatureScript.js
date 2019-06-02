 $(document).ready(function() {
	load() 
});

function load()
 {
	var mydata = JSON.parse(data);
	$("#temperature").html(mydata[0].temperature);
	$("#humidity").html(mydata[0].humidity);
	setInterval(() => {
			var mydata = JSON.parse(data);
			$("#temperature").html(mydata[0].temperature);
			$("#humidity").html(mydata[0].humidity);
	}, 10000);
}	
