$(document).ready(function() {
	
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
});