var attempt=3;
function validate()
{
	var username = document.forms["myLogin"]["username1"].value;
	var password = document.forms["myLogin"]["password1"].value;
	if (username == "deven" && password == "deven1") {
		alert ("login successfully!");
		window.location= "success.html";
		return false;
	}
	else{
		attempt--;
		alert("You have "+attempt+" left");
		if (attempt==0) {
			document.forms["myLogin"]["username1"].disabled = true;
			document.forms["myLogin"]["password1"].disabled = true;
			document.forms["myLogin"]["submit1"].disabled = true;
			return false;
		}
	}
}