'use strict';

function ListService () {}

ListService.prototype.getLists = function(options) {
	return $.ajax({
		url: ROOT + '/api/lists',
		type: 'GET',
		dataType: 'json',
		data: options
	});
}

ListService.prototype
	.getList = function(id){
		// tries to receive a list and returns a promise
		return $.ajax({
				url: ROOT + '/api/lists/' + id,
				type: 'GET',
				dataType: 'json',
				contentType: 'application/json'
			});
	};

ListService.prototype
	.saveList = function(list){
		// tries to save list and returns a promise
		return $.ajax({
				url: ROOT + '/api/lists',
				type: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(list)
			});
	};

ListService.prototype
	.updateList = function(list){
		// tries to update list and returns a promise
		return $.ajax({
				url: ROOT + '/api/lists/' + list.key,
				type: 'PUT',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(list)
			});  
	};

/*
ListService.prototype
	.getListsByAnonymousOwner = function(shopper){
		// sends ajax api call and returns a promise 
	return $.ajax({
			url: ROOT + '/api/lists',
			type: 'GET',
			dataType: 'json',
			data:{
				shopper: shopper
			}
		});
	};

ListService.prototype
	.getListsByOwner = function(owner){
		// sends ajax api call and returns a promise
	return $.ajax({
				url: ROOT + '/api/lists',
				type: 'GET',
				dataType: 'json',
				data:{
					owner: owner
				}
			});
	};
*/