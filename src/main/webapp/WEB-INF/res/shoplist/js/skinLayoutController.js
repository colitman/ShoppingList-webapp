function skinLayoutController(data, username) {
	var currentSkin;
	
	//currentSkin = data.defaultSkinName;
	currentSkin = "skin-black-light";
		
	$('body').addClass(currentSkin);

	/*
	$('.skin-list a').click(function(){
		
		var newSkin = $(this).data('skin');
		
		$('body').removeClass(currentSkin);
		$('body').addClass(newSkin);
		
		currentSkin = newSkin;

		//send newSkin to DB
		$.ajax({
			method: "PUT",
			//url: "/docs/configs/ui/defaults/skin/" + newSkin,
			url: "/docs/users/" + username + "/defaults/skin/" + newSkin,
			dataType: "json"
		});
	});
	*/
}