$(document).ready(function() {
	
	var data = "";
	var username = "";
	
	controlSidebarLayoutController(data, username);
	skinLayoutController(data, username);
	
	/*
	var username = $('.user-menu>a').text();
	
	$.ajax({
		method: "GET",
		//url: "/docs/configs/ui",
		url: "/docs/users/" + username + "/defaults",
		dataType: "json"
	}).done(function(data){
		controlSidebarLayoutController(data, username);
		skinLayoutController(data, username);
	});
	*/
});