'use strict';

import * from '../../models/index';

export function saveList () {
	let list = new List();
		
	$('input', '#sl-new-list').each(function(index, item) {
		if($(item).val() !== "") {
			let product = new Product($(item).val());
			list.products.push(product);
		}
	});

	if(list.products.length === 0) {
		return;
	}

	$.ajax({
		url: ROOT + '/api/lists',
		type: 'POST',
		dataType: 'json',
		data: 'content=' + JSON.stringify(list)
	})
	.done(function(data) {
		//refresh the main page, display the saved list next to new one form 
		window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/");
	})
	.fail(function() {
		//TODO: think on this
	})
}