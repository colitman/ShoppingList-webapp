'use strict';

function ListService () {}

ListService.prototype
	.saveList = function(list){
		// tries to save list and returns a promise
		return
			$.ajax({
				url: ROOT + '/api/lists',
				type: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(list)
			});
	};

ListService.prototype
	.updateList = function(listForm){
	 // tries to update list and returns a promise  
	};

ListService.prototype
	.getListsByAnonymousOwner = function(shopper){
	 // sends ajax api call and returns a promise 
	};

ListService.prototype
	.getListsByOwner = function(owner){
	 // sends ajax api call and returns a promise 
	};