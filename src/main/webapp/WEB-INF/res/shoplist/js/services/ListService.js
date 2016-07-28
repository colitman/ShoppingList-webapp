'use strict';

function ListService () {
														LOGGER.debug('ListService initialized');
}

ListService.prototype
	.saveList = function(list){
														LOGGER.debug('Sending save list ajax');
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
														LOGGER.debug('Sending update list ajax');
	 // tries to update list and returns a promise
	 return $.ajax({
				url: ROOT + '/api/lists/' + list.key,
				type: 'PUT',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(list)
			});  
	};

ListService.prototype
	.getListsByAnonymousOwner = function(shopper){
														LOGGER.debug('Sending get lists by anonymous owner ajax');
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
														LOGGER.debug('Sending get lists by owner ajax');
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