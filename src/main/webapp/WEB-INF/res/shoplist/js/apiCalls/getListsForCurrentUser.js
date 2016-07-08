'use strict';

export function getListsForCurrentUser () {
	let shopper = Cookie.get('shopper');

	return $.ajax({
		url: ROOT + '/api/lists',
		type: 'GET',
		dataType: 'json',
		data: {shopper: shopper},
	});
	
}