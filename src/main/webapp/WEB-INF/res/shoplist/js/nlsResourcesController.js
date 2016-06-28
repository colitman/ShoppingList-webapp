$(document).ready(function(){
	$.ajax({
		method: "GET",
		url: "/docs/resources",
		dataType: "json"
	}).done(function(data) {
		$('span.nls-resource').each(function(){
			var found = false;
			for(var res in data) {
				if(data[res].resource.id === $(this).data('id')) {
					$(this).html(data[res].text);
					found = true;
				}
			}
			
			if(!found) {
				$(this).text("!!!" + $(this).data('id') + "!!!");
			}
		});
	});
});