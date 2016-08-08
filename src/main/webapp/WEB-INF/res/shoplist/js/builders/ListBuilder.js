'use strict';

function ListBuilder () {}

ListBuilder.prototype.create = function(lists) {
	for(var i = 0; i < lists.length; i++) {
		var listData = lists[i];
		var listElement = new SavedList(listData.key, listData.bought);
		
		var listProductsData = JSON.parse(listData.content);
		
		for(var j = 0; j < listProductsData.length; j++) {
			var listProductData = listProductsData[j];
			var productElement = new SavedProduct(listProductData.key, listProductData.name, listProductData.bought);
			$(listElement).append(productElement);
		}
		
		$('.sl-saved-lists').append(listElement);
	}
}

ListBuilder.prototype.parse = function(listForm) {
	// TODO: implement
}