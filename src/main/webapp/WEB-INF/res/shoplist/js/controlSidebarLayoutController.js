function controlSidebarLayoutController(data, username) {
	var currentLayout;
	
	currentLayout = data.defaultControlSidebarLayoutName;
	
	$('.control-sidebar').addClass(currentLayout);

	$('input[data-sidebarskin="toggle"]').click(function(){
		$('.control-sidebar').toggleClass('control-sidebar-light');
		$('.control-sidebar').toggleClass('control-sidebar-dark');
		
		var newLayout;
		
		if ($('.control-sidebar').hasClass('control-sidebar-light')) {
			newLayout = 'control-sidebar-light';
		} else {
			newLayout = 'control-sidebar-dark';
		}
		
		//send newLayout to DB
		$.ajax({
			method: "PUT",
			//url: "/docs/configs/ui/defaults/controlSidebarLayout/" + newLayout,
			url: "/docs/users/" + username + "/defaults/controlSidebarLayout/" + newLayout,
			dataType: "json"
		});
	});
}