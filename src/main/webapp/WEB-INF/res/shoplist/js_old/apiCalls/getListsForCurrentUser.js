'use strict';

function getListsForCurrentUser () {
	var shopper = Cookies.get('shopper');

	return $.ajax({
		url: ROOT + '/api/lists',
		type: 'GET',
		dataType: 'json',
		data: {shopper: shopper},
	});
	
}