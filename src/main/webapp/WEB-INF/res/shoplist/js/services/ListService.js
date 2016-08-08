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
		return $.ajax({
				url: ROOT + '/api/lists/' + id,
				type: 'GET',
				dataType: 'json',
				contentType: 'application/json'
			});
	};

ListService.prototype
	.saveList = function(list){
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
		return $.ajax({
				url: ROOT + '/api/lists/' + list.key,
				type: 'PUT',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(list)
			});  
	};