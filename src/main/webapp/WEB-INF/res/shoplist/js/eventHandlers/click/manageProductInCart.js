'use strict';

function manageProductInCart (savedListElement, button) {
	
	var targetId = $(button).data('target');

	$('tr#' + targetId).toggleClass('sl-bought-product');
	$(button).toggleClass('btn-success btn-warning');
	$('i', button).toggleClass('fa-cart-plus fa-minus');

	var list = new List();

	$('.sl-saved-product', savedListElement).each(function(index, item) {
		var productName = $('.sl-product-name', item).text();
		var product = new Product(productName);
		var isBought = $(item).hasClass('sl-bought-product');
		product.bought = isBought;
		list.products.push(product);
	});

	$.ajax({
		url: ROOT + '/api/lists/' + $(savedListElement).attr('id'),
		type: 'PUT',
		dataType: 'json',
		data: 'content=' + JSON.stringify(list)
	})
	.done(function(data) {
		console.log("success");
	})
	.fail(function(jqXHR, textStatus, errorThrown) {
		console.log("error");
	});
	

}