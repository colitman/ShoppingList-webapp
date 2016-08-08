'use strict';

function ListBuilder () {}

/**
 * Converts a collection of domain list objects to DOM
 * and places DOM to proper place on page
 *
 * @param lists - collection of domain list objects
 */
ListBuilder.prototype.create = function(lists) {
	for(var i = 0; i < lists.length; i++) {
		var listData = lists[i];
		var listElement = new SavedList(listData.key, listData.bought, listData.publicList);
		
		var listProductsData = JSON.parse(listData.content);
		
		for(var j = 0; j < listProductsData.length; j++) {
			var listProductData = listProductsData[j];
			var productElement = new SavedProduct(listProductData.key, listProductData.name, listProductData.bought);
			$('table', listElement).append(productElement);
		}
		
		$('.sl-saved-lists').append(listElement);
	}
}

/**
 * Converts DOM list object to domain list object
 *
 * @param listForm - list DOM object
 *
 * @returns List domain list  object
 */
ListBuilder.prototype.parse = function(listForm) {
	var list = new List();
	list.key = $(listForm).attr('id');
	list.bought = $(listForm).data('bought');
	list.publicList = $(listForm).data('public');
	
	$('tr', listForm).each(function(productIndex, productElement) {
		var product = new Product($('.sl-product-name', productElement).text());
		product.key = $(productElement).attr('id');
		product.bought = $(productElement).data('bought');
		
		list.content.push(product);
	});
	
	return list;
}