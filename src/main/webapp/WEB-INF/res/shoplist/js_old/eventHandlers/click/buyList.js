'use strict';

function buyList(key) {
	$.ajax({
		url: ROOT + '/api/lists/' + key,
		type: 'PUT',
		dataType: 'json',
		data: 'bought=true'
	})
	.done(function(data) {
		//change list panel color and disable the "Buy" button
		window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/");
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
		//TODO: think on this
	})
}